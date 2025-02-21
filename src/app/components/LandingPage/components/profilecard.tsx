"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ProfileCardProps {
  imageUrl: string | StaticImageData;
  name: string;
  role: string;
  values?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, values }) => {
  return (
    <div className="bg-cardcolor/20 backdrop-blur-lg rounded-2xl shadow-md px-4 py-2 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4">
        <Image src={imageUrl!} alt={name} fill className="object-cover object-center" priority />
      </div>

      <h2 className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-sfprodisplay font-bold sm:font-semibold mb-1 sm:mb-2">
        {role}
      </h2>

      <div className="text-white text-xs sm:text-sm md:text-base font-medium">
        {values?.map((value, index) => (
          <span key={index} className="block">{value}</span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
