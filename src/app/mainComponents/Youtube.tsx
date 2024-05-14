export default function Youtube() {
    return (
        <div className='w-full py-8'>
            <div className='m-auto flex max-w-lg flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold'>How EmailMe Works</h1>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/3_7yNUvRij0?si=9TvyD0VDV4Ul4W4P'
                    title='YouTube video player'
                    className='w-screen md:w-full'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
