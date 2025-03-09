import CircularText from "./circular_text";
import Image from "next/image";

const VitLogo = () => {
  return (
    <div className="relative w-[30vw] h-[30vw] sm:w-[28vw] sm:h-[28vw] md:w-[26vw] md:h-[26vw] lg:w-[22vw] lg:h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center">

      <Image
        src="/assets/ui components/redellipse.png"
        alt="Red Background"
        width={300}
        height={300}
        className="absolute w-full h-full"
      />

      <div className="absolute w-full h-full">

        <div className="hidden lg:block">
          <CircularText
            text="VELLORE INSTITUTE OF TECHNOLOGY • "
            onHover="speedUp"
            spinDuration={20}
            className="absolute w-full h-full text-sm font-semibold tracking-wider leading-none"
          />
        </div>


        <div className="lg:hidden">
          <CircularText
            text="VIT VELLORE • "
            onHover="speedUp"
            spinDuration={20}
            className="absolute w-full h-full text-xs font-semibold tracking-widest leading-none"
          />
        </div>
      </div>


      <Image
        src="/assets/ui components/logo_vit.png"
        alt="VIT Logo"
        width={220}
        height={220}
        className="relative w-[16vw] h-[16vw] sm:w-[14vw] sm:h-[14vw] md:w-[12vw] md:h-[12vw] lg:w-[12vw] lg:h-[12vw] max-w-[180px] max-h-[180px]"
      />
    </div>
  );
};

export default VitLogo;
