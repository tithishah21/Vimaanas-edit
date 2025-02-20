"use client";

import Image from "next/image";

const ZigZagArrow = () => {
  return (
    <Image 
      src="/assets/ui components/zigzag_arrow.png" 
      alt="ZigZag Arrow" 
      width={100}
      height={100}
      className="w-[100px] h-[100px] max-w-none"
      priority 
    />
  );
};

export default ZigZagArrow;
