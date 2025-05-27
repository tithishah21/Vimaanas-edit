"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation'; 
import 'react-toastify/dist/ReactToastify.css';
import UturnArrow from "../LandingPage/components/uturn_arrow";
import Plane from "../LandingPage/components/plane";
import ZigZagArrow from "../LandingPage/components/zigziag_arrow";
import ExploreAboutTeamButton from "../buttons/ExploreAboutTeamButton";
import { StandardWobbleCard } from "./wobblecard";
import HeadingOverlay from './heading_overlay';

export const AboutTeam = () => {
  const router = useRouter();

  const handleExploreAboutTeamClick = () => {
    router.push('/aboutteampage'); 
  };

  return (
    <section
      id="about"
      className="relative w-full rounded-t-2xl bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-20 pb-5"
    >
      <div className="absolute left-[2vw] top-[14%] lg:top-[32%] rotate-[265deg] lg:rotate-[250deg] filter grayscale brightness-[0.42] contrast-[1.2] z-50">
        <UturnArrow />
      </div>
      <div className="absolute left-[45vw] top-[52%] lg:top-[62%] rotate-[120deg] lg:rotate-[360deg] filter grayscale brightness-0 z-50">
        <ZigZagArrow />
      </div>
      <div className="relative w-full lg:w-full flex justify-center items-center z-20 ">
        <div className="absolute top-[70%] left-[33%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
          <Plane />
        </div>
        <HeadingOverlay 
          backgroundText='WHO ARE WE'
          redText='ABOUT'
          blackText='TEAM'
        />
      </div>
      <div className="lg:flex w-full justify-center gap-28 mt-10 lg:mt-20 relative z-20 md:ml-20 lg:ml-0">
        <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0">
          <div className="absolute inset-0 rounded-3xl blur-lg opacity-60" style={{ backgroundColor: '#ff9999' }}></div>
          <StandardWobbleCard
            title="WHO ARE"
            subtitle="WE?"
            message="Team Vimaanas is a passionate and innovative microclass RC plane team driven by a shared love for aeronautics, engineering, and the spirit of competition. We are a diverse group of thinkers, deisgners, and builderswho push the boundaries of flight and technology."
          />
        </div>
        <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0 mt-4 sm:mt-0">
          <div className="absolute inset-0 rounded-3xl blur-lg opacity-60" style={{ backgroundColor: '#ff9999' }}></div>
          <StandardWobbleCard
            title="OUR"
            subtitle="MISSION"
            message="To design, innovate, and excel in the field of microclass RC aviation, while fostering a culture of collaboration, creativity, and excellence.We aim to inspire future generations by showcasing the potential of engineering and teamwork in competitive settings."
          />
        </div>
        <div className="absolute bottom-[750px] md:bottom-[99vw] lg:bottom-[24vw] left-[90%] md:left-[83%] lg:left-[90%]  rotate-[344deg] lg:rotate-[350deg] opacity-90 z-10">
          <Plane />
        </div>
      </div>
      <ExploreAboutTeamButton
        size="auto"
        className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[5vw]"
        onClick={handleExploreAboutTeamClick}
      />
      
    </section>
  );
};