import React from 'react';
import SlideShow from '@/components/HomePageSlideShow';
import AboutUs from '@/components/AboutUs';
import { getSlides, getProjects, getTeamPortraits, getRenovations } from '@/lib/fetching';
import Contacts from '@/components/Contacts';
import Slogan from '@/components/Slogan';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Team from '@/components/Team';






export default async function HomePage() {



  const images = await getSlides()
  const projects = await getProjects()
  const renovations = await getRenovations()
  const teamPortraits = await getTeamPortraits()


  


  return (
    <div className=' flex flex-col w-full justify-center items-center bg-slate-200'>
      <Navbar/>
      <div className=' relative w-full'>
        <Slogan />
        <div className=' flex  w-full '>
          {images ? (<SlideShow images={images} />) :
            (<h1>there are no images</h1>)}
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center text-center'>
        <AboutUs teamPortraits={teamPortraits} />
      </div>
      <Team teamPortraits={teamPortraits}/>
      <Projects projects={projects} renovations={renovations}/>
      <Contacts />
    </div>
  )
}

