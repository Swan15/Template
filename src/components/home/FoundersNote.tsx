import Image from 'next/image'
import ContactForm from './ContactForm'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'

export default function FoundersNote({ user }: { user: User | null }) {
    return (
        <div id='contact' className='w-full py-8 pb-12'>
            <div className='m-auto flex max-w-lg flex-col items-center justify-center gap-4'>
                <div className='flex max-w-lg items-center justify-center gap-4'>
                    <Image
                        alt='user'
                        src='/me.jpg'
                        width={150}
                        height={200}
                        className='h-[200px] w-[150px] rounded-2xl'
                    />
                    <div className='flex flex-col gap-2'>
                        <span className='text-lg font-bold'>
                            Hi I&apos;m Alex 👋
                        </span>
                        <span className='text-sm'>
                            I love building and built this as well.
                        </span>
                        {!user && (
                            <div className='flex w-full flex-col justify-between gap-2'>
                                <a
                                    href='https://x.com/alexanderaeswan'
                                    className='btn btn-ghost btn-sm'
                                >
                                    Follow me on twitter
                                </a>
                                {/* <SignUpButton mode='modal'> */}
                                <Link
                                    href='/sign-in'
                                    className='btn btn-primary btn-sm'
                                >
                                    Sign up to contact me
                                </Link>
                                {/* </SignUpButton> */}
                            </div>
                        )}
                        {user && <ContactForm />}
                    </div>
                </div>
            </div>
        </div>
    )
}
