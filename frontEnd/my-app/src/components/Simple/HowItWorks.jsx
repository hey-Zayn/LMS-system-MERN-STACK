import ONE from "../../Assets/01.png"
import SignIn from "../../Assets/SignIn.png"
import Howworks from "../../Assets/Howworks.png"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HowItWorks = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const HITWTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#HITW-text",
            start: "top 80%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
            // scrub: true
          },
        });
        HITWTl.from("#HITW-img", {
            opacity: 0,
            // y: 100,
            duration: 1,
            ease: "power4.out",
          });
        HITWTl.from("#HITW-text", {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power4.out",
          });
          HITWTl.from("#HITW-img1", {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power4.out",
          });   
          HITWTl.from("#HITW-img2", {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power4.out",
          });
          HITWTl.from("#HITW-img3", {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power4.out",
          });
        

      }, []);
  return (
    <>
        <div className='w-full h-screen max-sm:h-full flex px-10 py-10 max-sm:flex-col-reverse'>
                <div className='flex flex-col max-sm:items-center'>
                      
                      <div className='flex flex-col gap-8'>
                            <h1 id="HITW-text" className="text-left text-5xl max-sm:text-3xl max-sm:leading-tight leading-tight font-medium text-center">
                                How It Works
                            </h1>

                            <div id="HITW-img1" className="flex items-center gap-8 max-sm:flex-col"> 
                                <div id="HITW-img1-1" ><img src={ONE} className=""/></div>
                                <div id="HITW-img1-2" className='w-[457px] h-[105px] max-sm:w-full  flex justify-start max-sm:justify-between pl-10 max-sm:pl-5 items-center gap-2 bg-white rounded-2xl shadow-2xl'>
                                    <div><img src={SignIn} className="w-[56px] h-[56px] max-sm:w-full max-sm:h-full" /></div>
                                    <div>
                                        <h1 className="text-xl font-bold max-sm:text-lg">Sign Up and create Account</h1>
                                        <p className="text-sm font-base">Sign Up and create Account</p>
                                    </div>
                                </div>
                            </div>
                          
                            <div id="HITW-img2" className="flex items-center gap-8 max-sm:flex-col"> 
                                <div id="HITW-img2-1" className='max-sm:order-2 w-[457px] h-[105px] max-sm:w-full flex justify-start max-sm:justify-between pl-10 max-sm:pl-5 items-center gap-2 bg-white rounded-2xl shadow-2xl'>
                                    <div><img src={SignIn} className="w-[56px] h-[56px] max-sm:w-full max-sm:h-full" /></div>
                                    <div>
                                        <h1 className="text-xl font-bold max-sm:text-lg">Sign Up and create Account</h1>
                                        <p className="text-sm font-base">Sign Up and create Account</p>
                                    </div>
                                </div>
                                <div className="max-sm:order-1"><img src={ONE} className=""/></div>
                            </div>
                          
                            <div id="HITW-img3" className="flex items-center gap-8 max-sm:flex-col "> 
                                    <div id="HITW-img3-1"><img src={ONE} className=""/></div>
                                <div className='w-[457px] h-[105px] max-sm:w-full flex justify-start max-sm:justify-between pl-10 max-sm:pl-5 items-center gap-2 bg-white rounded-2xl shadow-2xl'>
                                    <div><img src={SignIn} className="w-[56px] h-[56px] max-sm:w-full max-sm:h-full" /></div>
                                    <div>
                                        <h1 className="text-xl font-bold max-sm:text-lg">Sign Up and create Account</h1>
                                        <p className="text-sm font-base">Sign Up and create Account</p>
                                    </div>
                                </div>
                            </div>
                           
                      </div>
                </div>
                <div id="HITW-img" className="max-sm:w-full max-sm:h-full max-sm:flex max-sm:justify-center max-sm:items-center">
                    <img src={Howworks} className="max-sm:w-full max-sm:h-full"/>
                </div>
        </div>
    </>
  )
}

export default HowItWorks