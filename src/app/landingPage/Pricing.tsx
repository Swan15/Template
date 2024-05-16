export default function Pricing() {
    return (
        <section
            id='pricing'
            className='flex flex-col items-center gap-8 px-12 py-8 text-center md:px-64'
        >
            <div className='flex flex-col items-center gap-4'>
                <h2 className='font-urbanist text-2xl font-bold'>
                    Stop wasting time and money
                </h2>
                <p className='text-md font-urbanist'>
                    You don&apos;t need to setup a new project each time
                </p>
                <div className='badge badge-primary animate-pulse whitespace-nowrap'>
                    ✨ Launch discount — $20 OFF ✨
                </div>
            </div>
            <div className='flex flex-col gap-8 md:flex-row'>
                <div className='border-secondary-color bg-primary-color text-tertiary-color relative w-full rounded-3xl border-4 md:w-[400px]'>
                    <div className='absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
                        <span className='badge border-0 bg-primary text-xs font-semibold text-primary-content'>
                            Recommended
                        </span>
                    </div>
                    <div className='flex h-full flex-col items-center justify-between gap-4 p-8'>
                        <h3 className='font-urbanist text-2xl font-bold'>
                            Base Plan
                        </h3>
                        <p className='font-urbanist text-2xl font-bold'>
                            <s className='text-xl'>$50</s> $30 per year
                        </p>
                        <ul className='flex w-full list-inside list-disc flex-col justify-start gap-4 text-start'>
                            <li>Base feature</li>
                            <li>Base feature</li>
                            <li>Base feature</li>
                        </ul>
                        <a
                            className='btn btn-primary w-full'
                            href={
                                process.env.NEXT_PUBLIC_BASE_PLAN +
                                '?prefilled_promo_code=LAUNCH'
                            }
                        >
                            Get Started with EmailMe
                        </a>
                    </div>
                </div>
                <div className='border-secondary-color bg-primary-color text-tertiary-color relative w-full rounded-3xl border-4 md:w-[400px]'>
                    <div className='flex flex-col items-center justify-between gap-4 p-8'>
                        <h3 className='font-urbanist text-2xl font-bold'>
                            Pro Plan
                        </h3>
                        <p className='font-urbanist text-2xl font-bold'>
                            <s className='text-xl'>$70</s> $50 per year
                        </p>
                        <ul className='flex w-full list-inside list-disc flex-col justify-start gap-4 text-start'>
                            <li>Up to 5 email address</li>
                            <li>Up to 300 emails per month</li>
                            <li>
                                Unlimited notifications saved to your dashboard
                            </li>
                            <li>Dashboard link available to your whole team</li>
                        </ul>
                        <a
                            className='btn btn-primary w-full'
                            href={
                                process.env.NEXT_PUBLIC_PRO_PLAN_LINK +
                                '?prefilled_promo_code=LAUNCH'
                            }
                        >
                            Get Started with EmailMe
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
