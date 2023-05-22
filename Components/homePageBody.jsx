"use client";
import React, { useContext} from 'react';
import { LanguageContext } from '@/app/Context/languangeContext';

export default function HomePageBody() {

    const {translations} = useContext(LanguageContext);

  return (
    <div className=' text-blue-950 bg-white rounded-3xl p-5' >
    <h1 className='py-5 text-2xl underline underline-offset-4'>{translations.aboutUsTitle}</h1>
    <p className=' font-extralight'>{translations.aboutUsText}</p>
  </div>
  )
}
