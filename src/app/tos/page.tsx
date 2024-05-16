export default function tos() {
    return (
        <div className='p-5'>
            <a className='btn btn-ghost' href='/'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5'
                >
                    <path
                        fill-rule='evenodd'
                        d='M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                Back
            </a>
            <h1 className='pb-6 text-3xl font-extrabold'>
                Terms and Conditions
            </h1>
            <pre className='whitespace-pre-wrap leading-relaxed'>
                Last Updated: February 15, 2024
            </pre>
            {/* {`Welcome to ZenVoice!

ZenVoice ("us", "we", or "our") operates the website https://zenvoice.io (the "Service").
By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.

1. Access to the Service
   - Access to ZenVoice&apos;s software is granted to the user upon a one-time payment, providing unlimited access to the product. This includes the ability to connect multiple Stripe accounts (1 account for the 1st Tier plan, and up to 100 for the 2nd Tier plan) and generate unlimited invoices (up to 100,000 invoices).
   - Users have the option to request a full refund within 7 days of purchase.
2. User Data
   - ZenVoice collects user email and payment information solely for the purpose of providing the Service.
   - For more information on how we collect, use, and disclose personal information, please refer to our Privacy Policy.
3. Non-personal Data
   - We may use web cookies to collect non-personal information about users&apos; interactions with the Service.

4. Governing Law
   - These Terms shall be governed and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.

5. Updates to Terms
   - Users will be notified of any updates to these Terms via email.

For any questions or concerns regarding these Terms, please contact us at marc@mg.zenvoice.io.

Thank you for using ZenVoice!`} */}
        </div>
    )
}
