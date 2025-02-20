"use client";

import React from "react";
import ConnectButton from "../buttons/ConnectButton";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const LandingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <section 
      id="landing" 
      className="h-screen w-full relative bg-bg text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Responsive Grid - Reduced for mobile */}
      <div className="absolute inset-0 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 md:grid-cols-14 md:grid-rows-14">
          {Array.from({ length: isMobile ? 6 * 6 : 14 * 14 }).map((_, i) => (
            <div key={i} className="border border-white/10 backdrop-blur-md" />
          ))}
        </div>
      </div>
      
      {/* Responsive Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
        {/* Responsive Text - Adjusted for mobile */}
        <h1 className="text-white text-[11vw] md:text-[10vw] font-monument-extended font-extrabold tracking-wide leading-[1]">
          TEAM
        </h1>
        <h1 className="text-red text-[11vw] md:text-[11vw] font-monument-extended font-extrabold tracking-widest leading-[1]">
          VIMAANAS
        </h1>
        <h1 className="text-white text-[11vw] md:text-[10vw] font-monument-extended font-extrabold tracking-wide leading-[1] relative mb-16 md:mb-0">
          <span className="relative">
            IN
            <span className="relative inline-block">
              C
              {/* Responsive Image - Larger for mobile */}
              <div className="absolute -right-[2vw] md:-right-[2vw] top-[12vw] md:top-[10vw] transform translate-x-1/2 -translate-y-1/2">
                <Image 
                  src="/assets/ui components/vit logo.png" 
                  alt="VIT Logo" 
                  width={200} 
                  height={200} 
                  className="w-[15vw] h-[15vw] max-w-[180px] max-h-[180px] md:w-[15vw] md:h-[15vw] md:max-w-[200px] md:max-h-[200px]"
                />
              </div>
            </span>
          </span>
        </h1>

        {/* Mobile-specific Button */}
        {isMobile ? (
          <ConnectButton 
            size="sm"
            className="font-monument-extended font-ultrabold mt-[5vw]"
            onClick={() => console.log("Contact Us Clicked")}
            text="Contact US!"
          />
        ) : (
          <ConnectButton 
            size="lg" 
            className="font-monument-extended font-ultrabold mt-[5vw]"
            onClick={() => console.log("Contact Us Clicked")}
            text="Contact US!"
          />
        )}
      </div>
    </section>
  );
};