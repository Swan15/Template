export default function Pricing() {
    return (
        <section
            id='pricing'
            className='flex flex-col items-center gap-8 py-8 text-center'
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
                    <div className='flex h-full flex-col justify-between gap-4 p-8'>
                        <div className='flex flex-col items-center justify-between gap-4'>
                            <h3 className='font-urbanist text-2xl font-bold'>
                                Base Plan
                            </h3>
                            <p className='font-urbanist text-2xl font-bold'>
                                <s className='text-xl'>$50</s> $30 per year
                            </p>
                        </div>
                        <ul className='flex w-full flex-grow list-inside list-disc flex-col justify-start gap-4 text-start'>
                            <li>Base feature</li>
                            <li>Base feature</li>
                            <li>Base feature</li>
                        </ul>
                        <a className='btn btn-primary w-full'>Get Started</a>
                    </div>
                </div>
                <div className='border-secondary-color bg-primary-color text-tertiary-color relative w-full rounded-3xl border-4 md:w-[400px]'>
                    <div className='flex h-full flex-col justify-between gap-4 p-8'>
                        <div className='flex flex-col items-center justify-between gap-4'>
                            <h3 className='font-urbanist text-2xl font-bold'>
                                Pro Plan
                            </h3>
                            <p className='font-urbanist text-2xl font-bold'>
                                <s className='text-xl'>$70</s> $50 per year
                            </p>
                        </div>
                        <ul className='flex w-full list-inside list-disc flex-col justify-start gap-4 text-start'>
                            <li>
                                <strong>All base features</strong>
                            </li>
                            <li>And more</li>
                            <li>And more</li>
                        </ul>
                        <a className='btn btn-primary w-full'>Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
