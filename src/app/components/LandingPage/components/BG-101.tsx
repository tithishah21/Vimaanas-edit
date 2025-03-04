"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BG101 = ({ className }: { className?: string }) => {
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
      src="/assets/ui components/BG-101.png" 
      alt="BG-101" 
      width={isMobile ? 50 : 100}
      height={isMobile ? 50 : 100}
      className={`opacity-70 ${
        isMobile ? "w-[50px] h-[50px]" : "w-[10vw] h-auto max-w-[200px] min-w-[80px]"
      } ${className}`}
      priority 
    />
  );
};

export default BG101;
