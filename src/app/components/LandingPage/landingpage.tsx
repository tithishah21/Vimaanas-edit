"use client";
 
 import React from "react";
 import ConnectButton from "../buttons/ConnectButton";
 import Plane from "./components/plane";
 import UturnArrow from "./components/uturn_arrow";
 import ZigZagArrow from "./components/zigziag_arrow";
 import VitLogo from "./components/vitlogo";
 export const LandingPage = () => {
   return (
     <section
       id="landing"
       className="h-[500px] lg:h-screen w-full relative bg-bg text-white overflow-hidden flex flex-col items-center justify-center"
     >
       {/* Plane positioning - responsive with Tailwind */}
       <div
         className="absolute z-[1] right-[73vw] md:right-[69vw] lg:right-[70vw] top-[23.5%] md:top-[19%] lg:top-[16%] 
         transform -translate-y-1/2 flex flex-col items-center space-y-4 md:scale-90 lg:scale-100"
         style={{ transform: "rotate(255deg)" }}
       >
         <UturnArrow />
       </div>
 
       <div
         className="absolute z-[1] right-[13vw] md:right-[22vw] lg:right-[20vw] top-[24%] md:top-[20%] lg:top-[17%] 
         transform -translate-y-1/2 flex flex-col items-center space-y-4 md:scale-90 lg:scale-150"
         style={{ transform: "rotate(353deg)" }}
       >
         <Plane />
       </div>
       <div
         className="md:flex absolute z-[100] top-[32.5%] md:top-[35%] lg:top-[20%] right-[13%] md:right-[22%] lg:right-[21%]
         transform -translate-y-1/2 flex-col items-center space-y-4 rotate-[20deg]
         scale-[0.6] md:scale-[0.75] lg:scale-100"
       >
       </div>
       <div
         className="absolute z-[1] left-[21.5vw] md:left-[28vw] lg:left-[26vw] top-[49.5%] md:top-[53%] lg:top-[60%]
         transform -translate-y-1/2 scale-x-[-1] flex flex-col items-center"
       >
         <Plane />
       </div>
       <div
         className="absolute z-[1] left-[81.5vw] md:left-[77vw] lg:left-[76vw] top-[49.5%] md:top-[53%] lg:top-[60%]
         transform -translate-y-1/2 scale-x-[-1] flex flex-col items-center"
         
         // style={{ transform: "rotate(5deg)" }}
       >
         <ZigZagArrow className="scale-x-[1]" />
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
               <div className="absolute transform translate-x-1/2 -translate-y-1/2 -right-[5vw] md:-right-[7vw] lg:-right-[4vw] top-[12vw] lg:top-[11vw]">
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