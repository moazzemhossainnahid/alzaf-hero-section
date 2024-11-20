import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] 2xl:h-[50vh] overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute bottom-3 w-full flex justify-center">
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
