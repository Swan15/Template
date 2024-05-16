import Image from 'next/image'

export default function SocialProof() {
    return (
        <div className='mx-auto py-8 max-w-md space-y-4'>
            <div className='rating !flex justify-center'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-500'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-500'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-500'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-500'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-500'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
            </div>
            <div className='mx-auto max-w-md space-y-2 text-center text-base leading-relaxed'>
                <p>
                    <span className='bg-yellow-100/80 px-1.5'>
                        I don&apos;t want to spend 10 minutes manually crafting the perfect boilerplate for my Next.js project.
                    </span>
                    I want to get started right away.
                </p>
                <p>
                    Template fixed all my problems. I can now focus on building my app.
                </p>
            </div>
            <div className='flex items-center justify-center gap-3 md:gap-4'>
                <Image
                    alt='Social Proof'
                    loading='lazy'
                    width='48'
                    height='48'
                    decoding='async'
                    data-nimg='1'
                    className='h-10 w-10 rounded-full object-cover md:h-12 md:w-12'
                    style={{color: "transparent"}}
                    src='/socialproof.png'
                />
                <div>
                    <p className='font-semibold'>Johnny Sins</p>
                    <p className='text-base-content-secondary text-sm'>
                        1M followers on 𝕏
                    </p>
                </div>
            </div>
        </div>
    )
}
