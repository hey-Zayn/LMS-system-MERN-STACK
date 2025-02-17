import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import hero1 from "../../Assets/HeroImg1.png";
import hero2 from "../../Assets/HeroImg2.png";
import hero3 from "../../Assets/HeroImg3.png";
import hero4 from "../../Assets/HeroImg4.png";
// import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HeroCarousel = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".heroimges", {
      opacity: 0,
      y: 100,
      x: -50,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".heroimges",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      }
    })
  }, [])

  const carouselRef = useRef(null);

    const HeroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const carousel = carouselRef.current;

    // Duplicate the cards for infinite scrolling
    carousel.innerHTML += carousel.innerHTML;

    // Calculate the total width of the carousel
    const totalWidth = carousel.scrollWidth / 2;

    // GSAP animation for infinite scrolling
    const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

    tl.to(carousel, {
      x: -totalWidth, // Move the carousel to the left
      duration: 90, // Adjust duration for speed
      ease: "none", // Linear animation
    });

    // Reset the carousel position when the animation repeats
    tl.eventCallback("onRepeat", () => {
      gsap.set(carousel, { x: 0 }); // Reset to the start
    });
  }, []);

  return (
    <div className="relative overflow-hidden py-12">
      <div
        ref={carouselRef}
        className="flex gap-8 w-max heroimges"
      >
        {/* Cards */}
        {HeroImages.map((card, index) => (
          <div
            key={index}
            className=" card flex-shrink-0 w-[287px] h-[338px] bg-white rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold object-cover overflow-hidden"

          >
            <img src={card} alt="Hero 1" className="w-full h-full object-cover rounded-2xl " />
            
          </div>


        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;
