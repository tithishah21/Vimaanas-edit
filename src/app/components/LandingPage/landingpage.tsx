"use client";

import React from "react";
import ConnectButton from "../buttons/ConnectButton";
import Image from "next/image";
import Plane from "./plane";
import UturnArrow from "./uturn_arrow";
import ZigZagArrow from "./zigziag_arrow";

export const LandingPage = () => {
  return (
    <section
      id="landing"
      className="h-screen w-full relative bg-bg text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Plane positioning - responsive with Tailwind */}
      <div
        className="absolute z-[1] right-[4.5vw] md:right-[13vw] lg:right-[10vw] top-[35.5%] md:top-[37%] lg:top-[26%] 
        transform -translate-y-1/2 flex flex-col items-center space-y-4 md:scale-90 lg:scale-100"
      >
        <UturnArrow />
        <Plane />
      </div>

      <div
        className="absolute z-[1] left-[4.5vw] md:left-[13vw] lg:left-[10vw] top-[42.5%] md:top-[45%] lg:top-[40%]
        transform -translate-y-1/2 scale-x-[-1] flex flex-col items-center"
      >
        <Plane />
        <ZigZagArrow className="mt-16 scale-x-[-1]" />
      </div>

      {/* Grid Background - responsive grid system */}
      <div className="absolute inset-0 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 md:grid-cols-10 md:grid-rows-10 lg:grid-cols-14 lg:grid-rows-14">
          {/* Generate grid cells dynamically based on breakpoint */}
          {Array.from({ length: 196 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-white/10 backdrop-blur-md ${
                (i >= 36 && i < 100) ? 'hidden md:block lg:block' : 
                (i >= 100) ? 'hidden lg:block' : ''
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Content - fully responsive with Tailwind classes */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
        <h1 className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]">
          TEAM
        </h1>
        <h1 className="text-red font-monument-extended font-extrabold tracking-widest leading-[1] text-[11vw] md:text-[9vw] lg:text-[11vw]">
          VIMAANAS
        </h1>
        <h1 className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] relative text-[11vw] md:text-[9vw] lg:text-[10vw] mb-16 md:mb-8 lg:mb-0">
          <span className="relative">
            IN
            <span className="relative inline-block">
              C
              <div className="absolute transform translate-x-1/2 -translate-y-1/2 -right-[2vw] top-[10vw]">
                <Image
                  src="/assets/ui components/vit logo.png"
                  alt="VIT Logo"
                  width={200}
                  height={200}
                  className="w-[15vw] h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[15vw] lg:h-[15vw] max-w-[200px] max-h-[200px]"
                />
              </div>
            </span>
          </span>
        </h1>

        <ConnectButton
          size="auto"
          className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[5vw]"
          onClick={() => console.log("Contact Us Clicked")}
          text="Contact US!"
        />
      </div>
    </section>
  );
};