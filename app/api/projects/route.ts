import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "@firebase/index";
import { ProjectType } from "@firebase/project/type";
import { sendResponse } from "@helper/response";
import { RESPONSES } from "../response";

export async function GET(request: NextApiRequest){
  try{
    const projectArray: Array<ProjectType> = await projects.getProjects();
    return sendResponse(200, RESPONSES.PROJECTS_LIST(projectArray));
  } catch(error){
    console.trace(error);
  }
}