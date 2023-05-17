"use client";
import React, {useContext} from 'react'
import { LanguageContext } from '@/app/Context/languangeContext';



export default function TeamCard({portraitUrl}) {

  const {translations} = useContext(LanguageContext);


  return (
    <div className=' flex flex-col items-center justify-center p-5 bg-slate-200 rounded-3xl m-10'>
         <img className=' rounded-full' src={portraitUrl} alt="Portrait" />
        <h1 className=' font-bold text-lg pt-5'>{translations.team1Title} <span className=' font-thin'>{translations.team1Span}</span></h1>
        <p className='p-5'>{translations.team1Text}</p>
        <h1>{translations.contact}<span className=' font-thin'>{translations.team1Phone} </span></h1>
      </div>
  )
}
