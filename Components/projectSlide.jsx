"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../app/styles.css";


import { FreeMode, Navigation, Thumbs } from "swiper";
import { urlFor } from "@/lib/sanityClient";


export default function ProjectSlide({ images }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    console.log(images[0]._key)
  }, [])


  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image._key}>
              <img src={urlFor(image.asset).url()} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image._key}>
              <img src={urlFor(image.asset).url()} />
            </SwiperSlide>
          );
        })}

      </Swiper>
    </>
  );
}
