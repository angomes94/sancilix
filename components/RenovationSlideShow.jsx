"use client";
import React, { useState, useContext } from "react";
import { motion } from 'framer-motion';
import { urlFor } from "@/lib/sanityClient";
import { getImageDimensions } from '@sanity/asset-utils';
import { LanguageContext } from "@/app/context/languangeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function RenovationSlideShow({ imagePairs }) {
    const { translations } = useContext(LanguageContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const isImageLandscape = (imageUrl) => {
        const { width, height } = getImageDimensions({ url: imageUrl });
        return width > height;
    };


    return (
        <div className=" w-full flex flex-col justify-center items-center  ">
            <div className="w-full flex flex-row ">
            <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + imagePairs.length) % imagePairs.length)} className=" bg-slate-200 opacity-50  text-4xl px-4 py-2 ml-4 rounded-lg transition duration-300 active:scale-95 hover:opacity-100 ">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="flex flex-1"></div>
            <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % imagePairs.length)} className=" bg-slate-200 opacity-50 text-4xl px-4 py-2 mr-4 rounded-lg transition duration-300 active:scale-95 hover:opacity-100 ">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            </div>
            <div className="w-full h-full relative ">
                {imagePairs.map((pair, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: index === currentSlide ? 1 : 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute w-full flex justify-center items-center pb-10 p-2 md:px-20 ${isImageLandscape(urlFor(pair.before).url()) ? "flex-col" : "flex-row"}`}
                    >

                        <div className="flex flex-col justify-center items-center p-2 md:p-5">
                            <h1 className="font-semibold text-xl text-center pb-5">{translations.slideBefore}</h1>
                            <img
                                src={urlFor(pair.before).url()}
                                alt="before"
                                className={`rounded-xl object-contain ${isImageLandscape(urlFor(pair.before).url()) ? "max-w-full h-auto md:max-w-[600px] lg:max-w-[800px]" : "flex-1  md:max-h-[600px] lg:max-h-[800px]"}`}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 md:p-5">
                            <h1 className="font-semibold text-xl text-center pb-5">{translations.slideAfter}</h1>
                            <img
                                src={urlFor(pair.after).url()}
                                alt="after"
                                className={`rounded-xl object-contain  ${isImageLandscape(urlFor(pair.before).url()) ? "max-w-full h-auto md:max-w-[600px] lg:max-w-[800px]" : " flex-1  md:max-h-[600px] lg:max-h-[800px]"}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
            
        </div>

    );
}


