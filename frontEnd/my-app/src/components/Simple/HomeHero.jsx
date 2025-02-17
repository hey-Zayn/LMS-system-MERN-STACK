import { GraduationCap, Sparkles } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HomeHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const herotl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-text",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      },
    });
    herotl.from("#hero-top-button", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    }),
      herotl.from("#hero-text", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      }),
      herotl.from("#hero-text-p", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      }),
      herotl.from("#hero-button", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      });
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden pt-36 bg-[url('/src/Assets/HeroBG.png')] bg-cover bg-center ">
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          id="hero-top-button"
          className="flex items-center gap-2 bg-white text-[#002B6B] px-4 py-2 rounded-full"
        >
          <GraduationCap /> Grow yourself with us
        </button>

        <h1
          id="hero-text"
          className="hero-text text-6xl max-sm:text-3xl font-semibold max-sm:font-bold text-[#002B6B] text-center"
        >
          Empowering Lifelong Learning
          <br className="max-sm:hidden" />
          for Tomorrow’s Leaders.
        </h1>

        <p
          id="hero-text-p"
          className="text-base text-[#002B6B] text-center max-sm:text-wrap"
        >
          Join a dynamic learning community with access to world-class courses,{" "}
          <br className="max-sm:hidden" /> expert instructors, and cutting-edge
          resources.
        </p>

        <div id="hero-button" >
          <button
           
            className=" relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Sparkles
              className={`w-4 h-4 transition-transform duration-300 ${
                isHovered ? "scale-125" : "scale-100"
              }`}
            />
            <Link to="/course/search?query">Explore Courses</Link>
          </button>
        </div>
        
      </div>

      <div className="flex items-center justify-center z-10">
        <HeroCarousel />
      </div>
      {/* <img src={VectorL} alt="Vector-L" className="absolute  left-[-377px] top-[988px] rotate-[120deg]"  />
      <img src={Vector110} alt="Vector-110" className="absolute -top-20 right-[848px]" /> */}
    </div>
  );
};

export default HomeHero;
