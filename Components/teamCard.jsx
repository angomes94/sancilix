"use client";
import React, {useContext} from 'react'
import { LanguageContext } from '@/app/Context/languangeContext';



export default function TeamCard({portraitUrl, team}) {

  const {translations} = useContext(LanguageContext);


  return (
    <div className=' flex flex-col items-center justify-center p-5 bg-slate-200 rounded-3xl m-10'>
         <img className=' rounded-full' src={portraitUrl} alt="Portrait" />
        <h1 className=' font-bold text-lg pt-5'>{team === "team1" ? translations.team1Title : translations.team2Title } <span className=' font-thin'>{team === "team1" ? translations.team1Span : translations.team2Span }</span></h1>
        <p className='p-5'>{team === "team1" ? translations.team1Text : translations.team2Text}</p>
        <h1>{translations.contact}<span className=' font-thin'>{team === "team1" ? translations.team1Phone : translations.team2Phone} </span></h1>
      </div>
  )
}
