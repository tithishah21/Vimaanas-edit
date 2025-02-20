"use client";

import Image from "next/image";

const UturnArrow = () => {
  return (
    <Image 
      src="/assets/ui components/uturn_arrow.png" 
      alt="Uturn Arrow" 
      width={100}
      height={100}
      className="w-[100px] h-[100px] max-w-none"
      priority 
    />
  );
};

export default UturnArrow;
