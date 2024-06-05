import Hero from '../components/home/Hero'
import PainPoints from '../components/home/PainPoints'
import Pricing from '../components/home/Pricing'
import SocialProof from '../components/home/SocialProof'
import FAQ from '../components/home/FAQ'
import SecondCTA from '../components/home/SecondCTA'
import FoundersNote from '../components/home/FoundersNote'
import Youtube from '../components/home/Youtube'
import HowTo from '../components/home/HowTo'

export default async function Home() {
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
        </main>
    )
}
