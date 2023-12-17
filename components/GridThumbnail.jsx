"use client";
import React from 'react'
import { urlFor } from '@/lib/sanityClient';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';


import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


import {Autoplay, EffectCube, Pagination } from "swiper";

export default function GridThumbnail({projectName , projectImages}) {
  return (
    <div>
      <Swiper
        effect={"cube"}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectCube, Pagination]}
      >
        {projectImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Image  
          src={urlFor(image.asset).fit("crop").width(800).height(500).url()} 
          width={800}
          height={500}
          alt={index} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}
