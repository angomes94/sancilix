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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { translations } = useContext(LanguageContext);



  return (
    <div className=" w-full h-full p-5 md:p-10">
      <Swiper
        style={{ "--swiper-navigation-color": "#172554", "--swiper-pagination-color": "#172554" }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full"
        
      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:p-20">
              <div className="w-1/2 h-full md:h-1/2 md:w-full md:m-2">
                <h1 className="font-semibold text-xl text-center pb-3 ">{translations.slideBefore}</h1>
                <img src={urlFor(pair.before).fit('crop').width(600).height(500).url()} className="w-full h-full object-contain" />
              </div>
              <div className="w-1/2 h-full md:h-1/2 md:w-full md:m-2">
                <h1 className="font-semibold text-xl text-center pb-3 ">{translations.slideAfter}</h1>
                <img src={urlFor(pair.after).fit('crop').width(600).height(500).url()} className="w-full h-full object-contain" />
              </div>
            </div>
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
       
      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide key={index} className="w-full h-full opacity-50">
            <img src={urlFor(pair.before).fit('crop').width(600).height(500).url()} className="w-full h-full object-cover hover:cursor-pointer hover:scale-95 duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
