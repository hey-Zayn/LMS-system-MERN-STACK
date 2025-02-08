import React from "react";
import Icon from "../Assets/Icon.png";
import HeroLogos from "./Simple/HeroLogos";

const HomeHero = () => {
  return (
    <div className="h-screen pt-40 flex flex-col gap-20 ">
      <div className="text-center text-[#1A1A1A]">
        <div className=" flex items-center justify-center ">
          <h1 className=" md:text-4xl sm:text-xl font-semibold space-x-2 bg-white px-5 py-3  mb-3 rounded">
            <button>
              <img src={Icon} className="bg-[#FFF4E5] p-1" />
            </button>
            <span className="text-[#FF9500]">Unlock</span> Your Creative
            Potential
          </h1>
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-3xl font-semibold">
            with Online Design and Development Courses.
          </h2>
          <p className="text-base font-normal ">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>

        <div className=" text-center space-x-2">
          <button className="mt-6 px-4 py-2 bg-[#FF9500] text-white rounded cursor-pointer">
            Explore Courses
          </button>
          <button className="mt-6 px-4 py-2 bg-white text-[#1A1A1A] font-semibold">
            View Pricing
          </button>
        </div>
      </div>
      <HeroLogos/>
    </div>
  );
};

export default HomeHero;
