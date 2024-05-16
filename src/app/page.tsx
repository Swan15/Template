import Hero from './landingPage/Hero'
import PainPoints from './landingPage/PainPoints'
import Pricing from './landingPage/Pricing'
import SocialProof from './landingPage/SocialProof'
import FAQ from './landingPage/FAQ'
import SecondCTA from './landingPage/SecondCTA'
import FoundersNote from './landingPage/FoundersNote'
import Youtube from './landingPage/Youtube'
import HowTo from './landingPage/HowTo'
// import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
    // const user = await currentUser()
    const user = null
    return (
        <main className='flex flex-col gap-8'>
            <Hero user={user} />
            <PainPoints />
            <SocialProof />
            <HowTo />
            <SocialProof />
            <Youtube />
            <SocialProof />
            <Pricing />
            <SocialProof />
            <FAQ />
            <SocialProof />
            <SecondCTA />
            <FoundersNote user={user} />
            {/* https://www.indiehackers.com/post/my-step-by-step-guide-to-landing-pages-that-convert-9daefb2064 */}
        </main>
    )
}
