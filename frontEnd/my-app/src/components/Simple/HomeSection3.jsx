import React from "react";
import workwith from "../../Assets/WorkWith.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeSection3 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const HCSl = gsap.timeline({
      scrollTrigger: {
        trigger: "#HCS-text",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      },
    });
      HCSl.from("#HCS-text", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      });
      HCSl.from("#HCS-text-p", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      });
    
      HCSl.from("#HCS-img", {
        opacity: 0,
       
        duration: 1,
        ease: "power4.out",
      });
    
  }, []);
  return (
    <div className="w-full h-screen max-sm:h-full flex flex-col flex-wrap items-center justify-center overflow-hidden pt-4 gap-4">
      <div className="flex flex-col items-center justify-center gap-4 px-4 ">
        <h1 id="HCS-text" className="text-5xl max-sm:text-3xl max-sm:leading-tight leading-tight font-medium text-center">
          We are happy to work <br /> with incredible clients

        </h1>


        <p id="HCS-text-p" className="text-gray-500 text-center">
          Fortune 500 companies and renowned global brands place their trust in
          our products,
          <br /> solutions, and bespoke software development services.
        </p>
      </div>
      <div id="HCS-img" className="flex flex-col items-center justify-center gap-4">
        <img src={workwith} alt="client" />
      </div>
    </div>

  );
};

export default HomeSection3;
