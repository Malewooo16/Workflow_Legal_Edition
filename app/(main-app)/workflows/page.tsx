import fetchWorkflowsPerUser from "@/app/main-components/UserWorkflows";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import fetchTestWorkflowsPerUser from "@/app/actions/testActions/testFetchWorkflows";
import { revalidatePath } from 'next/cache'
revalidatePath('/workflows')

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

interface FileInfo{
  fileName:string;
  fileLocation:string;
}

interface NewWorkflow {
  workflowId: string;
  workflowTitle: string;
  workflowDescription: string;
  firstName: string;
  lastName: string;
  creatorEmail: string;
  suggestedDeadline: Date;
  collaborators: string;
  fileInfo : FileInfo[];
}



export default async  function page() {

  const session = await getServerSession(authOptions)
  const userWorkflows: Workflow[] = await fetchWorkflowsPerUser(session?.user.email)
  const newWorkflow:NewWorkflow[] = await fetchTestWorkflowsPerUser(session?.user.email)

  
  return (
    <div className="flex-1">
        <p className="text-2xl"> Your Workflows</p>
        <div className="flex justify-center mb-6"><Link href={`/workflows/new-flows`}><button  className="btn btn-success "> Add a new workflow</button></Link></div>
    
<div className="grid grid-cols-2 my-3 px-4 ">
  
{newWorkflow.reverse().map((w)=> (
    <Link href={`/workflows/${w.workflowId}`} key={w.workflowId}> <div className="card w-96 h-36 bg-base-100 shadow-lg p-4 border border-base-300 mb-4" >
    <ul className="mb-2">
    <><li> {w.workflowTitle} </li>
  <li> {`By ${w.firstName} ${w.lastName}`} </li>
  <li> Deadline {w.suggestedDeadline.toString().slice(0,-31)} </li>
  </>
  </ul> </div> </Link>
   ))}
</div>
        
    </div>
  )
}
