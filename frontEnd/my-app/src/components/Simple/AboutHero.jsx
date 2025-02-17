import { GraduationCap } from "lucide-react";
import Cardlogo from "../../Assets/Cardlogo.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutHero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const AHTL = gsap.timeline({
      scrollTrigger: {
        trigger: "AH-text",
        start: "top 80%",
        end: "bottom 20%",
        
        // scrub: true
      },
    });

    AHTL.from("#about-top-button", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    AHTL.from("#AH-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    AHTL.from("#AH-text-p", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    AHTL.from("#AH-card2", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    AHTL.from("#AH-card1", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    AHTL.from("#AH-card3", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });

  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-40  gap-14  bg-[url('/src/Assets/HeroBG.png')] bg-cover bg-center  overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 max-sm:gap-4">
        <button
          id="about-top-button"
          className="flex items-center gap-2 bg-white text-[#002B6B] px-4 py-2 rounded-full"
        >
          <GraduationCap /> Welcome to Chismosa
        </button>
        <h1 id="AH-text" className="w-full text-5xl max-sm:text-3xl font-semibold text-center">
          your trusted partner in online <br className="max-sm:hidden" />{" "}
          learning and professional development.
        </h1>
        <p id="AH-text-p" className="w-[60%] max-sm:w-[80%] text-base text-center max-sm:text-wrap">
          At Chismosa, we believe that education is the cornerstone of personal
          and professional growth. Our mission is to empower individuals and
          organizations by providing accessible, flexible, and high-quality
          learning solutions tailored to meet the evolving needs of today’s
          world.
        </p>
      </div>
      <div className="flex max-sm:flex-col items-center justify-center gap-10">
        
        <div id="AH-card1" className="w-[292px] h-[242px] bg-white/50 rounded-lg border border-stone-300 px-6 py-10">
          <img src={Cardlogo} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              Comprehensive Course Library
            </h3>
            <p className="text-sm text-gray-500">
              Access a wide range of courses across various disciplines, from
              business and technology to personal development and creative arts.
            </p>
          </div>
        </div>
        
        <div id="AH-card2" className="w-[292px] h-[242px] bg-white/50 rounded-lg border border-stone-300 px-6 py-10">
          <img src={Cardlogo} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
            Customizable Learning Paths
            </h3>
            <p className="text-sm text-gray-500">
            Tailor your learning journey with personalized courses and certifications.
            </p>
          </div>
        </div>
        
        <div id="AH-card3" className="w-[292px] h-[242px] bg-white/50 rounded-lg border border-stone-300 px-6 py-10">
          <img src={Cardlogo} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
            Certifications
            </h3>
            <p className="text-sm text-gray-500">
            Earn recognized certifications to validate your skills and advance your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
