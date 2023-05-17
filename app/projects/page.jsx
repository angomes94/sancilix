import { getProjects } from '@/lib/fetching';
import GridTest from '@/Components/gridThumbnail';
import Link from 'next/link';


export default async function Page() {

const projects = await getProjects()

  return (

    <div className=' grid grid-cols-1 gap-10 m-10 sm:grid-cols-2 md:grid-cols-2 '>
      {projects.map((p) => (
        <Link key={p._id} href={`/project/${p._id}`} className=' duration-300 hover:scale-110 cursor-pointer'>
          <GridTest projectName={p.name} projectImages={p.images} projectDescription={p.description} />
        </Link>
      ))}
    </div>
  )
}
