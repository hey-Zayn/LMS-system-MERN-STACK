import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        {/* CTA Section */}
     

        {/* Footer Section */}
        <div className="flex flex-col items-center justify-center w-full gap-12 bg-[url('/src/Assets/Footer.png')] bg-cover bg-center px-4 py-8">
          <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1240px] gap-8">
            {/* Contact Info */}
            <div className="flex flex-col items-start justify-start gap-4 w-full md:w-[40%]">
              <p className="text-sm font-normal">
                <span className="font-bold">Corporate Head Office:</span> 3787
                Jerry Dove Drive, Florence, <br />
                South Carolina, 29501, United States.
              </p>
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-sm font-normal">
                  <span className="font-bold">Phone:</span> 843-496-7759
                </p>
                <p className="text-sm font-normal">
                  <span className="font-bold">Fax:</span> 02-222264303
                </p>
                <p className="text-sm font-normal">
                  <span className="font-bold">Email:</span> info@mastershub.com
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full md:w-[60%]">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h1 className="text-base font-medium">Quick Links</h1>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm font-normal">Home</p>
                    <p className="text-sm font-normal">About</p>
                    <p className="text-sm font-normal">Services</p>
                    <p className="text-sm font-normal">Contact</p>
                  </div>
                </div>
              ))}
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