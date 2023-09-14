"use client";
import React, { useState } from "react";

function Button() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsLoading(true);

    // Simulate a loading delay (you can replace this with actual data loading)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <button
        className={`border-pink-500 border mt-10 ml-10 w-28 h-8 shadow-[5px_5px_0px_0px_rgba(109,40,217)]  transform ${
          isClicked ? "scale-95" : "scale-100"
        } transition-transform duration-150 ease-in-out`}
        onClick={isLoading ? undefined : handleClick}
        onMouseLeave={handleMouseLeave}
        disabled={isLoading}
      >
        <p className="p-2 text-xs">SHOP NOW</p>
      </button>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-70 z-50 transition-opacity duration-1000">
          <p className="text-black text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Button;
