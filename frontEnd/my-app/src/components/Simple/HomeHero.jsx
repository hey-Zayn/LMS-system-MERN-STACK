// import React from 'react'

import { ArrowUpRight, GraduationCap } from "lucide-react";

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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

      <div className="flex items-center justify-center">
        {/* <Image src="/images/hero.png" alt="Hero" width={500} height={500} /> */}
        {/* <h1>Hello</h1> */}
      </div>
    </div>


  );
};

export default HomeHero;
