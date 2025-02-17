// import React from 'react'
import IconPC from "../../Assets/Iconly-Pc.png";
import globalSearch from "../../Assets/global-search.png";
import ArrowDown from "../../Assets/Arrowdown.png";
import ArrowUp from "../../Assets/Arrowup.png";
import SMS from "../../Assets/networking.png";
import video from "../../Assets/video.png";
import videos from "../../Assets/Videos.png";
import { Airplay, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhyChooseus = () => {
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const WCTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#WCTl-text",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      },
    });
    WCTl.from("#WCTl-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-text-p", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-video", {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-left", {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-right", {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-left-bottom", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power4.out",
    });
    WCTl.from("#WCTl-right-top", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power4.out",
    });
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center py-16">
        <div className="flex flex-col gap-2">
          <h1 id="WCTl-text" className="text-5xl max-sm:text-2xl max-sm:leading-tight leading-tight font-medium text-center">
            Why Choose Our LMS
          </h1>
          <p id="WCTl-text-p" className="text-base max-sm:text-sm font-normal text-center max-sm:text-wrap">
            Unlock your true potential and discover a world of opportunities{" "}
            <br className="max-sm:hidden" /> that align with your skills,
            interests, and aspirations{" "}
          </p>
        </div>

       
       
        <div className="w-full h-screen max-sm:h-full flex flex-wrap justify-center items-center gap-20 max-sm:gap-10 bg-[url('/src/Assets/WhyChooseUs.png')] bg-fit max-sm:bg-contain  bg-center bg-no-repeat">
          <div id="WCTl-left" className="flex flex-col  items-end max-sm:items-center justify-center gap-4 max-md:pt-30 max-sm:pb-10 max-sm:order-3">
           
            <div  className="w-[260px] h-[228px] max-sm:w-full flex flex-col  items-center py-10 gap-1 bg-white rounded-2xl shadow-2xl">
              <img
                src={IconPC}
                className="w-[48px] h-[48px] max-sm:w-[30px] max-sm:h-[30px]"
              />
              <h3 className="font-bold">Online Courses</h3>
              <p className="text-center text-sm">
                Showcase your project to stand <br /> out among all
              </p>
              <div id="" >
                <button
                  size="sm"
                  className=" relative flex text-sm items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Airplay
                    className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"
                      }`}
                  />
                  <Link to="/course/search?query">Explore Courses</Link>
                </button>
              </div>
            </div>

            <div id="WCTl-left-bottom" className="w-[260px] h-[93px] flex  items-center  px-6 gap-2 bg-white rounded-2xl shadow-2xl">
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

          <div  className="w-[350px] h-[572px]  max-sm:w-[200px] max-sm:h-[300px]  rounded-3xl max-sm:order-2 overflow-hidden">
            <div id="WCTl-video" className="w-[350px] h-[572px]  max-sm:w-[200px] max-sm:h-[300px]  rounded-3xl max-sm:order-2">
              <img src={video} className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>

          <div id="WCTl-right" className="flex flex-col items-start max-sm:items-center justify-start max-sm:justify-center gap-4  max-md:pb-30 max-sm:pt-10 max-sm:order-1">
            <div id="" className="max-sm:hidden">
              <img src={ArrowUp} className="w-[75px] h-[46px]" />
            </div>

            <div  className="w-[260px] h-[93px] flex  items-center  px-6 gap-2 bg-white rounded-2xl shadow-2xl">
              <div>
                <img src={SMS} className="w-[48px] h-[48px]" />
              </div>
              <div>
                <h3 className="font-bold">
                  Networking <br /> Opportunities
                </h3>
              </div>
            </div>
            <div id="WCTl-right-top" className="w-[260px] h-[228px] flex flex-col  items-center py-10 gap-1 bg-white rounded-2xl shadow-2xl">
              <img src={videos} className="w-[48px] h-[48px]" />
              <h3 className="font-bold">Recorded Lectures</h3>
              <p className="text-center text-sm">
                Showcase your project to stand <br /> out among all
              </p>
              <div id="" >
                <button
                  size="sm"
                  className=" relative flex text-sm items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <MonitorPlay
                    className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"
                      }`}
                  />
                  <Link to="/course/search?query">Explore Courses</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseus;
