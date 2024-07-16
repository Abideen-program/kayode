import { iconImages } from "@/utils/image";
import Image from "next/image";
import React from "react";

const WorkItem = ({
  image,
  title,
  backgroundColor,
  bgImage,
  size,
}: WorkItem) => {
  return (
    <>
      <div
        className={`h-[500px] px-6 flex items-center justify-center ${bgImage} bg-fixed bg-no-repeat bg-right ${backgroundColor}`}
      >
        <Image
          alt="images"
          src={image}
          className={`${size ? size : "w-full"}  m-auto`}
        />
      </div>

      <div className="text-white flex items-center justify-between my-5">
        <h3 className="font-medium">{title}</h3>

        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-sm font-light">View project</p>
          <div className="bg-[#A192E4] h-8 w-8 rounded-full flex flex-col items-center justify-center">
            <Image alt="arrow-right" src={iconImages.ArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;

// style={{ background: 'linear-gradient(to bottom, #702EFF, #8F9299)' }}
