import { getProjects, getProjectById } from "@/lib/fetching";


export async function generateStaticParams() {

  const projects = await getProjects()

  return projects.map((project) => ({
    id: project._id,
  }));
}


export default async function Page({params}) {

const project = await getProjectById(params.id)

  console.log(project)

  return (
    <div>
      <h1> Dummy static text</h1>
      <h1>{project[0].name}</h1>
      <p>{project[0].description}</p>
    </div>
  )
}
