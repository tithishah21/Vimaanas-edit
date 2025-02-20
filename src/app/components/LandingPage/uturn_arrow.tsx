"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const UturnArrow = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Image 
      src="/assets/ui components/uturn_arrow.png" 
      alt="Uturn Arrow" 
      width={isMobile ? 80 : 100}
      height={isMobile ? 80 : 100}
      className={`${
        isMobile ? "w-[50px] h-[50px]" : "w-[10vw] h-auto max-w-[200px] min-w-[80px]"
      }`}
      priority 
    />
  );
};

export default UturnArrow;
