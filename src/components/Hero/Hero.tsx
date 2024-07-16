"use client";

import React from "react";
import Header from "../Header/Header";
import { Manrope, Nunito } from "next/font/google";
import Image from "next/image";
import { iconImages } from "@/utils/image";
import Link from "next/link";
import { motion } from "framer-motion";

const manrope = Manrope({ subsets: ["latin"] });
const nun = Nunito({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="bg-[#090909] w-full h-screen text-stone-100 bg-[url('../assets/icon/bggrid.svg')] bg-fixed bg-no-repeat bg-center bg-cover flex flex-col">
      <Header />

      <div className="w-[650px] 3xl:w-[900px] m-auto flex flex-col items-center ">
        <motion.h1
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
          className={`${nun.className} text-[60px] 3xl:text-[80px] font-bold`}
        >
          Man Like KayBams
        </motion.h1>
        <motion.h3
          initial={{ scale: 0, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="text-[#A192E4] text-[45px] 3xl:[]"
        >
          Product (UI / UX) Designer
        </motion.h3>
        <motion.p
          initial={{ scale: 0, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="text-sm 3xl:text-2xl text-center my-5"
        >
          A digital product Designer with 4 years of experience working with
          startup founders and cross functional teams to help solve complex
          problems in a creative way.
        </motion.p>

        <Link href={"mailto:Bamidelekay@gmail.com"}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1.3, ease: "anticipate" }}
            whileTap={{ scale: 0.5 }}
            className="bg-white px-6 py-4 rounded-[40px] flex items-center gap-[10px] cursor-pointer"
          >
            <Image src={iconImages.Mail} alt="mail" className="3xl:w-10" />
            <p className="text-[#090909] text-sm 3xl:text-2xl">
              Bamidelekay@gmail.com
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

// bg-[url('/images/hero.jpg')]
