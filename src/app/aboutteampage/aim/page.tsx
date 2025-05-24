'use client';
import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";
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
    if (section) observer.observe(section);

    return () => {
      const section = document.getElementById('aim-section');
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes flyInFromLeftMobile {
          0% {
            transform: translateX(-100vw) translateY(-4vh) rotate(12deg) scale(1.3);
            opacity: 0;
          }
          60% {
            transform: translateX(20vw) translateY(-4vh) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateX(25vw) translateY(-4vh) rotate(12deg) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes flyInFromLeftDesktop {
          0% {
            transform: translateX(-100vw) translateY(-6vh) rotate(12deg) scale(1.3);
            opacity: 0;
          }
          60% {
            transform: translateX(5vw) translateY(-6vh) rotate(12deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateX(10vw) translateY(-6vh) rotate(12deg) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(2vw);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .plane-animation {
          animation: flyInFromLeftMobile 2.5s ease-out forwards;
        }

        .quote-fade-in {
          opacity: 0;
          animation: fadeInUp 1.5s ease-out forwards;
        }

        .quote-fade-in.delay-1 {
          animation-delay: 0.3s;
        }

        @media (min-width: 1024px) {
          .plane-animation {
            animation: flyInFromLeftDesktop 2.5s ease-out forwards;
          }
        }
      `}</style>

      <section
        id="aim-section"
        className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-[10vw] pb-[10vw]"
      >
        <div className="relative w-full flex justify-center items-center z-20">
          <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
            <Plane />
          </div>

          <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[8vw] md:text-[6vw] lg:text-[7.5vw] tracking-widest">
            WHAT WE AIM?
          </div>

          <div className="absolute flex font-monument-extended font-ultrabold text-[4vw] md:text-[2vw] lg:text-[3.4vw] tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[0.5vw] z-30">
            <div className="text-[#000000]">WHAT</div>
            <div className="text-[#000000]">WE</div>
            <div className="text-[#FF0000]">STRIVE</div>
            <div className="text-[#000000]">FOR</div>
          </div>
        </div>

        <div className={`text-[#000000] font-monument-extended font-ultrabold text-[4vw] lg:text-[2.8vw] pt-[3vw] ${isVisible ? 'quote-fade-in' : 'opacity-0'}`}>
          &quot;We don&apos;t stop when we get tired,
        </div>
        <div className={`text-[#FF0000] font-monument-extended font-ultrabold text-[4vw] lg:text-[2.8vw] pb-[5vw] ${isVisible ? 'quote-fade-in delay-1' : 'opacity-0'}`}>
          we stop when we&apos;re done.&quot;
        </div>

        {/* Plane Image Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-[4vw] lg:items-center relative">
          <div className="absolute inset-0 flex justify-center items-center z-0 opacity-20 lg:static lg:z-auto lg:opacity-100 lg:flex">
            <div className={`transform ${isVisible ? 'plane-animation' : 'opacity-0'}`}>
              <Image
                src="/assets/plane_image2.svg"
                alt="Plane image"
                width={900}
                height={900}
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Quote Text Section */}
          <div className="text-black font-monument font-bold tracking-widest leading-relaxed z-10 relative text-[4vw] lg:text-[1.6vw] text-center lg:text-right px-[5vw] lg:px-0 mt-[12vw] lg:mt-[1vw] -translate-y-[5vw]">
            &quot;We aim to soar above the rest, one aircraft at a time, while keeping the vibe light and the designs tight. We&apos;re not just here to glide through—we&apos;re out to drop jaws and lift spirits with every buzz of our mini masterpieces. So, buckle up—our little wings are ready to stir up some big turbulence.&quot;
          </div>
        </div>
      </section>
    </>
  );
}
