"use client";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "I create consistent and impactful branding solutions.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "I design clean, modern, and user-friendly websites.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "I develop fast, secure, and scalable web modern applications .",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Persuasive copy that helps your business grow and convert.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Basic SEO service to improve your website visibility and ranking .",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[340px] lg:h-[380px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="group bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.4)] 
                           rounded-2xl p-8 flex flex-col justify-between 
                          border border-white/10 hover:border-accent/30 
                          transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-3xl text-accent mb-5 transition-transform group-hover:scale-95 duration-500">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl  mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="mt-4">
              <RxArrowTopRight
                className="text-3xl text-white/60 group-hover:text-accent 
                           group-hover:rotate-45 transition-all duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
