import React from 'react';
import SlideShow from '@/components/HomePageSlideShow';
import GridThumbnail from '@/components/GridThumbnail';
import AboutUs from '@/components/AboutUs';
import Link from 'next/link';
import { getSlides, getProjects, getTeamPortraits } from '@/lib/fetching';
import Contacts from '@/components/Contacts';
import Slogan from '@/components/Slogan';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import { urlFor } from '@/lib/sanityClient';






export default async function HomePage() {



  const images = await getSlides()
  const projects = await getProjects()
  const teamPortraits = await getTeamPortraits();




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
      <div id='aboutus' className=' flex flex-col justify-center items-center text-center'>
        <AboutUs teamPortraits={teamPortraits} />
      </div>
      <div className=' w-full flex flex-row justify-center items-center p-5 '>
      <TeamCard portraitUrl={urlFor(teamPortraits.member1.asset).width(200).height(200).url()} team={"team1"} />
      <TeamCard portraitUrl={urlFor(teamPortraits.member2.asset).width(200).height(200).url()} team={"team2"} />
      </div>
      <div id='projects' className=' grid grid-cols-1 gap-10 m-10 sm:grid-cols-2 md:grid-cols-2 '>
        {projects && projects.map((p) => (
          <Link key={p._id} href={`/project/${p._id}`} className=' duration-300 hover:scale-110 hover:opacity-100 opacity-75 cursor-pointer'>
            <GridThumbnail projectName={p.name} projectImages={p.images} projectDescription={p.description} />
          </Link>
        ))}
        {!projects && <h1>There are no projects</h1>}
      </div>
      <Contacts />
    </div>
  )
}

