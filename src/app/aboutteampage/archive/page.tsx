"use client";

import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";

export default function ArchiveSection() {
  return (
    <>
      <style jsx>{`
        .heading-main {
          font-size: 8vw;
        }

        .heading-sub {
          font-size: 4vw;
        }

        @media (min-width: 768px) {
          .heading-main {
            font-size: 6vw;
          }
          .heading-sub {
            font-size: 2.8vw;
          }
        }

        @media (min-width: 1024px) {
          .heading-main {
            font-size: 7.5vw;
          }
          .heading-sub {
            font-size: 3.4vw;
          }
        }

        .card-text {
          font-size: 3.5vw;
        }

        @media (min-width: 768px) {
          .card-text {
            font-size: 2.3vw;
          }
        }

        @media (min-width: 1024px) {
          .card-text {
            font-size: 1.3vw;
          }
        }

        .image-mobile {
          height: 40vw;
        }

        @media (min-width: 768px) {
          .image-mobile {
            height: 35vw;
          }
        }

        @media (min-width: 1024px) {
          .image-desktop {
            height: 28vw;
          }
        }
      `}</style>

      <section
        id="about"
        className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-[10vw] pb-[5vw]"
      >
        {/* Heading */}
        <div className="relative w-full flex justify-center items-center z-20 mb-[0vw]">
          <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
            <Plane />
          </div>

          <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold heading-main tracking-widest">
            FROM A VAULT
          </div>

          <div className="absolute flex font-monument-extended font-ultrabold heading-sub tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[1.2vw] z-30">
            <div className="text-black">THE</div>
            <div className="text-[#FF0000]">ARCHIVE</div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] place-items-center w-full px-[3vw]">
          {/* Card 1 - Desktop */}
          <div className="hidden lg:flex flex-col items-center text-center max-w-[90%] text-black transition-transform duration-300 hover:-translate-y-[0.5vw]">
            <Image
              src="/assets/grouppic.svg"
              alt="Flying Lorry"
              width={1200}
              height={800}
              className="w-full image-desktop object-cover rounded-[2vw]"
              unoptimized
            />
            <p className="mt-[2vw] card-text font-monument-extended font-semibold leading-relaxed">
              Our first Vimaan, the <span className="text-red font-semibold text-[2vw]">FLYING LORRY</span> was made mostly of thermocol,
              but its other components made it a really heavy plane. It was our first shot at SAE Aerodesign and getting 7th
              was a real boost to our team of enthusiastic founders.
            </p>
          </div>

          {/* Card 1 - Mobile */}
          <div className="lg:hidden w-full">
            <Image
              src="/assets/grouppic.svg"
              alt="Flying Lorry"
              width={600}
              height={310}
              className="w-full image-mobile object-cover rounded-[2vw]"
              unoptimized
            />
            <p className="text-zinc-700 mt-[1.5vw] card-text font-monument-extended font-medium text-center">
              Our first Vimaan, the <span className="text-red font-semibold">FLYING LORRY</span> was made mostly of thermocol,
              but its other components made it a really heavy plane. It was our first shot at SAE Aerodesign and getting 7th
              was a real boost to our team of enthusiastic founders.
            </p>
          </div>

          {/* Card 2 - Desktop */}
          <div className="hidden lg:flex flex-col items-center text-center max-w-[90%] text-black transition-transform duration-300 hover:-translate-y-[0.5vw]">
            <Image
              src="/assets/2013plane.svg"
              alt="Vayuputra"
              width={1200}
              height={800}
              className="w-full image-desktop object-cover rounded-[2vw]"
              unoptimized
            />
            <p className="mt-[2vw] card-text font-monument-extended font-semibold leading-relaxed">
              <span className="text-red font-semibold text-[2vw]">VAYUPUTRA</span> — our lightest plane weighing a stellar 180 grams.
              The first to get appreciated by <span className="text-red font-semibold">NASA</span>, bagging the
              <span className="text-red font-semibold"> Systems Engineering Award</span>.
            </p>
          </div>

          {/* Card 2 - Mobile */}
          <div className="lg:hidden w-full">
            <Image
              src="/assets/2013plane.svg"
              alt="Vayuputra"
              width={600}
              height={310}
              className="w-full image-mobile object-cover rounded-[2vw]"
              unoptimized
            />
            <p className="text-zinc-700 mt-[1.5vw] card-text font-monument-extended font-medium text-center">
              <span className="text-red font-semibold">VAYUPUTRA</span> — our lightest plane weighing a stellar 180 grams.
              The first to get appreciated by <span className="text-red font-semibold">NASA</span>, bagging the
              <span className="text-red font-semibold"> Systems Engineering Award</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
