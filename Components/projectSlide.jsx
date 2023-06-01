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
    <>
      <Swiper
        style={{ "--swiper-navigation-color": "#000000", "--swiper-pagination-color": "#000000" }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-96"
      >
        {images.map((image) => (
          <SwiperSlide key={image._key} className="text-center font-size-18 bg-white flex justify-center items-center">
            <img src={urlFor(image.asset).url()} className="w-full h-full object-contain" />
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
        className="w-full h-20 box-border p-10"
      >
        {images.map((image) => (
          <SwiperSlide key={image._key} className="w-1/4 h-full opacity-40">
            <img src={urlFor(image.asset).url()} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
