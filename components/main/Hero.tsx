"use client"

import React, { useEffect } from "react";
import HeroContent from "../sub/HeroContent";
 

const Hero = () => {
  
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute sm:top-[-270px] max-sm:top-[-400px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"></source>
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;
