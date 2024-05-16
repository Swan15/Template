// import { SignUpButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import ContactForm from './ContactForm'

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
                    <div className='flex gap-2 flex-col w-full justify-between'>
                        {/* <SignUpButton mode='modal'> */}
                        <button className='btn btn-sm btn-primary'>
                            Sign up to contact me
                        </button>
                        {/* </SignUpButton> */}
                        <a
                            href='https://x.com/alexanderaeswan'
                            className='btn btn-sm btn-secondary'
                        >
                            Follow me on twitter
                        </a>
                    </div>
                )}
                {user && <ContactForm />}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
