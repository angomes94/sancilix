import ProjectSlide from "@/Components/projectSlide";
import { getProjects, getProjectById } from "@/lib/fetching";




export async function generateStaticParams() {

  const projects = await getProjects()

  return projects.map((project) => ({
    id: project._id,
  }));
}


export default async function Page({params}) {

const project = await getProjectById(params.id)


  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      
      <div className=" w-full h-3/4 p-10">
      <ProjectSlide images={project[0].images}/>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-1/4 p-10 ">
      <h1 className="pb-5">{project[0].name}</h1>
      <p>{project[0].description}</p>
      </div>
    </div>
  )
}
