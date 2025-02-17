import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

import React, { useState } from "react";

const ContactPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full h-screen max-sm:h-full flex max-sm:flex-col justify-center items-center gap-4 px-10 py-10">
      <div className="w-[60%] max-sm:w-full flex flex-col justify-center items-center gap-4 max-sm:order-2 ">
        
        <div className="flex flex-col w-full gap-4 ">
          <h2 className="text-5xl font-semibold">Contact US</h2>
          <p className="text-base text-gray-500">
            Email, Call, or Complete the form below <br />
            We will get back to you as soon as possible
          </p>
          <p className="text-base text-gray-500">info@example.com</p>
          <p className="text-base text-gray-500">+123 456 7890</p>
        </div>
       
        <div className="w-full flex max-md:flex-row max-sm:flex-col  justify-between gap-4 ">
          <div className="w-[40%]  max-sm:w-full h-[200px] bg-gray-100 rounded-lg px-6 py-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <p className="text-sm text-gray-500">
            Have questions or need assistance?<br /> Our dedicated support team is here to help!
            </p>
            
          </div>
          <div className="w-[40%] max-sm:w-full h-[200px] bg-gray-100 rounded-lg px-6 py-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Feedback & Suggestions</h3>
            <p className="text-sm text-gray-500">
            We value your input! Share your feedback or suggestions to help us improve your learning experience.
            </p>
            
          </div>
          <div className="w-[40%] max-sm:w-full h-[200px] bg-gray-100 rounded-lg px-6 py-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Media Inquiries</h3>
            <p className="text-sm text-gray-500">
            For press-related questions or partnership opportunities, please reach out to our media team.
            </p>
            
          </div>
          
        </div>
      </div>
      
      <div className="w-[40%] max-sm:w-full flex flex-col justify-center items-center max-sm:order-1 max-sm:py-10">
        <Card className="px-12 max-sm:px-6 py-10 max-sm:py-8 max-sm:w-full">
          <form className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-bold">Get in touch with us</h3>
              <p className="text-sm text-gray-500">You can reachus any time</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full flex gap-2 max-sm:flex-col">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="w-full  py-4 px-4"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="w-full  py-4 px-4"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                className=" py-3 px-4"
              />
              <Input
                type="number"
                placeholder="Phone Number"
                className=" py-3 px-4"
              />
              <Textarea
                placeholder="Message"
                className="rounded-lg py-3 px-4"
              />
              <div id="hero-button">
                <button
                  className=" relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer "
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Send
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? "scale-125" : "scale-100"
                    }`}
                  />
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
