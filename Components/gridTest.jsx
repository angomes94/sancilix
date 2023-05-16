"use client";
import React from 'react'
import { client, urlFor } from '@/lib/sanityClient';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


import { EffectCube, Pagination } from "swiper";

export default function GridTest({projectName , projectImages, projectDescription}) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {projectImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={urlFor(image.asset).url()} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  )
}
