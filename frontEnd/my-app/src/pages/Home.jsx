import HomeHero from '@/components/Simple/HomeHero'
import HeroSection2 from '@/components/Simple/HeroSection2'
import HomeSection3 from '@/components/Simple/HomeSection3'
import HomeSection4 from '@/components/Simple/HomeSection4'
import CTA from '@/components/CTA'
import WhyChooseus from '@/components/Simple/WhyChooseus'
import HowItWorks from '@/components/Simple/HowItWorks'
import FAQS from '@/components/Simple/FAQS'
import Clients from '@/components/Simple/Clients'



const Home = () => {
  return (
    <div>
        <HomeHero/>
        {/* <HeroSection2/> */}
        {/* <HomeSection4/> */}
        <WhyChooseus/>
        <HomeSection3/>
        <HowItWorks/>
        <Clients/>
        <FAQS/>
        <CTA/>
      
    </div>
  )
}

export default Home
