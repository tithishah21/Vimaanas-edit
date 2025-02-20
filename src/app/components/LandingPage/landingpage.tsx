"use client";

import React from "react";
import ConnectButton from "../buttons/ConnectButton";
import Image from "next/image";

export const LandingPage = () => {
  return (
    <section 
      id="landing" 
      className="h-screen w-full relative bg-bg text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full h-full grid grid-cols-14 grid-rows-8">
          {Array.from({ length: 14 * 8 }).map((_, i) => (
            <div key={i} className="border border-white/10 backdrop-blur-md" />
          ))}
        </div>
      </div>
      
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-white text-[6rem] sm:text-[7rem] md:text-[10rem] lg:text-[10rem] font-monument-extended font-extrabold tracking-wide leading-[1]">
          TEAM
        </h1>
        <h1 className="text-red text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[12rem] font-monument-extended font-extrabold tracking-widest leading-[1]">
          VIMAANAS
        </h1>
        <h1 className="text-white text-[6rem] sm:text-[7rem] md:text-[10rem] lg:text-[10rem] font-monument-extended font-extrabold tracking-wide leading-[1] relative">
          <span className="relative">
            IN
            <span className="relative inline-block">
              C
              <div className="absolute -right-[4rem] top-[8rem] transform translate-x-1/2 -translate-y-1/2">
                <Image 
                  src="/assets/ui components/vit logo.png" 
                  alt="VIT Logo" 
                  width={200} 
                  height={200} 
                  className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px]"
                />
              </div>
            </span>
          </span>
        </h1>

        <ConnectButton 
          size="lg" 
          className="font-monument-extended font-ultrabold "
          onClick={() => console.log("Contact Us Clicked")}
          text="Contact US!"
        />
      </div>
    </section>
  );
};