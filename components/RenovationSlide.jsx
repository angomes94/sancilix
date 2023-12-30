"use client";
import React, { useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { urlFor } from "@/lib/sanityClient";
import { LanguageContext } from "@/app/context/languangeContext";

export default function RenovationSlide({ imagePairs }) {



  const { translations } = useContext(LanguageContext);



  return (

      <Swiper
        style={{ "--swiper-navigation-color": "#172554", "--swiper-pagination-color": "#172554" }}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-screen "
      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen flex flex-col justify-center items-center pb-10 md:px-20">
              <div className="w-full h-1/2 p-2 md:p-10">
                <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideBefore}</h1>
                <img src={urlFor(pair.before).fit('clip').url()} className="w-full h-full object-contain" />
              </div>
              <div className="w-full h-1/2 p-2 md:p-10">
                <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideAfter}</h1>
                <img src={urlFor(pair.after).fit('clip').url()} className="w-full h-full object-contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
