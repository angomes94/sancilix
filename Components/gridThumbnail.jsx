"use client";
import React from 'react'
import { urlFor } from '@/lib/sanityClient';
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from "swiper";


export default function GridThumbnail({ projectImages }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        style={{ "--swiper-navigation-color": "#000" }}
        className="flex justify-center items-center"
      >
        {projectImages.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">     
            <img src={urlFor(image.asset).fit("crop").width(800).height(500).url()} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
