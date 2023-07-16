"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../lib/sanityClient";
import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/pagination";




import { Autoplay, Pagination } from "swiper";

export default function SlideShow({ images }) {



  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} className="w-full h-full">
      <Swiper
        style={{ "--swiper-pagination-color": "#000" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className=" min-h-fit"
      >
        {(images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img className=" object-contain w-full h-full" src={urlFor(image.asset).fit('crop').width(1000).height(500).url()} />
          </SwiperSlide>
        )))}
      </Swiper>
    </motion.div>
  );
}