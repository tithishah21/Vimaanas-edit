"use client";

import Image from "next/image";

const Plane = () => {
  return (
    <Image 
      src="/assets/ui components/plane.png" 
      alt="Plane" 
      width={100}
      height={100}
      className="w-[100px] h-[100px] max-w-none"
      priority 
    />
  );
};

export default Plane;
