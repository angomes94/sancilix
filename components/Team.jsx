import React from 'react'
import TeamCard from '@/components/TeamCard';
import { urlFor } from '@/lib/sanityClient';

export default function Team({teamPortraits}) {

  return (
    <div className=' w-full flex flex-row justify-center items-center p-5 '>
      <TeamCard portraitUrl={urlFor(teamPortraits.member1.asset).width(200).height(200).url()} team={"team1"} />
      <TeamCard portraitUrl={urlFor(teamPortraits.member2.asset).width(200).height(200).url()} team={"team2"} />
      </div>
  )
}
