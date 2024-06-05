export default function HowTo() {
    return (
        <div className='mx-auto px-4'>
            <h2 className='mb-12 text-4xl font-extrabold tracking-tight md:mb-24 lg:text-5xl'>
                Get started with 3 clicks!
            </h2>
            <div className='join join-vertical w-full'>
                <div className='collapse join-item collapse-arrow border-b border-base-300'>
                    <input className="peer" type='radio' name='my-accordion-4' defaultChecked />
                    <div className='peer-checked:text-primary peer-checked:font-bold collapse-title text-xl font-medium'>
                        1. Click to open this one and close others
                    </div>
                    <div className='collapse-content'>
                        <p>hello</p>
                    </div>
                </div>
                <div className='collapse join-item collapse-arrow border-b border-base-300'>
                    <input className="peer" type='radio' name='my-accordion-4' defaultChecked />
                    <div className='peer-checked:text-primary peer-checked:font-bold collapse-title text-xl font-medium'>
                        2. Click to open this one and close others
                    </div>
                    <div className='collapse-content'>
                        <p>hello</p>
                    </div>
                </div>
                <div className='collapse join-item collapse-arrow'>
                    <input className="peer" type='radio' name='my-accordion-4' defaultChecked />
                    <div className='peer-checked:text-primary peer-checked:font-bold collapse-title text-xl font-medium'>
                        3. Click to open this one and close others
                    </div>
                    <div className='collapse-content'>
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
