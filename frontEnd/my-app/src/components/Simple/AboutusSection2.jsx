import { useGSAP } from '@gsap/react';
import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const AboutusSection2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const AS2TL = gsap.timeline({
      scrollTrigger: {
        trigger: "#AS-text",
        start: "top 80%",
        end: "bottom 20%",
        
        // scrub: true
      },

    });
      AS2TL.from("#AS-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
  },[]);
  return (
    <div className='w-full h-[60vh] max-sm:h-full flex flex-col justify-center items-center px-10 py-10'>
      <div className='flex flex-col justify-center items-center gap-2'>
       
        <p id="AS-text" className=' text-center w-[80%] text-wrap text-2xl max-sm:text-lg max-sm:w-full '>"At Chismosa, we are committed to fostering an inclusive and supportive learning environment. We strive to make education accessible to everyone, regardless of background or location. By leveraging the latest technology and innovative teaching methods, we aim to inspire curiosity, drive growth, and unlock the potential within every learner."</p>
      </div>
      
    </div>
  )
}

export default AboutusSection2
