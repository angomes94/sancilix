"use client"
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import GridThumbnail from './GridThumbnail'
import { LanguageContext } from '@/app/context/languangeContext'


export default function Projects({ projects, renovations }) {

  const [isProjectsTab, setIsProjectsTab] = useState(true)

  
  

  const { translations } = useContext(LanguageContext);

  return (
    <div id='projects' className='flex flex-col w-full'>
      <div className=' flex flex-row w-full justify-center items-center bg-blue-950 p-10'>
        <div className=' flex flex-row w-3/4 text-xs md:text-lg justify-center items-center'>
          <button className={`${isProjectsTab ? "bg-white text-blue-950" : "bg-blue-400  text-white"} w-32 md:w-60 rounded-l-3xl p-2 md:p-5 `} onClick={() => setIsProjectsTab(true)}>{translations.buttonProjects}</button>
          <button className={`${isProjectsTab ? "bg-blue-400  text-white" : "bg-white text-blue-950"} w-32 md:w-60 rounded-r-3xl p-2 md:p-5`} onClick={() => setIsProjectsTab(false)}>{translations.buttonRenovations}</button>
        </div>
      </div>
      {isProjectsTab ? 
      <div className=' grid grid-cols-1 gap-10 m-10 content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
        {projects && projects.map((p) => (
          <Link key={p._id} href={`/project/${p._id}`} className=' duration-300 hover:scale-110 hover:opacity-100 opacity-75 cursor-pointer'>
            <GridThumbnail projectName={p.name} projectImages={p.images} projectDescription={p.description} />
          </Link>
        ))}
        </div>

        :

        <div className=' grid grid-cols-1 gap-10 m-10 content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
        {renovations && renovations.map((p) => (
          <Link key={p._id} href={`/renovation/${p._id}`} className=' duration-300 hover:scale-110 hover:opacity-100 opacity-75 cursor-pointer'>
            <GridThumbnail projectName={p.name} projectImages={p.imagePairs.map(pair => pair.after)} projectDescription={p.description} />
          </Link>
        ))}
        </div>
      }
      </div>
  )
}
