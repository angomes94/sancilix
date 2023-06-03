import ProjectSlide from "@/components/ProjectSlide";
import { getAllProjects, getProjectById} from "@/lib/fetching";
import ProjectText from "@/components/ProjectText";
import ProjectNav from "@/components/ProjectNav";






export async function generateStaticParams() {

  const projects = await getAllProjects()

  
  return projects.map((project) => ({
    id: project._id,
  }));

  
}


export default async function Page({params}) {

const project = await getProjectById(params.id)


  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-200">
      <ProjectNav/>
      <div className=" w-full h-3/4 p-10 mt-10">
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
