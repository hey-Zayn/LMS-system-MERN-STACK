import React from "react";
import workwith from "../../Assets/WorkWith.png";


const HomeSection3 = () => {
  return (
    <div className="w-full h-screen max-sm:h-full flex flex-col flex-wrap items-center justify-center overflow-hidden pt-4 gap-4">
      <div className="flex flex-col items-center justify-center gap-4 px-4 ">
        <h1 className="text-5xl max-sm:text-3xl max-sm:leading-tight leading-tight font-medium text-center">
          We are happy to work <br /> with incredible clients

        </h1>


        <p className="text-gray-500 text-center">
          Fortune 500 companies and renowned global brands place their trust in
          our products,
          <br /> solutions, and bespoke software development services.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={workwith} alt="client" />
      </div>
    </div>

  );
};

export default HomeSection3;
