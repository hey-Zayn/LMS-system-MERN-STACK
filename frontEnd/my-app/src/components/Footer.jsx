
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-[url('../Assets/Footer2.png')] bg-cover bg-center ">
        {/* CTA Section */}
     

        {/* Footer Section */}
        <div className="flex flex-col items-center justify-center w-full gap-12  px-4 py-8">
          <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1240px] gap-8">
           
            <div className="flex flex-col items-start justify-start gap-8 w-full md:w-[40%]">
              <h2 className="text-2xl font-bold text-blue-600">CHISMOSA.Net</h2>
              <p className="text-sm font-normal text-gray-600">
                <span className="font-bold">Corporate Head Office:</span> 3787
                Jerry Dove Drive, Florence, <br />
                South Carolina, 29501, United States.
              </p>
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-sm font-normal text-gray-600">
                  <span className="font-bold">Phone:</span> 843-496-7759
                </p>
                <p className="text-sm font-normal text-gray-600">
                  <span className="font-bold">Fax:</span> 02-222264303
                </p>
                <p className="text-sm font-normal text-gray-600">
                  <span className="font-bold">Email:</span> info@mastershub.com
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:flex-row items-start justify-around gap-8 w-full md:w-[60%] pt-12">
              
                <div
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h1 className="text-base font-semibold">Quick Links</h1>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm font-normal text-gray-600">Pricing</p>
                    <p className="text-sm font-normal text-gray-600">Courses</p>
                    <p className="text-sm font-normal text-gray-600">Categories</p>
                    <p className="text-sm font-normal text-gray-600">Contact Us</p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h1 className="text-base font-semibold">Others</h1>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm font-normal text-gray-600">How it works</p>
                    <p className="text-sm font-normal text-gray-600">Terms and condition</p>
                    <p className="text-sm font-normal text-gray-600">Privacy Policy</p>
                    <p className="text-sm font-normal text-gray-600">About Us</p>
                  </div>
                </div>
                <div
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h1 className="text-base font-semibold">About Us</h1>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm font-normal text-gray-600">Web Mail</p>
                    <p className="text-sm font-normal text-gray-600">Teachers</p>
                    <p className="text-sm font-normal text-gray-600">Management</p>
                    <p className="text-sm font-normal text-gray-600">Support</p>
                  </div>
                </div>
              
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1240px] gap-4 px-4">
            <p className="text-sm font-normal">
              ©2024 All rights reserved
            </p>
            <div className="flex items-center justify-center gap-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;