// import React from 'react'
import { ArrowUpRight, GraduationCap } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
// import HeroBG from "../../Assets/HeroBG.png";


const HomeHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden pt-36 bg-[url('/src/Assets/HeroBG.png')] bg-cover bg-center ">
      <div className="flex flex-col items-center justify-center gap-4">
        <button className="flex items-center gap-2 bg-white text-[#002B6B] px-4 py-2 rounded-full">
          <GraduationCap /> Grow yourself with us

        </button>

        <h1 className="text-6xl max-sm:text-3xl font-semibold max-sm:font-bold text-[#002B6B] text-center">
          Empowering Lifelong Learning
          <br className="max-sm:hidden" />
          for Tomorrow’s Leaders.
        </h1>

        <p className="text-base text-[#002B6B] text-center max-sm:text-wrap">
          Join a dynamic learning community with access to world-class courses,   <br className="max-sm:hidden" /> expert instructors, and cutting-edge resources.
        </p>

        <button className=" border  text-white bg-[#3385FF] py-3 px-6 rounded-full cursor-pointer">
          Explore Courses

        </button>

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
