import { User } from '@clerk/nextjs/server'
import Image from 'next/image'

export default function Hero({ user }: { user: User | null }) {
    return (
        <section className='flex flex-col items-center gap-8 p-4 pb-8 pt-16 text-center'>
            <h1 className='font-urbanist max-w-4xl text-3xl font-bold tracking-tight lg:text-7xl '>
                A template{' '}
                <span className='relative whitespace-nowrap text-primary'>
                    <svg
                        aria-hidden='true'
                        viewBox='0 0 418 42'
                        className='absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/40'
                        preserveAspectRatio='none'
                    >
                        <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
                    </svg>
                    <span className='relative'>that works</span>
                </span>{' '}
                for every idea.
            </h1>
            <p className='max-w-2xl text-lg font-bold tracking-tight opacity-70'>
                This is a template that works for every idea. It is a template
                that works for everything.
            </p>
            <div className='flex justify-center gap-x-6'>
                {!user && (
                    <a
                        href={
                            process.env.NEXT_PUBLIC_BASE_PLAN_LINK +
                            '?prefilled_promo_code=LAUNCH'
                        }
                        className='btn btn-lg w-36 min-w-max'
                    >
                        Get started
                    </a>
                )}
            </div>
            <div className='flex flex-col items-center justify-center gap-3 md:flex-row md:items-start'>
                <div className='justy-start avatar-group -space-x-5'>
                    <div className='avatar h-12 w-12'>
                        <Image
                            src='/socialproof.png'
                            alt='Dan'
                            width='50'
                            height='50'
                            decoding='async'
                            data-nimg='1'
                        />
                    </div>
                    <div className='avatar h-12 w-12'>
                        <Image
                            src='/socialproof.png'
                            alt='Dan'
                            width='50'
                            height='50'
                            decoding='async'
                            data-nimg='1'
                        />
                    </div>
                    <div className='avatar h-12 w-12'>
                        <Image
                            src='/socialproof.png'
                            alt='Dan'
                            width='50'
                            height='50'
                            decoding='async'
                            data-nimg='1'
                        />
                    </div>
                    <div className='avatar h-12 w-12'>
                        <Image
                            src='/socialproof.png'
                            alt='Dan'
                            width='50'
                            height='50'
                            decoding='async'
                            data-nimg='1'
                        />
                    </div>
                    <div className='avatar h-12 w-12'>
                        <Image
                            src='/socialproof.png'
                            alt='Dan'
                            width='50'
                            height='50'
                            decoding='async'
                            data-nimg='1'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-1 md:items-start'>
                    <div className='rating'>
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
                    <div className='text-base text-base-content/80'>
                        <span className='font-semibold text-base-content'>
                            1000{' '}
                        </span>
                        builders sleep better
                    </div>
                </div>
            </div>
        </section>
    )
}
