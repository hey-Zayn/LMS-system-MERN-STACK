import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Send } from 'lucide-react'

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      
      <div className="flex items-center justify-center w-full h-[392px]  z-10 ">
          <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1240px] h-full bg-[url('/src/Assets/CTA.png')] bg-cover bg-center px-4">
            <div className="flex flex-col items-center justify-center gap-4 w-full text-center">
              <h1 className="text-2xl md:text-4xl font-medium">
              Start Your Learning  <br /> Journey Today
              </h1>
              <p className="text-sm font-medium">
              Join thousands of students who are advancing <br className="hidden md:block" />their careers with our LMS.
                
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 px-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-[400px] h-[48px] rounded-full"
              />
              <div id="hero-button" >
          <button
           
            className=" relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Send
              className={`w-4 h-4 transition-transform duration-300 ${
                isHovered ? "scale-125" : "scale-100"
              }`}
            />
             Sign Up Now
          </button>
        </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTA
