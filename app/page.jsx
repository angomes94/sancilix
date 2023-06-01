import React from 'react';
import SlideShow from '@/Components/homePageSlideShow';
import GridThumbnail from '@/Components/gridThumbnail';
import AboutUs from '@/Components/Aboutus';
import Link from 'next/link';
import { getSlides, getProjects, getTeamPortraits } from '@/lib/fetching';
import Contacts from '@/Components/Contacts';
import Slogan from '@/Components/Slogan';




export default async function HomePage() {



  const images = await getSlides()
  const projects = await getProjects()
  const teamPortraits = await getTeamPortraits();




  return (
    <div className=' flex flex-col w-full justify-center items-center bg-slate-200'>
        <div className=' relative w-full'>
      <Slogan/>
      <div className=' flex  w-full opacity-75'>
        {images ? (<SlideShow images={images} />) :
          (<h1>there are no images</h1>)}
      </div>
      </div>
      <div id='aboutus' className=' flex flex-col justify-center items-center text-center'>
      <AboutUs teamPortraits={teamPortraits}/>
      </div>
      <div id='projects' className=' grid grid-cols-1 gap-10 m-10 sm:grid-cols-2 md:grid-cols-2 '>
        {projects && projects.map((p) => (
          <Link key={p._id} href={`/project/${p._id}`} className=' duration-300 hover:scale-110 cursor-pointer'>
            <GridThumbnail projectName={p.name} projectImages={p.images} projectDescription={p.description} />
          </Link>
        ))}
        {!projects && <h1>There are no projects</h1>}
      </div>
     
        <Contacts/>
      
    </div>
  )
}

