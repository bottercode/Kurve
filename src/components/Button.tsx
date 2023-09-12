"use client";
import React, { useState } from "react";

function Button() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={`border-pink-500 border mt-10 ml-10 w-28 h-8 shadow-[5px_5px_0px_0px_rgba(109,40,217)]  transform ${
        isClicked ? "scale-95" : "scale-100"
      } transition-transform duration-150 ease-in-out`}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <p className="pl-5 pt-2 text-xs">SHOP NOW</p>
    </div>
  );
}

export default Button;
