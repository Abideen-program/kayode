"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { iconImages } from "@/utils/image";

const Header = () => {
  const TOP_OFFSET = 60;

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-4 px-[120px] flex items-center justify-between fixed w-full right-0 left-0 top-0 z-[1000] ${
        showBackground ? "bg-zinc-900 bg-opacity-90" : ""
      }`}
    >
      <div>
        <Image src={iconImages.Logo} alt="Logo" className="w-44" />
      </div>
      <div className="flex items-center gap-5 justify-between text-sm">
        <div className="flex items-center gap-2 border border-[#55DB62] px-4 py-2 rounded-[40px]">
          <div className="h-3 w-3 bg-[#31f945] transition duration-1000 rounded-full animate-pulse flex items-center justify-center">
            <div className="h-2 w-2 bg-[#55DB62] rounded-full animate-pulse"></div>
          </div>
          <p className="text-[#55DB62]">Available for work</p>
        </div>
        <p>Designer based in Lagos, Nigeria</p>
      </div>
      <Image src={iconImages.Hambuger} alt="Logo" className="cursor-pointer" />
    </div>
  );
};

export default Header;
