import { client } from "./sanityClient";

export const getSlides = async () => {

    const query = `*[_type == "slider"][0].slides[].image`;
    const res = await client.fetch(query, {next: {revalidate: 60}});

    if (!res) throw new Error("Failed to fetch slides")

    return res

}

export const getProjects = async () => {

    const query = `*[_type == "project"]`;
    const res = await client.fetch(query, {next: {revalidate: 60}});

    if (!res) throw new Error("Failed to fetch projects")

    return res

}

export const getRenovations = async () => {

    const query = `*[_type == "renovation"]`;
    const res = await client.fetch(query, {next: {revalidate: 60}});

    if (!res) throw new Error("Failed to fetch projects")

    return res

}

export const getAllProjects = async () => {
    const query = `*[_type == "project" || _type == "renovation"]`;
    const res = await client.fetch(query, { next: { revalidate: 60 } });
  
    if (!res) throw new Error("Failed to fetch projects");
  
    return res;
  };
  

export const getTeamPortraits = async () => {

    const query = `*[_type == "team"][0] {member1, member2 }`;
    const res = await client.fetch(query, {next: {revalidate: 60}});
    
    if (!res) throw new Error("Failed to fetch projects")

    return res

}


export const getProjectById = async (id) => {
    
    const query = `*[(_type == "project" || _type == "renovation") && _id == "${id}"]`;
    const res = await client.fetch(query, { next: { revalidate: 60 } });
  
    if (!res) throw new Error("Failed to fetch projects");
  
    return res;
  };
  
  




