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
                        className='h-[200px] w-[150px] rounded'
                    />
                    <div className='flex flex-col gap-2'>
                        <span className='text-lg font-bold'>
                            Hi I&apos;m Alex 👋
                        </span>
                        <span className='text-sm'>
                            I built EmailMe to scratch my own itch. I like to
                            build and it seemed like every time I setup a new
                            project I would need to pay for a business email and
                            setup some way to notify myself when someone
                            contacted me through one of my websites. So I built
                            EmailMe to save me time and money. Now I am sharing
                            it with you so you can focus on building products
                            people love and not worrying about things that truly
                            don&apos;t matter, like a business email.
                        </span>
                    </div>
                </div>
                {!user && (
                    <div className='flex w-full items-center justify-between'>
                        {/* <SignUpButton mode='modal'> */}
                        <button className='btn btn-primary'>
                            Sign up to contact me
                        </button>
                        {/* </SignUpButton> */}
                        <span className='font-bold'>or</span>
                        <a
                            href='https://twitter.com/messages/compose?recipient_id=alexanderaeswan'
                            className='btn btn-secondary'
                        >
                            Message me on twitter
                        </a>
                    </div>
                )}
                {user && <ContactForm />}
            </div>
        </div>
    )
}
