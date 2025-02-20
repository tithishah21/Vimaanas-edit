"use client";

import React from "react";
import ConnectButton from "../buttons/ConnectButton";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Plane from "./plane";

export const LandingPage = () => {
  // Add specific breakpoints for different device sizes
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  
  return (
    <section 
      id="landing" 
      className="h-screen w-full relative bg-bg text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Plane positioning with specific tablet adjustments */}
      <div className={`absolute z-[1] ${
        isMobile ? "right-[4.5vw] top-[39.5%] transform -translate-y-1/2" :
        isTablet ? "right-[13vw] top-[41%] transform -translate-y-1/2 scale-90" :
        "right-[10vw] top-[30%] transform -translate-y-1/2"
      }`}>
        <Plane />
      </div>
      <div className={`absolute z-[1] ${
        isMobile ? "left-[4.5vw] top-[39.5%] transform -translate-y-1/2 scale-x-[-1]" :
        isTablet ? "left-[13vw] top-[41%] transform -translate-y-1/2 scale-90 scale-x-[-1]" :
        "left-[10vw] top-[30%] transform -translate-y-1/2 scale-x-[-1]"
      }`}>
        <Plane />
      </div>
      {/* Responsive Grid - Adjusted for different viewports */}
      <div className="absolute inset-0 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 md:grid-cols-10 lg:grid-cols-14 md:grid-rows-10 lg:grid-rows-14">
          {Array.from({ length: isMobile ? 36 : isTablet ? 100 : 196 }).map((_, i) => (
            <div key={i} className="border border-white/10 backdrop-blur-md" />
          ))}
        </div>
      </div>
      
      {/* Responsive Content with tablet-specific adjustments */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
        <h1 className={`text-white font-monument-extended font-extrabold tracking-wide leading-[1] ${
          isMobile ? "text-[11vw]" : 
          isTablet ? "text-[9vw]" : 
          "text-[10vw]"
        }`}>
          TEAM
        </h1>
        <h1 className={`text-red font-monument-extended font-extrabold tracking-widest leading-[1] ${
          isMobile ? "text-[11vw]" : 
          isTablet ? "text-[9vw]" : 
          "text-[11vw]"
        }`}>
          VIMAANAS
        </h1>
        <h1 className={`text-white font-monument-extended font-extrabold tracking-wide leading-[1] relative ${
          isMobile ? "text-[11vw] mb-16" : 
          isTablet ? "text-[9vw] mb-8" : 
          "text-[10vw] mb-0"
        }`}>
          <span className="relative">
            IN
            <span className="relative inline-block">
              C
              {/* Logo positioning adjusted for each viewport */}
              <div className={`absolute transform translate-x-1/2 -translate-y-1/2 ${
                isMobile ? "-right-[2vw] top-[12vw]" :
                isTablet ? "-right-[1.5vw] top-[9vw]" :
                "-right-[2vw] top-[10vw]"
              }`}>
                <Image 
                  src="/assets/ui components/vit logo.png" 
                  alt="VIT Logo" 
                  width={200} 
                  height={200} 
                  className={`${
                    isMobile ? "w-[15vw] h-[15vw] max-w-[180px] max-h-[180px]" :
                    isTablet ? "w-[12vw] h-[12vw] max-w-[160px] max-h-[160px]" :
                    "w-[15vw] h-[15vw] max-w-[200px] max-h-[200px]"
                  }`}
                />
              </div>
            </span>
          </span>
        </h1>

        {/* Button sizing adjusted for all viewport sizes */}
        <ConnectButton 
          size={isMobile ? "sm" : isTablet ? "md" : "lg"}
          className={`font-monument-extended font-ultrabold ${
            isMobile ? "mt-[5vw]" : 
            isTablet ? "mt-[4vw]" : 
            "mt-[5vw]"
          }`}
          onClick={() => console.log("Contact Us Clicked")}
          text="Contact US!"
        />
      </div>
    </section>
  );
};