import Image from "next/image";
import { imagesIcons } from "@/utils/image";

const Header = () => {
  return (
    <div className="border border-red-500 py-4 px-[120px] flex items-center justify-between">
      <div>
        <Image src={imagesIcons.Logo} alt="Logo" className="w-44" />
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
      <Image src={imagesIcons.Hambuger} alt="Logo" className="cursor-pointer" />
    </div>
  );
};

export default Header;
