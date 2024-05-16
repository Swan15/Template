// import { supabase } from '@/supabase'
// import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Footer() {
    // const user = await currentUser()
    // const { data } = await supabase
    //     .from('subscription')
    //     .select('solo')
    //     .eq('email', user?.emailAddresses[0].emailAddress ?? '')

    return (
        <footer className='flex h-52 w-full justify-between bg-secondary text-secondary-content p-12 px-4  text-tertiary-color lg:px-16'>
            <h3 className=' text-4xl font-bold'>Template</h3>
            <div className='flex flex-row gap-16'>
                <Link className='h-fit hover:underline' href={'/privacy-policy'}>
                    Privacy Policy
                </Link>
                <Link className='h-fit hover:underline' href={'/tos'}>
                    Terms of Service
                </Link>

                {/* {user && !!data?.length && (
                    <a
                        className='h-fit hover:underline'
                        href={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL}
                        target='_blank'
                    >
                        Manage Subscription
                    </a>
                )} */}
            </div>
        </footer>
    )
}
