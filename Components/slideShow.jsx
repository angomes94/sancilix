"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../lib/sanityClient";
import { getSlides } from "@/lib/fetching";




import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideShow() {

  const [images, setImages] = useState(null)

  useEffect(() => {
    async function fetchSlides() {
      setImages(await getSlides());
    }
    fetchSlides();
  }, []);


  return (
    <>
      <Swiper
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
        className= " min-h-fit"
      >
        {(images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={urlFor(image.asset).url()} />
          </SwiperSlide>)))
        }
      </Swiper>
    </>
  );
}