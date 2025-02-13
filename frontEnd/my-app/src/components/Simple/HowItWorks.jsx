import ONE from "../../Assets/01.png"
import SignIn from "../../Assets/SignIn.png"
import Howworks from "../../Assets/Howworks.png"

const HowItWorks = () => {
  return (
    <>
        <div className='w-full h-screen max-sm:h-full flex px-10 py-10 max-sm:flex-col-reverse'>
                <div className='flex flex-col max-sm:items-center'>
                      
                      <div className='flex flex-col gap-8'>
                            
                            <div className="flex items-center gap-8 max-sm:flex-col"> 
                                <div><img src={ONE} className=""/></div>
                                <div className='w-[457px] h-[105px] max-sm:w-full  flex justify-start max-sm:justify-between pl-10 max-sm:pl-5 items-center gap-2 bg-white rounded-2xl shadow-2xl'>
                                    <div><img src={SignIn} className="w-[56px] h-[56px] max-sm:w-full max-sm:h-full" /></div>
                                    <div>
                                        <h1 className="text-xl font-bold max-sm:text-lg">Sign Up and create Account</h1>
                                        <p className="text-sm font-base">Sign Up and create Account</p>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="flex items-center gap-8 max-sm:flex-col"> 
                                <div className='max-sm:order-2 w-[457px] h-[105px] max-sm:w-full flex justify-start max-sm:justify-between pl-10 max-sm:pl-5 items-center gap-2 bg-white rounded-2xl shadow-2xl'>
                                    <div><img src={SignIn} className="w-[56px] h-[56px] max-sm:w-full max-sm:h-full" /></div>
                                    <div>
                                        <h1 className="text-xl font-bold max-sm:text-lg">Sign Up and create Account</h1>
                                        <p className="text-sm font-base">Sign Up and create Account</p>
                                    </div>
                                </div>
                                <div className="max-sm:order-1"><img src={ONE} className=""/></div>
                            </div>
                          
                            <div className="flex items-center gap-8 max-sm:flex-col "> 
                                    <div><img src={ONE} className=""/></div>
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
                <div className="max-sm:w-full max-sm:h-full max-sm:flex max-sm:justify-center max-sm:items-center">
                    <img src={Howworks} className="max-sm:w-full max-sm:h-full"/>
                </div>
        </div>
    </>
  )
}

export default HowItWorks