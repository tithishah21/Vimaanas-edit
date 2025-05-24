'use client';

import Image from "next/image";
import Plane from "@/app/components/LandingPage/components/plane";
import { useEffect, useState } from "react";

export default function WhoAreWeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('about');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes flyInFromRight {
          0% {
            transform: translateX(100vw) translateY(-10vh) rotate(12deg) scale(1.6);
            opacity: 0;
          }
          60% {
            transform: translateX(-7vw) translateY(-10.2vh) rotate(12deg) scale(1.6);
            opacity: 1;
          }
          80% {
            transform: translateX(-13vw) translateY(-9.8vh) rotate(12deg) scale(1.6);
            opacity: 1;
          }
          100% {
            transform: translateX(-20vw) translateY(-10vh) rotate(12deg) scale(1.6);
            opacity: 1;
          }
        }

        @keyframes flyInFromRightDesktop {
          0% {
            transform: translateX(100vw) translateY(-14vh) rotate(12deg) scale(1.7);
            opacity: 0;
          }
          60% {
            transform: translateX(-1vw) translateY(-14.5vh) rotate(12deg) scale(1.7);
            opacity: 1;
          }
          80% {
            transform: translateX(0.5vw) translateY(-14.3vh) rotate(12deg) scale(1.7);
            opacity: 1;
          }
          100% {
            transform: translateX(0vw) translateY(-14vh) rotate(12deg) scale(1.7);
            opacity: 1;
          }
        }

        .plane-animation {
          animation: flyInFromRight 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @media (min-width: 1024px) {
          .plane-animation {
            animation: flyInFromRightDesktop 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        }
      `}</style>

      <section
        id="about"
        className="relative w-full rounded-t-3xl bg-white text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-[5vh] lg:pt-[10vh] "
      >
        {/* Heading */}
        <div className="relative w-full flex justify-center items-center z-20 mb-[0.3vh]">
          <div className="absolute top-[70%] left-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
            <Plane />
          </div>
          <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.09rem] md:text-[5rem] lg:text-[8.2rem] tracking-widest">
            WHO ARE WE?
          </div>
          <div className="absolute flex font-monument-extended font-ultrabold text-[1rem] md:text-[2rem] lg:text-[3vw] tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[0.5rem] z-30">
            <div className="text-[#FF0000]">ABOUT</div>
            <div className="text-black">TEAM</div>
          </div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-[5vw] lg:px-[6vw]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[4vw] lg:items-center relative">
            {/* Text */}
            <div className="text-black z-10 relative">
              <div className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.8vw] leading-relaxed pt-[0.5rem] lg:pt-[2rem] text-center lg:text-left">
                <span className="text-[#FF0000] font-monument-extended font-ultrabold">Team Vimaanas Inc.</span>
                <span className="text-black font-monument font-bold tracking-wider">
                  &nbsp;is a crew of visionary builders who turn dreams into micro-class RC planes that rule the skies.
                </span>
              </div>
              <div className="mt-[1rem] text-[1.1rem] md:text-[1.3rem] lg:text-[1.8vw] leading-relaxed text-black font-monument font-bold text-center lg:text-left">
                With cutting-edge designs and a passion for precision, we deliver pint-sized powerhouses that defy gravity and expectations. From concept to takeoff, our hands-on hustle makes every build a masterpiece. Fueled by creativity and a love for flight, we&apos;re the ultimate wingmen of innovation!
              </div>
            </div>

            {/* Plane Image */}
            <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 lg:static lg:z-auto lg:opacity-100">
              <div className={`transform ${isVisible ? 'plane-animation' : 'opacity-0'}`}>
                <Image
                  src="/assets/plane_image.svg"
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
    </>
  );
}
