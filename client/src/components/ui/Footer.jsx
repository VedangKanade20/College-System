import React from "react";
import { socialMediaIcon } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-text p-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-start flex-wrap gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-md">
          <p className="uppercase text-xl font-medium text-white">nmitd obe</p>
          <p>
            Empowering educators worldwide with intelligent student marks
            management solutions. Transform your grading process today.
          </p>
          {/* Social media icons */}
          <div className="flex gap-3">
            {socialMediaIcon.map((element, index) => {
              return (
                <div
                  className="bg-social-icon rounded-full w-fit p-2 cursor-pointer"
                  key={index}
                >
                  {element.icon}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-20">
          <ul className="flex flex-col gap-2">
            <p className="text-[#6B63F9] font-medium my-3">Product</p>
            <li>Features</li>
            <li>Pricing</li>
            <li>Demo</li>
            <li>API</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <p className="text-[#6B63F9] font-medium my-3">Company</p>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <p className="text-[#6B63F9] font-medium my-3">Support</p>
            <li>Help</li>
            <li>Contact</li>
            <li>Status</li>
            <li>Training</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
