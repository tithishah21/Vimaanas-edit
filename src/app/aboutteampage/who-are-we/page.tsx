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
            transform: translateX(100vw) translateY(-96px) rotate(12deg) scale(1.6);
            opacity: 0;
          }
          60% {
            transform: translateX(-7%) translateY(-98px) rotate(12deg) scale(1.6);
            opacity: 1;
          }
          80% {
            transform: translateX(-13%) translateY(-95px) rotate(12deg) scale(1.6);
            opacity: 1;
          }
          100% {
            transform: translateX(-20%) translateY(-96px) rotate(12deg) scale(1.6);
            opacity: 1;
          }
        }

        @keyframes flyInFromRightDesktop {
          0% {
            transform: translateX(100vw) translateY(-144px) rotate(12deg) scale(1.7);
            opacity: 0;
          }
          60% {
            transform: translateX(-10px) translateY(-148px) rotate(12deg) scale(1.7);
            opacity: 1;
          }
          80% {
            transform: translateX(5px) translateY(-146px) rotate(12deg) scale(1.7);
            opacity: 1;
          }
          100% {
            transform: translateX(0px) translateY(-144px) rotate(12deg) scale(1.7);
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
        className="relative w-full rounded-t-3xl bg-white text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 lg:pt-20 pb-10"
      >
        {/* Heading */}
        <div className="relative w-full flex justify-center items-center z-20 mb-16">
          <div className="absolute top-[70%] left-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
            <Plane />
          </div>
          <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.45rem] md:text-7xl lg:text-[8.2rem] tracking-widest">
            WHO ARE WE?
          </div>
          <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
            <div className="text-[#FF0000]">ABOUT</div>
            <div className="text-black">TEAM</div>
          </div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center relative">
            {/* Text */}
            <div className="text-black z-10 relative">
              <div className="text-lg md:text-xl lg:text-3xl leading-relaxed pt-1 lg:pt-8 text-center lg:text-left">
                <span className="text-[#FF0000] font-monument-extended font-ultrabold">Team Vimaanas Inc.</span>
                <span className="text-black font-monument font-bold tracking-wider"> is a crew of visionary builders who turn dreams into micro-class RC planes that rule the skies.</span>
              </div>
              <div className="mt-6 text-lg md:text-xl lg:text-3xl leading-relaxed text-black font-monument font-bold text-center lg:text-left">
                With cutting-edge designs and a passion for precision, we deliver pint-sized powerhouses that defy gravity and expectations. From concept to takeoff, our hands-on hustle makes every build a masterpiece. Fueled by creativity and a love for flight, we're the ultimate wingmen of innovation!
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
