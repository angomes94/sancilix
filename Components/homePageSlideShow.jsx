"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../lib/sanityClient";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideShow({ images }) {

  return (

    <>

      <Swiper
        style={{ "--swiper-navigation-color": "#000", "--swiper-pagination-color": "#000" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" min-h-fit"
      >
        {(images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img className=" object-contain w-full h-full" src={urlFor(image.asset).url()} />
          </SwiperSlide>
        )))}
      </Swiper>

    </>
  );
}