import React from 'react'
import { client } from '@/lib/sanityClient';



export default async function Page({params}) {


  const query = `*[_type == "project" && _id == "${params.id}"]`;

  const project = await client.fetch(query , { cache: 'force-cache' });
  
  console.log(query);
  console.log(project)

  return (
    <div>
      <h1> Dummy static text</h1>
      <h1>{project[0].name}</h1>
      <p>{project[0].description}</p>
    </div>
  )
}
