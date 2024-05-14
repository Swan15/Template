export default function FAQ() {
    return (
        <div id='faq' className='w-full py-8'>
            <div className='m-auto flex max-w-lg flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold'>FAQ</h1>
                <div className='join join-vertical w-full'>
                    <div className='collapse join-item collapse-arrow border border-base-300'>
                        <input
                            type='radio'
                            name='my-accordion-4'
                            defaultChecked
                        />
                        <div className='collapse-title text-xl font-medium'>
                            Why do I need EmailMe?
                        </div>
                        <div className='collapse-content'>
                            <p>
                                When you setup a new project, you need to be
                                notified every time a user contacts you,
                                unsubscribes or does anything you need to handle
                                manually. As an indie developer you need to
                                focus on the core of your product without
                                handling every single issue that may arise from
                                the start. Instead you can use EmailMe to notify
                                you when a user does anything. If EmailMe saves
                                you 20 minutes of work than it&apos;s worth your
                                money. If it doesn&apos;t, you can cancel your
                                subscription.
                            </p>
                        </div>
                    </div>
                    <div className='collapse join-item collapse-arrow border border-base-300'>
                        <input type='radio' name='my-accordion-4' />
                        <div className='collapse-title text-xl font-medium'>
                            Which tech stacks does this work for?
                        </div>
                        <div className='collapse-content'>
                            <p>
                                All. EmailMe is a simple API that can be used on
                                any server using the API. However, we have a
                                dedicated NPM package made to be used in a
                                Node.js and Next.js environment.
                            </p>
                        </div>
                    </div>
                    <div className='collapse join-item collapse-arrow border border-base-300'>
                        <input type='radio' name='my-accordion-4' />
                        <div className='collapse-title text-xl font-medium'>
                            How is this different to setting up sendgrid,
                            postmark or mailgun?
                        </div>
                        <div className='collapse-content'>
                            <p>
                                Unlike these email services EmailMe takes 2
                                minutes to setup. While this does not replace
                                user email services this does not require you to
                                have a business email or the effort and money to
                                setup one of these services.
                            </p>
                        </div>
                    </div>
                    <div className='collapse join-item collapse-arrow border border-base-300'>
                        <input type='radio' name='my-accordion-4' />
                        <div className='collapse-title text-xl font-medium'>
                            Is this secure?
                        </div>
                        <div className='collapse-content'>
                            <p>
                                Yes. We use restricted API keys to manage your
                                notifications. As longs as you keep your API key
                                secure, your notifications will be secure.
                            </p>
                        </div>
                    </div>
                    <div className='collapse join-item collapse-arrow border border-base-300'>
                        <input type='radio' name='my-accordion-4' />
                        <div className='collapse-title text-xl font-medium'>
                            When should&apos;t you use EmailMe?
                        </div>
                        <div className='collapse-content'>
                            <p>
                                If you use Slack or Discord for notifications
                                EmailMe won&apos;t solve your problems. However,
                                if you are like me and use your emails as a way
                                to handle key parts of your project. EmailMe
                                will help you stay notified and on top of your
                                project. If you need to send customer emails
                                from a custom domain, you should use a service
                                like SendGrid, Postmark, or Mailgun. EmailMe is
                                for notifications only. However, you can use
                                both and use EmailMe for notifications and
                                another service for customer emails.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
