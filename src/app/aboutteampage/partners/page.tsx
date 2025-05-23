import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";


export default function PartnersSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 pb-10"
    >
      <div className="relative w-full lg:w-full flex justify-center items-center z-20 mb-10 lg:mb-16">
        <div className="absolute top-[70%] left-[28%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
          <Plane />
        </div>
        <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.28rem] md:text-6xl lg:text-[7.658rem] tracking-widest">
          OUR SPONSORS
        </div>
        <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
          <div className="text-[#000000]">FUNDING</div>
          <div className="text-[#FF0000]">PARTNERS</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-[90%] max-w-7xl mx-auto">
      <img src="/assets/tmotor.svg" alt="T-Motor" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/solidworks.svg" alt="SolidWorks" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/simscale.svg" alt="SimScale" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/savox.svg" alt="Savox" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/spektrum.svg" alt="Spektrum" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/ansys.svg" alt="Ansys" className="w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
      <img src="/assets/scorpion.svg" alt="Scorpion" className="lg:ml-[55rem] w-60 lg:w-80 object-contain transition duration-300 transform hover:-translate-y-3" />
    </div>

    </section>
  );
}
