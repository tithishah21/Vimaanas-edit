'use client';
import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";
import PlaneImage from "./plane_image2.svg";
import { useEffect, useState } from "react";

export default function AimSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('aim-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes flyInFromLeft {
          0% {
            transform: translateX(-100vw) translateY(-36px) rotate(12deg) scale(1.3);
            opacity: 0;
          }
          60% {
            transform: translateX(120px) translateY(-38px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          80% {
            transform: translateX(105px) translateY(-35px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateX(112px) translateY(-36px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes flyInFromLeftDesktop {
          0% {
            transform: translateX(-100vw) translateY(-80px) rotate(12deg) scale(1.3);
            opacity: 0;
          }
          60% {
            transform: translateX(186px) translateY(-85px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          80% {
            transform: translateX(170px) translateY(-82px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateX(176px) translateY(-80px) rotate(12deg) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .plane-animation-left {
          animation: flyInFromLeft 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .quote-fade-in {
          opacity: 0;
          animation: fadeInUp 1.5s ease-out forwards;
        }

        .quote-fade-in.delay-1 {
          animation-delay: 0.3s;
        }

        @media (min-width: 1024px) {
          .plane-animation-left {
            animation: flyInFromLeftDesktop 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        }
      `}</style>
      
      <section
        id="aim-section"
        className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 pb-10"
      >
        <div className="relative w-full lg:w-full flex justify-center items-center z-20 ">
          <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
            <Plane />
          </div>
          <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.28rem] md:text-6xl lg:text-[7.758rem] tracking-widest">
            WHAT WE AIM?
          </div>
          <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
            <div className="text-[#000000]">WHAT</div>
            <div className="text-[#000000]">WE</div>
            <div className="text-[#FF0000]">STRIVE</div>
            <div className="text-[#000000]">FOR</div>
          </div>
        </div>
        
        <div className={`text-[#000000] font-monument-extended font-ultrabold text-md lg:text-[3.4rem] pt-5 lg:pt-20 ${isVisible ? 'quote-fade-in' : 'opacity-0'}`}>
          "We don't stop when we get tired,
        </div>
        <div className={`text-[#FF0000] font-monument-extended font-ultrabold lg:text-[3.4rem] pb-5 lg:pb-20 ${isVisible ? 'quote-fade-in delay-1' : 'opacity-0'}`}>
          we stop when we're done."
        </div>
        
        {/*content*/}
        <div className="lg:grid lg:grid-cols-2 lg:gap-9 lg:items-center relative">
          {/* Plane image - Left side */}
          <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 lg:static lg:z-auto lg:opacity-100 lg:flex lg:justify-center lg:items-center">
            <div className={`transform ${isVisible ? 'plane-animation-left' : 'opacity-0'}`}>
              <Image
                src={PlaneImage}
                alt="Plane image"
                width={900}
                height={900}
                priority
              />
            </div>
          </div>
          
          {/* Quote text - Right side */}
          <div className="text-black font-monument font-bold tracking-widest leading-relaxed z-10 relative text-lg md:text-xl lg:text-3xl font-monument text-center lg:text-right ml-10 lg:ml-0 mr-10 lg:mr-10 -translate-y-20 mt-24 lg:mt-2">
            "We aim to soar above the rest, one aircraft at a time, while keeping the vibe light and the designs tight. We're not just here to glide through—we're out to drop jaws and lift spirits with every buzz of our mini masterpieces. So, buckle up—our little wings are ready to stir up some big turbulence."
          </div>
        </div>
      </section>
    </>
  );
}