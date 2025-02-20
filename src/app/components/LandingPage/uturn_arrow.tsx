"use client";

import Image from "next/image";

const UturnArrow = () => {
  return (
    <Image 
      src="/assets/ui components/uturn_arrow.png" 
      alt="Uturn Arrow" 
      width={100}
      height={100}
      className="w-[50px] h-[50px] md:w-[10vw] md:h-auto md:max-w-[200px] md:min-w-[80px]"
      priority 
    />
  );
};

export default UturnArrow;