"use client";
import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { urlFor } from "@/lib/sanityClient";
import { LanguageContext } from "@/app/context/languangeContext";

export default function RenovationSlide({ imagePairs }) {


  const { translations } = useContext(LanguageContext);



  return (
    <div className=" w-full h-screen md:p-10">
      <Swiper
        style={{ "--swiper-navigation-color": "#172554", "--swiper-pagination-color": "#172554" }}
        loop={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="w-full h-full "

      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full ">
              <div className="w-full h-full flex flex-col md:px-20">
                <div className="w-full h-1/2 p-2 md:p-10">
                  <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideBefore}</h1>
                  <img src={urlFor(pair.before).fit('clip').width(2000).height(1000).url()} className="w-full h-full object-contain cursor-zoom-in duration-300 hover:scale-150" />
                </div>
                <div className="w-full h-1/2 p-2 md:p-10">
                  <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideAfter}</h1>
                  <img src={urlFor(pair.after).fit('clip').width(2000).height(1000).url()} className="w-full h-full object-contain cursor-zoom-in duration-300 hover:scale-150" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
