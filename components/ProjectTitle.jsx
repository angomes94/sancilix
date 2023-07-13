"use client";
import React,{useContext} from 'react'
import { LanguageContext } from '@/app/context/languangeContext';

export default function ProjectTitle({namePT, nameEN}) {

    const {language} = useContext(LanguageContext);

  return (
    <div className=" flex flex-col justify-center items-center w-full ">
        {language === "PT" ? 
        ( <div>
            <h1 className='py-5 text-2xl underline underline-offset-8 ' >{namePT}</h1>
            </div>) : 
          (<div>
            <h1 className='py-5 text-2xl underline underline-offset-8'>{nameEN}</h1>
            </div>)}
        
    </div>
  )
}
