import { getProjects } from '@/lib/fetching';
import GridThumbnail from '@/Components/gridThumbnail';
import Link from 'next/link';


export default async function Page() {

const projects = await getProjects()

  return (

    <div className=' grid grid-cols-1 gap-10 m-10 sm:grid-cols-2 md:grid-cols-2 '>
      {projects && projects.map((p) => (
        <Link key={p._id} href={`/project/${p._id}`} className=' duration-300 hover:scale-110 cursor-pointer'>
          <GridThumbnail projectName={p.name} projectImages={p.images} projectDescription={p.description} />
        </Link>
      ))}
      {!projects &&  <h1>There are no projects</h1>}
    </div>
  )
}
