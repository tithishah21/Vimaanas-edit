import Plane from "@/app/components/LandingPage/components/plane";
// import { StandardWobbleCard } from "@/app/components/About Team/wobblecard";
import FlyingLorry from "./grouppic.svg";
import Vayuputra from "./2013plane.svg";

export default function ArchiveSection() {
    return (
      <section
        id="about"
        className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 pb-10"
        >
          <div className="relative w-full lg:w-full flex justify-center items-center z-20 lg:mb-12">
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

          {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-5 place-items-center px-0">
        {/* Card 1 */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center lg:max-w-[48rem] text-black transition-transform duration-300 hover:-translate-y-2">
  <img
    src={FlyingLorry.src}
    alt="Flying Lorry"
    className="w-full h-[500px] object-cover rounded-3xl "
  />
  <p className="mt-4 text-lg md:text-xl font-monument-extended font-semibold leading-relaxed">
    Our first Vimaan, the <span className="text-red font-semibold text-2xl">FLYING LORRY</span> was made mostly of thermocol,
    but its other components made it a really heavy plane. It was our first shot at SAE Aerodesign and getting 7th
    was a real boost to our team of enthusiastic founders.
  </p>
</div>
        {/*mobile view for 1st card*/}
        <div className="lg:hidden mx-2">
        <img
            src={FlyingLorry.src}
            alt="Flying Lorry"
            className="w-full h-[310px] object-cover rounded-3xl"
          />
          <p className="text-zinc-700 mt-2 text-base md:text-lg font-monument-extended font-medium text-center">
            Our first Vimaan, the <span className="text-red font-semibold">FLYING LORRY</span> was made mostly of thermocol,
            but its other components made it a really heavy plane. It was our first shot at SAE Aerodesign and getting 7th
            was a real boost to our team of enthusiastic founders.
          </p>
        </div>

        {/* Card 2 */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center lg:max-w-[48rem] text-black transition-transform duration-300 hover:-translate-y-2">
  <img
    src={Vayuputra.src}
    alt="Vayuputra"
    className="w-full h-[500px] object-cover rounded-3xl"
  />
  <p className="mt-4 text-lg md:text-xl font-monument-extended font-semibold leading-relaxed">
    <span className="text-red font-semibold text-2xl">VAYUPUTRA</span> our lightest plane weighing a stellar 180 grams.
    The first to get appreciated by <span className="text-red font-semibold">NASA</span> and bagging the 
    <span className="text-red font-semibold"> Systems Engineering Award</span>.
  </p>
</div>
        {/*mobile view for 2nd card*/}
        <div className="lg:hidden mx-2">
        <img
            src={Vayuputra.src}
            alt="Vayuputra"
            className="w-full h-[310px] object-cover"
          />
          <p className="text-zinc-700 mt-2 text-base md:text-lg font-monument-extended font-medium text-center">
            <span className="text-red font-semibold">VAYUPUTRA</span> our lightest plane weighing a stellar 180 grams.
            The first to get appreciated by <span className="text-red font-semibold">NASA</span> and bagging the <span className="text-red font-semibold">            <span className="text-red-600 font-semibold"> Systems Engineering Award</span>.
          </span>.
          </p>
        </div>

      </div>
      </section>
    );
  }