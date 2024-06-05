import Link from 'next/link'

export default async function Footer() {
    return (
        <footer className='text-tertiary-color flex h-36 w-full items-center justify-between p-12 px-4 lg:px-16'>
            <h3 className='text-xl font-bold md:text-4xl'>Template</h3>
            <div className='flex flex-row gap-4 md:gap-16'>
                <Link
                    className='h-fit hover:underline'
                    href={'/privacy-policy'}
                >
                    Privacy Policy
                </Link>
                <Link className='h-fit hover:underline' href={'/tos'}>
                    Terms of Service
                </Link>
            </div>
        </footer>
    )
}
