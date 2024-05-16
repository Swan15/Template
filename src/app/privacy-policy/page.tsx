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
                        clipRule='evenodd'
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
            {/* {`Last Updated: February 15, 2024

ZenVoice ("us", "we", or "our") operates the website https://zenvoice.io (the "Service").

1. Information Collection and Use
   - We collect and use the following types of information for order processing purposes:
     - Email address
     - Payment information

2. Data Collection Methods
   - We may use web cookies to collect non-personal information about users' interactions with the Service.

3. Data Sharing
   - We do not share any user data with third parties.

4. Children's Privacy
   - We do not knowingly collect any personal information from children under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.

5. Updates to the Privacy Policy
   - Users will be notified of any updates to this Privacy Policy via email.

For any questions or concerns regarding this Privacy Policy, please contact us at marc@mg.zenvoice.io.

Thank you for using ZenVoice!`} */}
        </div>
    )
}
