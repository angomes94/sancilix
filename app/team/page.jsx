import { getTeamPortraits } from '@/lib/fetching';
import TeamCard from '@/Components/teamCard';
import { urlFor } from '@/lib/sanityClient';

export default async function Page() {
  const teamPortraits = await getTeamPortraits();
  const team1 = "team1";
  const team2 = "team2";

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <TeamCard portraitUrl={urlFor(teamPortraits.member1.asset).width(200).height(200).url()} team={team1} />
      <TeamCard portraitUrl={urlFor(teamPortraits.member2.asset).width(200).height(200).url()} team={team2} />
    </div>
  );
}

