// import React from 'react'
import IconPC from "../../Assets/Iconly-Pc.png";
import globalSearch from "../../Assets/global-search.png";
import ArrowDown from "../../Assets/Arrowdown.png";
import ArrowUp from "../../Assets/Arrowup.png";
import SMS from "../../Assets/networking.png";
import videos from "../../Assets/Videos.png";

const WhyChooseus = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl max-sm:text-2xl max-sm:leading-tight leading-tight font-medium text-center">
            Why Choose Our LMS
          </h1>
          <p className="text-base max-sm:text-sm font-normal text-center max-sm:text-wrap">
            Unlock your true potential and discover a world of opportunities{" "}
            <br className="max-sm:hidden" /> that align with your skills,
            interests, and aspirations{" "}
          </p>
        </div>

        <div className="w-full h-screen max-sm:h-full flex flex-wrap justify-center items-center gap-20 max-sm:gap-10 bg-[url('/src/Assets/WhyChooseUs.png')] bg-fit max-sm:bg-contain  bg-center bg-no-repeat">
          <div className="flex flex-col  items-end max-sm:items-center justify-center gap-4 max-md:pt-30 max-sm:pb-10 max-sm:order-3">
            <div className="w-[260px] h-[228px] max-sm:w-full flex flex-col  items-center py-10 gap-1 bg-white rounded-2xl shadow-2xl">
              <img
                src={IconPC}
                className="w-[48px] h-[48px] max-sm:w-[30px] max-sm:h-[30px]"
              />
              <h3 className="font-bold">Showcase Work</h3>
              <p className="text-center text-sm">
                Showcase your project to stand <br /> out among all
              </p>
              <button className="bg-[#3385FF] text-white px-6 py-2 rounded-full">
                Add Work
              </button>
            </div>

            <div className="w-[260px] h-[93px] flex  items-center  px-6 gap-2 bg-white rounded-2xl shadow-2xl">
              <div>
                <img src={globalSearch} className="w-[48px] h-[48px]" />
              </div>
              <div>
                <h3 className="font-bold">100K+</h3>
                <p className="text-center text-sm">WorldWide active user</p>
              </div>
            </div>
            <div className="max-sm:hidden">
              <img src={ArrowDown} className="w-[95px] h-[65px]" />
            </div>
          </div>

          <div className="w-[350px] h-[572px]  max-sm:w-[200px] max-sm:h-[300px] bg-red-600 rounded-3xl max-sm:order-2">
            {" "}
          </div>

          <div className="flex flex-col items-start max-sm:items-center justify-start max-sm:justify-center gap-4  max-md:pb-30 max-sm:pt-10 max-sm:order-1">
            <div className="max-sm:hidden">
              <img src={ArrowUp} className="w-[75px] h-[46px]" />
            </div>

            <div className="w-[260px] h-[93px] flex  items-center  px-6 gap-2 bg-white rounded-2xl shadow-2xl">
              <div>
                <img src={SMS} className="w-[48px] h-[48px]" />
              </div>
              <div>
                <h3 className="font-bold">
                  Networking <br /> Opportunities
                </h3>
              </div>
            </div>
            <div className="w-[260px] h-[228px] flex flex-col  items-center py-10 gap-1 bg-white rounded-2xl shadow-2xl">
              <img src={videos} className="w-[48px] h-[48px]" />
              <h3 className="font-bold">Recorded Lectures</h3>
              <p className="text-center text-sm">
                Showcase your project to stand <br /> out among all
              </p>
              <button className="bg-[#3385FF] text-white px-6 py-2 rounded-full">
                Add Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseus;
