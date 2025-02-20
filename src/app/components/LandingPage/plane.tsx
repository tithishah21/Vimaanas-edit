"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Plane = ({ className }: { className?: string }) => {
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
      src="/assets/ui components/plane.png" 
      alt="Plane" 
      width={isMobile ? 50 : 100}
      height={isMobile ? 50 : 100}
      className={`opacity-70 transform rotate-12 ${
        isMobile ? "w-[50px] h-[50px]" : "w-[10vw] h-auto max-w-[200px] min-w-[80px]"
      } ${className}`}
      priority 
    />
  );
};

export default Plane;