"use client";
import React,{useContext} from 'react'
import { LanguageContext } from '@/app/context/languangeContext';

export default function ProjectText({namePT, nameEN, descriptionPT, descriptionEN}) {

    const {language} = useContext(LanguageContext);

  return (
    <div className=" flex flex-col justify-center items-center w-full h-1/4 p-10 bg-white rounded-3xl ">
        {language === "PT" ? 
        ( <div>
            <h1 className='py-5 text-2xl underline underline-offset-4' >{namePT}</h1>
            <p className=' font-extralight'>{descriptionPT}</p>
            </div>) : 
          (<div>
            <h1 className='py-5 text-2xl underline underline-offset-4'>{nameEN}</h1>
            <p className='font-extralight'>{descriptionEN}</p>
            </div>)}
        
    </div>
  )
}
