export default function SecondCTA() {
    return (
        <div className='w-full bg-primary-color py-12 text-tertiary-color'>
            <div className='m-auto flex max-w-lg flex-col items-center justify-center gap-8 px-2 text-center'>
                <h2 className='text-2xl font-bold'>
                    Focus on what really matters and know when your users need
                    you
                </h2>
                <p>
                    Do things that don&apos;t scale and focus on what really
                    matters, your customers.
                </p>
                <a
                    href={process.env.NEXT_PUBLIC_SOLOPRENEUR_PLAN_LINK}
                    className='btn btn-primary'
                >
                    Get Started Today
                </a>
            </div>
        </div>
    )
}
