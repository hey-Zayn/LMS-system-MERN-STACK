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
          Showcase Your Mastery.
          <br />
          Get Connected.
        </h1>

        <p className="text-base text-[#002B6B] text-center">
          Create your profile, showcase your skills, and let <br /> employers
          find you.
        </p>

        <button className="relative flex items-center gap-3 border border-[#8AB9FF] text-[#0066FF] bg-white py-3 px-6 rounded-full cursor-pointer">
          <span className="text-lg font-medium">Get Started</span>
          <ArrowUpRight className=" bg-[#0066FF] text-white rounded-full p-1" />
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
