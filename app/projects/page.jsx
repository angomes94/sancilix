"use client";

import React, {useContext, useEffect, useState} from 'react'
import { LanguageContext } from '../Context/languangeContext';
import { client } from '@/lib/sanityClient';
import GridTest from '@/Components/gridTest';


export default function Page() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const query = `*[_type == "project"]`;
        const result = await client.fetch(query);
        setProjects(result);
        console.log(result)
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);
  

  const {translations} = useContext(LanguageContext);

  return (

    <div className=' grid grid-cols-1 gap-4 mx-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
      {projects.map((p) =>(
      <div  key={p._id} className=' duration-300 hover:scale-110'>
    <GridTest projectName ={p.name} projectImages = {p.images} projectDescription = {p.description}/>
    </div>
      ))}
    </div>
  )
}
