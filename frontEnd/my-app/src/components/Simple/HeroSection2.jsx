// import Course from "@/pages/student/Course";
import Courses from "@/pages/student/Courses";
import { ArrowUpRight } from "lucide-react";


const HeroSection2 = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-semibold text-center text-[#1E242C]">
          Discover the
          <br />
          Emerging Masters.

        </h1>
        <p className="text-center text-base text-[#1E242C]">Find the best master for your company and boosts <br/> your business 10x!</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Courses/>
        <button className="relative flex items-center gap-3 bg-gradient-to-r from-[#002B6B] to-[#0066FF] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group">
          <span className="text-lg font-medium">Get Started</span>
          <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>

  );

}

export default HeroSection2
