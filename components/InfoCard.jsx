"use client"
import React from 'react'

export default function InfoCard({title, text}) {


  return (
    <div className=' flex flex-col text-white bg-blue-950 m-10 p-5 h-44 md:h-60 md:w-60 rounded-3xl'>
        <h1 className=' font-extrabold text-lg md:text-2xl pb-5'>{title}</h1>
        <p className=' font-thin text-xs md:text-lg'>{text}</p>
    </div>
  )
}
