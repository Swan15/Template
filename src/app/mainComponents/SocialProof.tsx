import Image from 'next/image'

export default function SocialProof() {
    return (
        <div className='bg-primary-color text-tertiary-color w-full py-12'>
            <div className='m-auto flex max-w-lg flex-col items-start justify-center gap-4 rounded-xl  p-4  text-start'>
                <div className='flex flex-row items-center justify-between gap-8'>
                    <div className='flex items-start gap-2'>
                        <Image
                            alt='user'
                            src='/socialproof.png'
                            width={60}
                            height={60}
                            className='h-[60px] w-[60px] rounded-full'
                        />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>My guy</span>
                            <span>Genius</span>
                        </div>
                    </div>
                </div>
                <div className='text-2xl'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
                <p className='text-balance'>Product is great.</p>
                <p className='text-balance'>Some amazing product.</p>
            </div>
        </div>
    )
}
