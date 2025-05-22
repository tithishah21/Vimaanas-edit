'use client';

import Image from "next/image";
import Plane from "@/app/components/LandingPage/components/plane";
import PlaneImage from "./plane_image.svg";

export default function WhoAreWeSection() {
    return (
        <section
            id="about"
            className="relative w-full rounded-t-3xl bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 lg:pt-20 pb-10"
        >
            <div className="relative w-full lg:w-full flex justify-center items-center z-20 mb-16">
                <div className="absolute top-[70%] left-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0 ">
                    <Plane />
                </div>
                
                <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.45rem] md:text-7xl lg:text-[8.2rem] tracking-widest">
                    WHO ARE WE?
                </div>
                
                <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
                    <div className="text-[#FF0000]">ABOUT</div>
                    <div className="text-[#000000]">TEAM</div>
                </div>
            </div>

            {/* Content section */}
            <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center relative">
                    <div className="text-black z-10 relative">
                        <div className="text-lg md:text-xl lg:text-3xl leading-relaxed pt-1 lg:pt-8 text-center lg:text-left">
                            <span className="text-[#FF0000] font-monument-extended font-ultrabold">Team Vimaanas Inc.</span>
                            <span className="text-black font-monument font-bold tracking-wider leading-4"> is a crew of visionary builders who turn dreams into micro-class RC planes that rule the skies.</span>
                        </div>
                        
                        <div className="mt-6 text-lg md:text-xl lg:text-3xl leading-relaxed text-black font-monument font-bold text-center lg:text-left">
                            With cutting-edge designs and a passion for precision, we deliver pint-sized powerhouses that defy gravity and expectations. From concept to takeoff, our hands-on hustle makes every build a masterpiece. Fueled by creativity and a love for flight, we're the ultimate wingmen of innovation!
                        </div>
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 lg:static lg:z-auto lg:opacity-100 lg:flex lg:justify-center lg:items-center">
                    <div className="transform rotate-12 scale-[1.6] lg:scale-[1.7] -translate-x-20 -translate-y-24 lg:-translate-y-36">
                        <Image
                            src={PlaneImage}
                            alt="Plane image"
                            width={900}
                            height={900}
                            priority
                        />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
