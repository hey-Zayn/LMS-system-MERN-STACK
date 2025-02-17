import React from "react";
import Howworks from "../../Assets/Howworks.png";
const AboutContent = () => {
  return (
    <div className="w-full h-full flex max-sm:flex-col-reverse  justify-center  px-10 pt-40 gap-14  ">
      <div className="w-[50%] max-sm:w-full flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-4xl font-semibold text-center">Who We Are</h2>
          <h3 className="text-base">
            Chismosa is a cutting-edge Learning Management System (LMS) designed
            to simplify and enhance the learning experience. Whether you're an
            individual looking to upskill, an educator aiming to deliver
            engaging content, or an organization seeking to train your
            workforce, our platform is built to support your goals.
          </h3>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-4xl font-semibold text-center">Our Mission</h2>
          <h3 className="text-base">
          To create a global community of lifelong learners by breaking down barriers to education and fostering a culture of continuous improvement.
          </h3>
        </div>
      </div>
      <div className="w-[50%] max-sm:w-full max-sm:h-full max-sm:pr-10">
        <img src={Howworks} alt="" />
      </div>
    </div>
  );
};

export default AboutContent;
