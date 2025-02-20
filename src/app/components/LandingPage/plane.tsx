"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Plane = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Image 
      src="/assets/ui components/plane.png" 
      alt="Plane" 
      width={isMobile ? 50 : 100}
      height={isMobile ? 50 : 100}
      className={`opacity-70 transform rotate-12 ${
        isMobile ? "w-[50px] h-[50px]" : "w-[10vw] h-auto max-w-[200px] min-w-[80px]"
      }`}
      priority 
    />
  );
};

export default Plane;
