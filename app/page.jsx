import React from 'react';
import SlideShow from '@/Components/homePageSlideShow';
import HomePageBody from '@/Components/homePageBody';
import { getSlides } from '@/lib/fetching';



export default async function HomePage() {



  const images = await getSlides()


  return (
    <div className=' flex flex-col w-full justify-center items-center h-screen'>
      <div className=' flex h-1/2 w-full'>
        <SlideShow images={images} />
      </div>
      <div className=' flex h-1/2 flex-col justify-center items-center text-center p-5'>
        <HomePageBody />
      </div>
    </div>
  )
}

