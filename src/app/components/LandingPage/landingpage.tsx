"use client";

import React from "react";
import ConnectButton from "../buttons/ConnectButton";
import Image from "next/image";
import Plane from "./components/plane";
import UturnArrow from "./components/uturn_arrow";
import ZigZagArrow from "./components/zigziag_arrow";
import ProfileCard from "./components/profilecard";
import VitLogo from "./components/vitlogo";
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
        className="md:flex absolute z-[100] top-[32.5%] md:top-[35%] lg:top-[20%] right-[13%] md:right-[22%] lg:right-[21%]
        transform -translate-y-1/2 flex-col items-center space-y-4 rotate-[20deg]
        scale-[0.6] md:scale-[0.75] lg:scale-100"
      >
        <ProfileCard  
          imageUrl={"/assets/team/Priyank Dasondi - Team Captain.jpeg"}
          name="Priyank"
          role="CAPTAIN"
          values={["Innovate","Fly","Conquer"]}
        />
      </div>
      <div
        className="absolute z-[1] left-[4.5vw] md:left-[10vw] lg:left-[10vw] top-[42.5%] md:top-[45%] lg:top-[40%]
        transform -translate-y-1/2 scale-x-[-1] flex flex-col items-center"
      >
        <Plane />
        <ZigZagArrow className="mt-16 scale-x-[-1]" />
      </div>
      <div
        className="md:flex absolute z-[100] bottom-[30.5%] md:bottom-[25.5%] lg:bottom-[10%] left-[13%] md:left-[22%] lg:left-[21%]
        transform -translate-y-1/2 flex-col items-center space-y-4 rotate-[-18deg]
        scale-[0.6] md:scale-[0.75] lg:scale-100"
      >
        <ProfileCard  
          imageUrl={"/assets/team/Priyank Dasondi - Team Captain.jpeg"}
          name="Priyank"
          role="CAPTAIN"
          values={["Innovate","Fly","Conquer"]}
        />
      </div>

      {/* Grid Background - responsive grid system */}
      <div className="absolute w-full inset-0 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 md:grid-cols-10 md:grid-rows-10 lg:grid-cols-14 lg:grid-rows-14">
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
              <div className="absolute transform translate-x-1/2 -translate-y-1/2 -right-[7vw] lg:-right-[4vw] top-[14vw] lg:top-[12vw]">
                <VitLogo />
              </div>;
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
