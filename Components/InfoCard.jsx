"use client"
import React from 'react'

export default function InfoCard({title, text}) {


  return (
    <div className=' flex flex-col text-white bg-blue-400 m-5 p-5 md:h-60 md:w-60 rounded-3xl'>
        <h1 className=' font-extrabold text-2xl pb-5'>{title}</h1>
        <p className=' font-thin'>{text}</p>
    </div>
  )
}
