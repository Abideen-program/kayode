import React from "react";
import Header from "../Header/Header";
import { Manrope, Nunito } from "next/font/google";
import Image from "next/image";
import { iconImages } from "@/utils/image";

const manrope = Manrope({ subsets: ["latin"] });
const nun = Nunito({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-[#090909] w-full h-[700px] text-stone-100 border border-blue-800 bg-[url('../assets/icon/bggrid.svg')] bg-fixed bg-no-repeat bg-center bg-cover flex flex-col">
      <Header />

      <div className="border w-[650px] m-auto flex flex-col items-center">
        <h1 className={`${nun.className} text-[65px] font-bold`}>
          Man Like KayBams
        </h1>
        <h3 className="text-[#A192E4] text-[50px]">Product Designer</h3>
        <p className="text-sm text-center my-5">
          A digital product Designer with 4 years of experience working with
          startup founders and cross functional teams to help solve complex
          problems in a creative way.
        </p>

        <div className="bg-white px-6 py-4 rounded-[40px] flex items-center gap-[10px]">
          <Image src={iconImages.Mail} alt="mail" />
          <p className="text-[#090909] text-sm">Bamidelekay@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// bg-[url('/images/hero.jpg')]
