import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Arr01 from "../../Assets/Arr01.png";
import Arr02 from "../../Assets/Arr02.png";
import Arr03 from "../../Assets/Arr03.png";
import Arr05 from "../../Assets/Arr05.png";



const FAQS = () => {
    
  return (
    <div className="w-full h-[656px] max-sm:h-full flex flex-col items-center gap-4">
      <h1 className="text-4xl font-semibold max-sm:text-2xl max-sm:text-wrap">Frequently asked Questions</h1>
      <div className="w-full h-full flex  items-center justify-center gap-4 max-sm:gap-1 max-sm:flex-col  max-sm:px-4">
        <div className="w-[605px] h-[378px] max-sm:w-full max-sm:h-full max-sm:px-4">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
          >
            <AccordionItem
              value="item-1"
           
              className={` border-1 rounded-lg py-2 px-6 shadow-sm `}
              
            >
              <div className="flex items-center gap-4">
                <img src={Arr01} className="w-[56px] h-[56px]" />
                <AccordionTrigger className=" text-xl font-semibold w-full flex gap-2 hover:no-underline">
                  {" "}
                  How do I search for jobs?
                </AccordionTrigger>
                
              </div>
              <AccordionContent className="text-sm font-base px-6 py-4">
                Use the search bar on the homepage to enter keywords related to
                your skills, job title, or preferred location. You can also use
                the advanced search filters to narrow down results by industry,
                job type (full-time, part-time, freelance), and experience
                level.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem
              value="item-2"
              className={` border-1 rounded-lg py-2 px-6 shadow-sm `}
            >
              <div className="flex items-center gap-4">
                <img src={Arr02} className="w-[56px] h-[56px]" />
                <AccordionTrigger className=" text-xl font-semibold w-full flex gap-2 hover:no-underline">
                  {" "}
                  How do I search for jobs?
                </AccordionTrigger>
                
              </div>
              <AccordionContent className="text-sm font-base px-6 py-4">
                Use the search bar on the homepage to enter keywords related to
                your skills, job title, or preferred location. You can also use
                the advanced search filters to narrow down results by industry,
                job type (full-time, part-time, freelance), and experience
                level.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem
              value="item-3"
              className=" border-1 rounded-lg py-2 px-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img src={Arr03} className="w-[56px] h-[56px]" />
                <AccordionTrigger className=" text-xl font-semibold w-full flex gap-2 hover:no-underline">
                  {" "}
                  How do I search for jobs?
                </AccordionTrigger>
                
              </div>
              <AccordionContent className="text-sm font-base px-6 py-4">
                Use the search bar on the homepage to enter keywords related to
                your skills, job title, or preferred location. You can also use
                the advanced search filters to narrow down results by industry,
                job type (full-time, part-time, freelance), and experience
                level.
              </AccordionContent>
            </AccordionItem>

           
          </Accordion>
        </div>
       
        <div className="w-[605px] h-[378px] max-sm:w-full max-sm:h-full">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
          >
            <AccordionItem
              value="item-1"
              className=" border-1 rounded-lg py-2 px-6 shadow-sm"
              active
            >
              <div className="flex items-center gap-4">
                <img src={Arr05} className="w-[56px] h-[56px]" />
                <AccordionTrigger className=" text-xl font-semibold w-full flex gap-2 hover:no-underline">
                  {" "}
                  How do I search for jobs?
                </AccordionTrigger>
                
              </div>
              <AccordionContent className="text-sm font-base px-6 py-4">
                Use the search bar on the homepage to enter keywords related to
                your skills, job title, or preferred location. You can also use
                the advanced search filters to narrow down results by industry,
                job type (full-time, part-time, freelance), and experience
                level.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem
              value="item-2"
              className=" border-1 rounded-lg py-2 px-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img src={Arr05} className="w-[56px] h-[56px]" />
                <AccordionTrigger className=" text-xl font-semibold w-full flex gap-2 hover:no-underline">
                  {" "}
                  How do I search for jobs?
                </AccordionTrigger>
                
              </div>
              <AccordionContent className="text-sm font-base px-6 py-4">
                Use the search bar on the homepage to enter keywords related to
                your skills, job title, or preferred location. You can also use
                the advanced search filters to narrow down results by industry,
                job type (full-time, part-time, freelance), and experience
                level.
              </AccordionContent>
            </AccordionItem>
            
           
          

           
          </Accordion>
        </div>
        
      </div>
    </div>
  );
};

export default FAQS;
