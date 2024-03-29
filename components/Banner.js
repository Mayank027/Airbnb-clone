import React from "react";
import Image from "next/dist/client/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        priority="high"
        alt="Hero Image"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transiti duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
