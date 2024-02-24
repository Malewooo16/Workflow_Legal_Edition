import fetchWorkflowTimelines from '@/app/actions/testActions/fetchTimeLines'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import CalenderDemo from '@/app/main-components/Calender'
import { getServerSession } from 'next-auth'


export default async function page() {

  const session = await getServerSession(authOptions) 
  const email = session?.user.email
  const workflow = await fetchWorkflowTimelines(email) as any
  
  

 
  
  return (
    <div>
        <CalenderDemo timeLines={workflow}/>
    </div>
  )
}
