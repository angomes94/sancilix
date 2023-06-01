import ProjectSlide from "@/Components/projectSlide";
import { getProjects, getProjectById } from "@/lib/fetching";
import ProjectText from "@/Components/projectText";




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
      <div >
      <ProjectText  namePT={project[0].namePT} 
                    nameEN={project[0].nameEN} 
                    descriptionPT={project[0].descriptionPT} 
                    descriptionEN={project[0].descriptionEN}/>
      </div>
    </div>
  )
}
