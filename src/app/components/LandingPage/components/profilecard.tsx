"use client";

import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface ProfileCardProps {
  imageUrl: string | StaticImageData;
  name: string;
  role: string;
  values: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, values }) => {
  return (
    <div className="w-80 h-auto bg-cardcolor/20 backdrop-blur-lg rounded-3xl shadow-md p-8 flex flex-col items-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <h2 className="text-red text-4xl font-bold mb-4">
        {role}
      </h2>

      <div className="flex flex-col items-center">
        {values.map((value, index) => (
          <span key={index} className="text-white text-3xl font-bold mb-1">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;