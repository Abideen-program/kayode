import React from "react";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="bg-[#090909] w-full h-[700px] text-stone-100 border border-blue-800 bg-[url('../assets/icon/bggrid.svg')] bg-fixed bg-no-repeat bg-center bg-cover">
      <Header />
      Hero
    </div>
  );
};

export default Hero;

// bg-[url('/images/hero.jpg')]
