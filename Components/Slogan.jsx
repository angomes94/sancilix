"use client"
import React,{useContext} from 'react'
import { LanguageContext } from '@/app/Context/languangeContext'
import { play } from '@/lib/fonts';


export default function Slogan() {

    const {translations} = useContext(LanguageContext);

  return (
    
    <div className={`${play.className} text-blue-950 z-20 absolute top-24 md:top-56 left-5`} >
        <h1 className='pb-5 md:pb-10 text-2xl md:text-8xl  '>{translations.slogan1}</h1>
        <h1 className=' text-xl md:text-6xl'>{translations.slogan2}</h1>
    </div>

  )
}
