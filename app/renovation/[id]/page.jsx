import { getRenovations, getProjectById } from "@/lib/fetching";
import ProjectNav from "@/components/ProjectNav";
import ProjectTitle from "@/components/ProjectTitle";
import RenovationSlide from "@/components/RenovationSlide";



export async function generateStaticParams() {

    const projects = await getRenovations()


    return projects.map((project) => ({
        id: project._id,
    }));


}


export default async function Page({ params }) {

    const project = await getProjectById(params.id)


    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-200">
            <ProjectNav />
            <ProjectTitle namePT={project[0].namePT}  nameEN={project[0].nameEN}  />
            <RenovationSlide imagePairs={project[0].imagePairs} />
        </div>
    )
}
