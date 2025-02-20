"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const UturnArrow = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 767);
      };
      
      checkIfMobile();
      
      window.addEventListener("resize", checkIfMobile);
      
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);
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