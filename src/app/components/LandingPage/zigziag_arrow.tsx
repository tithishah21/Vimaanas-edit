"use client";

import Image from "next/image";

const ZigZagArrow = ({ className }: { className?: string }) => {
  return (
    <Image 
      src="/assets/ui components/zigzag_arrow.png" 
      alt="ZigZag Arrow" 
      width={100}
      height={100}
      className={`w-[50px] h-[50px] md:w-[10vw] md:h-auto md:max-w-[200px] md:min-w-[80px] ${className}`}
      priority 
    />
  );
};

export default ZigZagArrow;