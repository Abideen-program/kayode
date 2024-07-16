"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import { iconImages } from "@/utils/image";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <div className="bg-[#090909]">
      <div className="h-full">
        <div className="flex items-center justify-between px-[120px]">
          <h3 className="text-white font-bold text-2xl">Selected Works👨🏽‍💻</h3>
          <Image alt="arrow down" src={iconImages.ArrowDown} className="w-5" />
        </div>

        <div className="ml-[120px] my-5">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="flex flex-col">
              <WorkItem
                image={iconImages.Cloud}
                title={"Cloud Clinic"}
                backgroundColor="bg-white"
                bgImage={"bg-[url('../assets/icon/cloudbg.svg')]"}
              />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col">
              <WorkItem
                image={iconImages.Dashboard}
                title={"HealthBuro"}
                backgroundColor="bg-gradient-to-b from-purple-700 to-gray-600"
              />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col">
              <WorkItem
                image={iconImages.Shadow}
                title={"Shadowchat"}
                backgroundColor="bg-[#F3E8FE]"
              />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col">
              <WorkItem
                image={iconImages.Phones}
                title={"Shadowchat"}
                backgroundColor="bg-[#795DE0]"
                size="w-[70%]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Works;
