"use client";
import React,{useContext} from 'react'
import { LanguageContext } from '@/app/Context/languangeContext';

export default function ProjectText({namePT, nameEN,descriptionPT, descriptionEN}) {

    const {language} = useContext(LanguageContext);

  return (
    <div>
        {language === "PT" ? 
        ( <><h1 className='py-5 text-2xl underline underline-offset-4' >{namePT}</h1><p className=' font-extralight'>{descriptionPT}</p></>) : 
          (<><h1 className='py-5 text-2xl underline underline-offset-4'>{nameEN}</h1><p className='font-extralight'>{descriptionEN}</p></>)}
        
    </div>
  )
}
