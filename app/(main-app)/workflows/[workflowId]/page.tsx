import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/db/prismadb";

interface Workflow {
    workflowId: string;
    workflowTitle: string;
    workflowDescription: string;
    firstName: string;
    lastName: string;
    creatorEmail: string;
    suggestedDeadline: Date;
    collaborators: string;
  }
export  default async function Workflows({params}: {params:{workflowId:string}}) {


    "use server"
    const singleWorkflow: Workflow = await prisma.theWorkflow.findUnique({
        where:{
            workflowId:params.workflowId
        }
    })



    return(
        <div ><div className="w-3/4">
        <ul key={singleWorkflow.workflowId}>
          <li className="text-xl my-2"> {singleWorkflow.workflowTitle} </li>
          <li> {singleWorkflow.workflowDescription} </li>
          <li> {singleWorkflow.suggestedDeadline.toLocaleString()} </li>
          <li> {singleWorkflow.collaborators} </li>
        </ul>
    </div></div>
    )

    //console.log(params.workflowId)
    
}