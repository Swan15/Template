import type { Metadata } from 'next'
import './globals.css'
import ClientOnly from '@/components/ClientOnly'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import image from '../../public/opengraph-image.png'
import { Analytics } from '@vercel/analytics/react'
import { baseUrl } from '@/helpers/url'

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl()),
    title: 'Template',
    description: 'A template for any project',
    openGraph: {
        title: 'Template',
        description: 'A template for any project',
        images: [
            {
                url: image.src,
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' data-theme='emerald'>
            <body>
                <NavBar />
                <ClientOnly />
                <div className='min-h-screen px-4 lg:px-16'>{children}</div>
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
