"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {client, urlFor} from "../lib/sanityClient"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideShow() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "slider"][0].slides[].image`;
        const result = await client.fetch(query);
        setImages(result);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
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
        className=" h-full"
      >
        {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={urlFor(image.asset).url()} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}