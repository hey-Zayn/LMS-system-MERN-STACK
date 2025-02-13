import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const CTA = () => {
  return (
    <div>
      {/* CTA Section */}
      <div className="flex items-center justify-center w-full h-[392px]  z-10">
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
              <Button className="w-full md:w-[120px] h-[48px] rounded-full">
              Sign Up Now
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTA
