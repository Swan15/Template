import Hero from './mainComponents/Hero'
import PainPoints from './mainComponents/PainPoints'
import Pricing from './mainComponents/Pricing'
import SocialProof from './mainComponents/SocialProof'
import FAQ from './mainComponents/FAQ'
import SecondCTA from './mainComponents/SecondCTA'
import FoundersNote from './mainComponents/FoundersNote'
import Youtube from './mainComponents/Youtube'
// import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
    // const user = await currentUser()
    const user = null
    return (
        <main className='flex flex-col gap-8'>
            <Hero user={user} />
            <PainPoints />
            <Pricing />
            <Youtube />
            <SocialProof />
            <FAQ />
            <SecondCTA />
            <FoundersNote user={user} />
            {/* https://www.indiehackers.com/post/my-step-by-step-guide-to-landing-pages-that-convert-9daefb2064 */}
        </main>
    )
}
