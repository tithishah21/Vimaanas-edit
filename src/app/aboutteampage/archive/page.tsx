import Plane from "@/app/components/LandingPage/components/plane";
export default function ArchiveSection() {
    return (
      <section
        id="about"
        className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 pb-10"
        >
          <div className="relative w-full lg:w-full flex justify-center items-center z-20 ">
            <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
              <Plane />
            </div>
            <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.28rem] md:text-6xl lg:text-[8.458rem] tracking-widest">
              FROM A VAULT
            </div>
            <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
              <div className="text-[#000000]">THE</div>
              <div className="text-[#FF0000]">ARCHIVE</div>
            </div>
          </div>
      </section>
    );
  }
  