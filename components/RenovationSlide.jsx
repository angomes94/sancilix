"use client";
import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { urlFor } from "@/lib/sanityClient";
import { getImageDimensions } from '@sanity/asset-utils'
import { LanguageContext } from "@/app/context/languangeContext";

export default function RenovationSlide({ imagePairs }) {

  const { translations } = useContext(LanguageContext);


  const isImageLandscape = (imageUrl) => {

    const { width, height } = getImageDimensions({ url: imageUrl });

    return width > height ? true : false;

  }



  return (
    <>
      <Swiper
        style={{ "--swiper-navigation-color": "#172554", "--swiper-pagination-color": "#172554" }}
        navigation={true}
        modules={[Navigation]}
        className=" w-full"
      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full flex justify-center items-center pb-10 p-2 md:px-20 ${isImageLandscape(urlFor(pair.before).url()) ? "flex-col" : "flex-row"}`}>
              <div className="  flex-1 justify-center items-center p-2 md:p-5 ">
                <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideBefore}</h1>
                <img src={urlFor(pair.before).fit('max').url()} alt="before" className=" rounded-xl object-contain" />
              </div>
              <div className=" flex-1 justify-center items-center p-2 md:p-5 ">
                <h1 className="font-semibold text-xl text-center pb-5 ">{translations.slideAfter}</h1>
                <img src={urlFor(pair.after).fit('max').url()} alt="after" className=" rounded-xl object-contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
