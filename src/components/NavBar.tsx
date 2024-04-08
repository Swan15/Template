import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function NavBar() {
    const user = await currentUser()

    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <Link href='/' className='btn btn-ghost text-xl'>
                    Template
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link href='/'>Link</Link>
                    </li>
                    {user && (
                        <li>
                            <UserButton />
                        </li>
                    )}
                    {!user && (
                        <li>
                            <SignInButton>Sign in</SignInButton>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
