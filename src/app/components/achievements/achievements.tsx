import ConnectButton from "../buttons/ConnectButton";
import { StandardWobbleCard } from "../About Team/wobblecard";

export const Achievements = () => {
    return (
      <div>
      <div className="relative w-full lg:w-full flex justify-center items-center z-20 ">

<div className="text-stroke font-monument-extended font-ultrabold text-3xl md:text-7xl lg:text-9xl tracking-widest">
  ACHIEVEMENTS
</div>

<div className="absolute flex font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
  <div className="text-[#FF0000]">ACHIEVEMENTS</div>
</div>
</div>
<div className="lg:flex w-full justify-center gap-28 mt-10 lg:mt-20 relative z-20 md:ml-20 lg:ml-0">

<div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0">
<div className="absolute inset-0 bg-pink-500 rounded-3xl blur-lg opacity-50"></div>

      <StandardWobbleCard
        title="1st Place"
        subtitle="Overall"
        message={
          <>
            Aero Dominator <br /> <br />
            1st place overall in the Micro Class RC Aircrafts Category.
          </>
        }
       
      />
</div>


<div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 mt-6 sm:mt-0 sm:ml-0">
<div className="absolute inset-0 bg-pink-500 rounded-3xl blur-lg opacity-50"></div>
<StandardWobbleCard
        title="13th Place"
        subtitle="Overall"
        message={
          <>
            SAE International <br /> <br />
            13th Place Overall in the Micro Class RC Aircrafts Category.
          </>
        }
      />
</div>

</div>
<div className="flex w-full items-center justify-center">
<ConnectButton
        size="auto"
        className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[4vw]"
        onClick={() => console.log("Contact Us Clicked")}
        text="  Explore Achievements"
      />
      </div>
</div>
    );
  };