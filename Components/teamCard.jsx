"use client";
import React, {useContext} from 'react'
import { LanguageContext } from '@/app/context/languangeContext';



export default function TeamCard({portraitUrl, team}) {

  const {translations} = useContext(LanguageContext);


  return (
    <div className=' flex flex-col items-center justify-center p-5 md:p-10 text-sm text-blue-950 '>
         <img className='  rounded-full' src={portraitUrl} alt="Portrait" />
        <h1 className=' font-bold  pt-5'>{team === "team1" ? translations.team1Title : translations.team2Title } <span className=' font-thin'>{team === "team1" ? translations.team1Span : translations.team2Span }</span></h1>
        <h1>{translations.contact}<span className=' font-thin'>{team === "team1" ? translations.team1Phone : translations.team2Phone} </span></h1>
      </div>
  )
}
