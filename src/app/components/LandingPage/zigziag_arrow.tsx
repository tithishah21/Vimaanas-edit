"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const ZigZagArrow = ({ className }: { className?: string }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Image 
      src="/assets/ui components/zigzag_arrow.png" 
      alt="ZigZag Arrow" 
      width={isMobile ? 80 : 100}
      height={isMobile ? 80 : 100}
      className={`${
        isMobile ? "w-[50px] h-[50px]" : "w-[10vw] h-auto max-w-[200px] min-w-[80px]"
      } ${className}`}
      priority 
    />
  );
};

export default ZigZagArrow;
