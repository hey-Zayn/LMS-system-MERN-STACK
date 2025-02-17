import Footer from "@/components/Footer"
import AboutContent from "@/components/Simple/AboutContent"
import AboutHero from "@/components/Simple/AboutHero"

import AboutusSection2 from "@/components/Simple/AboutusSection2"
import AboutTeacher from "./AboutTeacher"
import CTA from "@/components/CTA"


const AboutPage = () => {
  return (
    <>
     <AboutHero/>
     <AboutusSection2/>
     <AboutTeacher/>
     {/* <AboutContent/> */}
     <CTA/>
     <Footer/>
    </>
  )
}

export default AboutPage
