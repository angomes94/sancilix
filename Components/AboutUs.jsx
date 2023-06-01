"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/Context/languangeContext';
import TeamCard from './teamCard';
import { urlFor } from '@/lib/sanityClient';

export default function AboutUs({teamPortraits}) {


    const { translations } = useContext(LanguageContext);

    const team1 = "team1";
    const team2 = "team2";

    return (
        <div className=' flex flex-col justify-center items-center bg-white text-blue-950 p-10 m-20' >
            <div className='flex flex-1 flex-col '>
                <h1 className='py-5 text-2xl underline underline-offset-4'>{translations.aboutUsTitle}</h1>
                <p className=' font-extralight text-lg'>{translations.aboutUsText}</p>
            </div>
            <div className=' flex flex-1 flex-row '>
                <TeamCard portraitUrl={urlFor(teamPortraits.member1.asset).width(200).height(200).url()} team={team1} />
                <TeamCard portraitUrl={urlFor(teamPortraits.member2.asset).width(200).height(200).url()} team={team2} />
            </div>
        </div>
    )
}
