// import { SignInButton, UserButton } from '@clerk/nextjs'
// import { currentUser } from '@clerk/nextjs/server'
// import Image from 'next/image'
import Link from 'next/link'

export default async function Navbar() {
    // const user = await currentUser()

    return (
        <nav className='navbar bg-base-100 px-4 lg:px-16'>
            <div className='flex-1'>
                <Link
                    href='/'
                    className='font-urbanist flex items-center justify-center gap-2 text-xl font-bold'
                >
                    {/* <Image src='/logo.png' alt='logo' width={50} height={50} /> */}
                    <span>Template</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal items-center gap-4 px-1'>
                    <li>
                        <Link className='hidden md:block' href='/#contact'>
                            Contact Us
                        </Link>
                    </li>
                    {/* {!user && (
                        <li>
                            <SignInButton>
                                <a>Login</a>
                            </SignInButton>
                        </li>
                    )}
                    {user && (
                        <li>
                            <UserButton afterSignOutUrl='/' />
                        </li>
                    )} */}
                </ul>
            </div>
        </nav>
    )
}
