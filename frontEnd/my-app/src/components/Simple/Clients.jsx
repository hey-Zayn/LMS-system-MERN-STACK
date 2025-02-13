// import React from 'react'
import clients from "../../Assets/clients.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Clients = () => {
  return (
    <div className="w-full h-screen  max-sm:h-full flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold max-sm:text-2xl">What Our Students Say</h1>
      <div className="w-[90%] h-[500px] max-sm:h-full ">
        <div className="flex items-center justify-center gap-4 py-10 max-sm:flex-col max-sm:gap-2">
          <div className="w-[60%] h-[480px] bg-[#1E242C] rounded-2xl flex items-center justify-center px-20 overflow-hidden max-sm:w-full max-sm:h-full max-sm:px-10 max-sm:py-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                autoPlay: true,
                duration: 50,
                slidesToShow: 1,
                slidesToScroll: 1,
              }}
                >
              <CarouselContent>
                
                <CarouselItem className="cursor-grab">
                  <div className="flex flex-col items-center justify-between gap-4 px-10">
                       <h3 className="text-white max-sm:text-sm">John Doe . <span className="text-gray-400">Computer Science Student</span></h3>
                       <h1 className="text-gray-400 text-3xl max-sm:text-base text-center text-wrap  max-sm:w-[50%]">“This LMS has transformed the way I learn. The courses are well-structured, and the instructors are incredibly knowledgeable.”</h1>
                  </div>
                </CarouselItem>
               
                <CarouselItem className="cursor-grab">
                  <div className="flex flex-col items-center justify-center gap-4 px-10">
                       <h3 className="text-white max-sm:text-sm">Jane Smith . <span className="text-gray-400">Business Administration Student</span></h3>
                       <h1 className="text-gray-400 text-3xl max-sm:text-base text-center text-wrap max-sm:w-[50%]">“I love the flexibility of being able to learn at my own pace. The mobile app is a game-changer!”</h1>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="cursor-grab">
                  <div className="flex flex-col items-center justify-center gap-4 px-10">
                       <h3 className="text-white max-sm:text-sm">Alex Johnson. <span className="text-gray-400">Data Science Student</span></h3>
                       <h1 className="text-gray-400 text-3xl max-sm:text-base text-center text-wrap max-sm:w-[50%]">“The hands-on projects and real-world examples have helped me apply what Ive learned directly to my job.”</h1>
                  </div>
                </CarouselItem>
               
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="w-[40%] max-sm:w-full">
            {" "}
            <img src={clients} className=" object-cover max-sm:w-full max-sm:h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
