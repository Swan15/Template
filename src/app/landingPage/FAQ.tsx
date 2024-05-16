export default function FAQ() {
    return (
        <div id='faq' className='w-full py-8'>
            <div className='m-auto flex max-w-lg flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold'>FAQ</h1>
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
        </div>
    )
}
