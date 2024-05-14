export default function PainPoints() {
    return (
        <section className='w-full text-center'>
            <div className='flex h-fit w-full flex-col items-center gap-8 rounded-3xl bg-primary-color py-8 pb-16'>
                <h3 className='font-urbanist text-5xl font-bold text-tertiary-color'>
                    Less of this
                </h3>
                <div className='w-full max-w-xl rounded-3xl'>
                    <div className='chat chat-start'>
                        <div className='chat-bubble bg-tertiary-color text-primary-color'>
                            I asked for this feature two weeks ago and
                            didn&apos;t even get a response!!! 🤬
                        </div>
                    </div>
                    <div className='chat chat-end'>
                        <div className='chat-bubble bg-tertiary-color text-primary-color'>
                            I&apos;m so sorry I didn&apos;t see the
                            notification. Will work on it now.
                        </div>
                    </div>
                </div>
                <h3 className='font-urbanist text-5xl font-bold text-tertiary-color'>
                    With just one function!
                </h3>
                <div className='mockup-code mx-auto border border-tertiary-color bg-black/15 text-tertiary-color '>
                    <pre data-prefix='1'>
                        <code className='text-wrap'>
                            emailMe(`$&#123;name&#125; has sent you a request`,
                            `$&#123;details&#125;`){' '}
                        </code>
                    </pre>
                </div>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-10 w-10 fill-tertiary-color'
                >
                    <path
                        fillRule='evenodd'
                        d='M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z'
                        clipRule='evenodd'
                    />
                </svg>
                <div className='text-lg font-bold text-tertiary-color md:hidden'>
                    ✉️ Alex sent you a request
                </div>
                <div className='mockup-browser mx-auto hidden max-w-lg border border-base-300 bg-tertiary-color md:block'>
                    <div className='mockup-browser-toolbar'>
                        <div className='input border border-base-300'>
                            Inbox
                        </div>
                    </div>
                    <div className='flex flex-col border-t border-base-300'>
                        <div className='flex gap-4 p-4'>
                            <input type='checkbox' className='checkbox' />
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                                    clipRule='evenodd'
                                />
                            </svg>
                            <div className='ml-2'>Alex sent you a request</div>
                            <div className='bg-gray-500/30 px-24' />
                        </div>
                    </div>
                </div>
                <div className='text-lg text-tertiary-color'>
                    You don&apos;t need a business email to start your business
                    save time and money with EmailMe.
                </div>
            </div>
        </section>
    )
}
