"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { urlFor } from "@/lib/sanityClient";

export default function RenovationSlide({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);



  return (
    <div className=" w-full h-full p-5 md:p-10">
      <Swiper
        style={{ "--swiper-navigation-color": "#000000", "--swiper-pagination-color": "#000000" }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full"
        
      >
        {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className=" w-full h-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-1/2 h-full  md:h-1/2 md:w-full">
          <h1 className=" text-center ">Antes</h1>
          <img src={urlFor(image.asset).url()} className="w-full h-full object-contain" />
        </div>
        <div className="w-1/2 h-full md:h-1/2 md:w-full">
          <h1 className=" text-center ">Depois</h1>
        <img src={urlFor(image.asset).url()} className="w-full h-full object-contain" />
        </div>
      </div>
    </SwiperSlide>
  ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
       
      >
        {images.map((image) => (
          <SwiperSlide key={image._key} className="w-full h-full opacity-50">
            <img src={urlFor(image.asset).url()} className="w-full h-full object-cover hover:cursor-pointer hover:scale-95 duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
