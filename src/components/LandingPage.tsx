import React from "react";
import chair from "../assets/chair.png";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
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
      <div className="absolute right-[5%] top-10 z-20 font-sans">
        <p>Designed by</p>
        <p className="font-bold">devansh.</p>
      </div>
      <div className="absolute right-[6%] bottom-[10%]">
        <Github className="mb-5" />
        <Twitter />
      </div>

      <div className="ml-10 mt-64 bg-[#83a9ac] font-sans">
        <h1>STAY IN THE LOOP</h1>
        <p>Receive monthly updates about the product and other invites.</p>
        <div className="flex mt-5 font-sans">
          <input
            placeholder="Enter email address"
            className="bg-transparent text-black placeholder:text-black  outline-none "
          />
          <ArrowRight className="ml-6" />
        </div>
        <hr className="text-black mt-2 w-[12%]" />
      </div>

      <h1 className="text-black text-[200px] tracking-widest font-sans max-sm:text-5xl max-sm:left-[30%] absolute left-[40%] bottom-[75%]">
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
      <p className="absolute left-[38%] bottom-[10%] w-32 font-sans">
        Shop now to see the full collection
      </p>
    </div>
  );
};

export default LandingPage;
