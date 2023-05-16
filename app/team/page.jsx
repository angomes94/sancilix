"use client";
import React, {useContext, useEffect, useState} from 'react'
import { LanguageContext } from '../Context/languangeContext'
import { client, urlFor } from '@/lib/sanityClient';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";



export default function Page() {

    const [teamPortraits, setTeamPortraits] = useState(null);
  
    useEffect(() => {
      const fetchTeamData = async () => {
        try {
          const query = `*[_type == "team"][0] {
            member1,
            member2
          }`;
          const result = await client.fetch(query);
          setTeamPortraits(result);
          console.log(result)
        } catch (error) {
          console.error("Error fetching team data:", error);
        }
      };
  
      fetchTeamData();
    }, []);

  const {translations} = useContext(LanguageContext);

  return (

    <div className=' flex flex-col justify-center items-center w-full'>
      <div className=' flex flex-col items-center justify-center p-5 bg-slate-200 rounded-3xl m-10'>
        {!teamPortraits ? (<FontAwesomeIcon className=' animate-spin' icon={faSpinner} />):
         (<img className=' rounded-full' src={urlFor(teamPortraits.member1.asset).width(200).height(200).url()} alt="Member 1" />)}
        <h1 className=' font-bold text-lg pt-5'>{translations.team1Title} <span className=' font-thin'>{translations.team1Span}</span></h1>
        <p className='p-5'>{translations.team1Text}</p>
        <h1>{translations.contact}<span className=' font-thin'>{translations.team1Phone} </span></h1>
      </div>
      <div className=' flex flex-col items-center justify-center p-5 bg-slate-200 rounded-3xl m-10'>
      {!teamPortraits ? (<FontAwesomeIcon className=' animate-spin' icon={faSpinner} />):
         (<img className=' rounded-full ' src={urlFor(teamPortraits.member2.asset).width(200).height(200).url()} alt="Member 2" />)}
        <h1>{translations.team2Title}  <span className=' font-thin'>{translations.team2Span}</span></h1>
        <p className='p-5'>{translations.team2Text}</p>
        <h1>{translations.contact}<span className=' font-thin'>{translations.team2Phone} </span></h1>
      </div>
    </div>
  )
}
