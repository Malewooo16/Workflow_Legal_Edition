import fetchWorkflowsPerUser from "@/app/main-components/UserWorkflows";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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


export default async  function page() {

  const session = await getServerSession(authOptions)
  const userWorkflows: Workflow[] = await fetchWorkflowsPerUser(session?.user.email)

  
  return (
    <div className="flex-1">
        <p className="text-xl"> Your Workflows</p>
        <div className="flex justify-center mb-6"><Link href={`/workflows/new-flows`}><button  className="btn btn-success "> Add a new workflow</button></Link></div>
    
<div className="grid grid-cols-2 my-3 px-4">
{userWorkflows.map((w)=> (
    <div className="card w-96  h-24 bg-base-100 shadow-lg p-4 border border-base-300">
      <ul>
      <><li> {w.workflowTitle} </li>
    <li> {`By ${w.firstName} ${w.lastName}`} </li></>
    </ul> </div>
   ))}
</div>
        
    </div>
  )
}
