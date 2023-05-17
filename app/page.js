"use client";

import React, { useContext, useEffect, useState} from 'react';
import { LanguageContext } from '@/app/Context/languangeContext';
import SlideShow from '@/Components/slideShow';



export default function HomePage() {


  const {translations} = useContext(LanguageContext);

  return (
  <div className=' flex flex-col w-full justify-center items-center'>
  <div className=' w-full '>
    
   <SlideShow/>
    
  </div>
  <div className=' flex flex-col justify-center items-center p-5'>
    <h1 className='py-5'>{translations.aboutUsTitle}</h1>
    <p>{translations.aboutUsText}</p>
  </div>
</div>
  )}

