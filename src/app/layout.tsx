import type { Metadata } from 'next'
import './globals.css'
import ClientOnly from '@/components/ClientOnly'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
// import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // <ClerkProvider>
        <html lang='en' data-theme="emerald">
            <body>
                <NavBar />
                <ClientOnly />
                {children}
                <Footer />
            </body>
        </html>
        // </ClerkProvider>
    )
}
