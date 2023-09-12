import React from "react";
import chair from "../assets/suchit-poojari-ljRiZl00n18-unsplash.jpg";
import Image from "next/image";
import Button from "./Button";
const LandingPage = () => {
  return (
    <div>
      <div className="p-10  text-2xl mt-16 font-bold">
        <p>about</p>
        <p>product</p>
        <p>shop</p>
        <p>store</p>
      </div>
      <h2 className="ml-10 mt-24 text-5xl">Newmanaly</h2>
      <h2 className="ml-10 text-5xl"> Beautica </h2>
      <Button />

      <div className="ml-10 mt-24 bg-[#83a9ac]">
        <h1>STAY IN THE LOOP</h1>
        <p>if you wish to receive daily updates.</p>
        <input />
      </div>
      <h1 className="text-black text-9xl font-sans max-sm:text-5xl max-sm:left-[30%] absolute left-[41%] top-5 z-10">
        KURVE
      </h1>
      <Image
        src={chair}
        alt="chair"
        quality={100}
        width={1100}
        height={1100}
        className="absolute bottom-2 left-[35%] max-sm:left-[15%] max-sm:w-[150%] max-sm:h-[150%]"
      />
      <p className="-rotate-90 absolute left-[39%] top-1/2 font-bold">
        the collection
      </p>
    </div>
  );
};

export default LandingPage;
