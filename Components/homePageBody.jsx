"use client";
import React, { useContext} from 'react';
import { LanguageContext } from '@/app/Context/languangeContext';

export default function HomePageBody() {

    const {translations} = useContext(LanguageContext);

  return (
    <div className=' text-blue-950 p-5 rounded-2xl' >
    <h1 className='py-5 text-2xl'>{translations.aboutUsTitle}</h1>
    <p className=' font-extralight'>{translations.aboutUsText}</p>
  </div>
  )
}
