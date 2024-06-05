'use client'

import { createClient, supabaseClient } from '@/helpers/supabase/client'
import validateEmail from '@/helpers/validateEmail'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Loading from '@/app/loading'
import { baseUrl } from '@/helpers/url'
import Link from 'next/link'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)
    const supabase = createClient()
    const router = useRouter()

    useEffect(() => {
        const checkUser = async () => {
            const session = await supabase.auth.getSession()
            if (session.data.session?.user) {
                setUser(session.data.session?.user || null)
            }
            setLoading(false)
        }

        checkUser()

        // Listen for changes in auth state
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user || null)
            }
        )

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [supabase.auth])

    useEffect(() => {
        if (user) {
            setLoading(true)
            router.refresh()
        }
    }, [router, user])

    async function signInWithEmail() {
        if (!validateEmail(email)) {
            toast.error('Invalid email')
            return
        }
        const { error } = await supabaseClient.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${baseUrl()}`,
            },
        })
        if (error) {
            toast.error(error.message)
        } else {
            setSent(true)
        }
    }

    async function verifyOTP() {
        const { error } = await supabaseClient.auth.verifyOtp({
            email,
            token,
            type: 'email',
        })
        if (error) {
            toast.error(error.message)
        } else {
            router.push('/')
        }
    }

    if (loading) {
        return <Loading />
    }
    return (
        <div className='flex h-[70vh] w-screen flex-col items-center justify-center gap-4'>
            {!sent && (
                <>
                    <h1 className='text-4xl font-bold'>Sign in</h1>
                    <div className='mx-auto flex w-72 flex-col gap-2'>
                        <label className='input input-bordered flex w-full items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='h-4 w-4 opacity-70'
                            >
                                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                            </svg>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='grow'
                                placeholder='Email'
                            />
                        </label>
                        <button
                            onClick={signInWithEmail}
                            className='btn w-full'
                        >
                            Get magic link
                        </button>
                        <span className='text-xs'>
                            By signing up you agree to our Terms of Service and
                            Privacy Policy.
                        </span>
                    </div>
                </>
            )}
            {sent && (
                <>
                    <h1 className='text-4xl font-bold'>Check your email!</h1>
                    <h2 className='text-lg'>
                        Use the magic link or the one time password
                    </h2>
                    <div className='mx-auto flex w-72 flex-col gap-2'>
                        <label className='input input-bordered flex w-full items-center gap-2'>
                            <input
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                type='text'
                                className='grow'
                                placeholder='Code'
                            />
                        </label>
                        <button onClick={verifyOTP} className='btn w-full'>
                            Sign in
                        </button>
                    </div>
                </>
            )}
            {user && (
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>
                        You are already signed in
                    </h1>
                    <Link href='/' className='btn w-full'>
                        Go to homepage
                    </Link>
                </div>
            )}
        </div>
    )
}
