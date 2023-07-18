"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { urlFor } from "@/lib/sanityClient";

export default function ProjectSlide({ images }) {
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
        className="w-full h-96 md:h-full mb-5"
      >
        {images.map((image) => (
          <SwiperSlide key={image._key} >
            <img src={urlFor(image.asset).fit('clip').width(2000).height(1000).url()} className="w-full h-full object-contain md:p-20 " />
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
          <SwiperSlide key={image._key} className="w-full h-full hover:transition-opacity ease-out duration-1000 opacity-50 hover:opacity-100">
            <img src={urlFor(image.asset).fit('clip').width(700).height(500).url()} className="w-full h-full object-cover hover:cursor-pointer hover:scale-95 duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
