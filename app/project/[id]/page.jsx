import ProjectSlide from "@/components/ProjectSlide";
import { getProjects, getProjectById} from "@/lib/fetching";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectNav from "@/components/ProjectNav";






export async function generateStaticParams() {

  const projects = await getProjects()

  
  return projects.map((project) => ({
    id: project._id,
  }));

  
}
 

export default async function Page({params}) {

const project = await getProjectById(params.id)


  return (
    <div className="flex flex-col w-full min-h-screen ">
      <ProjectNav/>
      <ProjectTitle namePT={project[0].namePT}  nameEN={project[0].nameEN}  />
      <ProjectSlide images={project[0].images}/>
    </div>
  )
}
