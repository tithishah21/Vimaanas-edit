import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { src: "/assets/tmotor.svg", alt: "T-Motor" },
    { src: "/assets/solidworks.svg", alt: "SolidWorks" },
    { src: "/assets/simscale.svg", alt: "SimScale" },
    { src: "/assets/savox.svg", alt: "Savox" },
    { src: "/assets/spektrum.svg", alt: "Spektrum" },
    { src: "/assets/ansys.svg", alt: "Ansys" },
    { src: "/assets/scorpion.svg", alt: "Scorpion" },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-[5vw] pb-[5vw]"
    >
      {/* Header */}
      <div className="relative w-full flex justify-center items-center z-20 mb-[5vw]">
        <div className="absolute top-[70%] left-[28%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
          <Plane />
        </div>
        <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[8vw] md:text-[5vw] lg:text-[8.7vw] tracking-widest">
          OUR SPONSORS
        </div>
        <div className="absolute flex font-monument-extended font-ultrabold text-[3vw] md:text-[2vw] lg:text-[3vw] tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[1vw] z-30">
          <div className="text-black">FUNDING</div>
          <div className="text-[#FF0000]">PARTNERS</div>
        </div>
      </div>

      {/* Sponsor Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[5vw] place-items-center w-[90%] max-w-7xl mx-auto">
            {partners.map((partner, index) => (
        <div
          key={index}
          className={`relative w-[50vw] sm:w-[35vw] lg:w-[23vw] aspect-[2.5/1] transition duration-300 transform hover:-translate-y-3
            ${index === partners.length - 1 ? "lg:col-start-2 lg:col-end-3" : ""}
          `}
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>

    </section>
  );
}
