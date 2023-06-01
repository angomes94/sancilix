"use client"
import React,{useContext} from 'react'
import { LanguageContext } from '@/app/context/languangeContext'
import { play } from '@/lib/fonts';
import { motion, spring} from "framer-motion";


export default function Slogan() {

    const {translations} = useContext(LanguageContext);

  return (
    
    <div className={`${play.className} text-blue-950 z-20 absolute top-24 md:top-56 left-5`} >
        <motion.h1 
        initial={{ x: "-100vw" }}
        animate={{ x:0 }}
        transition={{
          type: "spring",
          bounce: 0.25,
          stiffness: 50,
          delay: 0.5 }}
        className='text-2xl md:text-8xl bg-white bg-opacity-60 w-fit md:p-2 '>{translations.slogan1}</motion.h1>
        <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x:0 }}
        transition={{
          type: "spring",
          bounce: 0.25,
          stiffness: 50, 
          delay: 1 }}
         className='mt-5 text-xl md:text-6xl text-white bg-blue-950 bg-opacity-50 md:p-2'>{translations.slogan2}</motion.h1>
    </div>

  )
}
