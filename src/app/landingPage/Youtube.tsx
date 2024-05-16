export default function Youtube() {
    return (
        <div className='w-full py-8'>
            <div className='m-auto flex max-w-3xl flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold'>Setup in 3 minutes</h1>
                <iframe
                    width='800'
                    height='450'
                    src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=DD98meEO6DPpz9PT'
                    title='YouTube video player'
                    className='w-screen max-w-2xl sm:w-full aspect-video'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}