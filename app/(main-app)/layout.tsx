import Link from "next/link";
import Navbar from "../main-components/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useRouter } from 'next/navigation'
import RedirectToLogin from "../main-components/RedirectToLogin";
import ThemeProvider from "../main-components/ThemeProvider";
import LoginForm from "../main-components/LoginForm";

export default async function AppLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  
    const session = await getServerSession(authOptions)
    //console.log(session?.user)
  
    if(session?.user){
      return(<section className=" mt-2" >
      <div className="sticky top-0 z-20"><Navbar/></div>
      <div className="flex " >
      <div><ul className="hidden md:flex menu  w-56 rounded-box sticky top-14 ms-2 ">
<li> <Link href={`/dashboard`}  className="mb-3">  Dashboard  </Link>  </li>
<li><Link href={`/workflows`}  className="mb-3">  Workflows  </Link> </li>
<li><Link href={`/analytics`}  className="mb-3">  Analytics  </Link> </li>
<li><Link href={`/gantts`}  className="mb-3">  Gantts  </Link> </li>
<li><Link href={`/teams`} className="mb-3" >  Teams  </Link> </li>
</ul></div>
<div className="flex-1">{children}</div>
<div> <div className="hidden sticky top-10 md:flex flex-col p-4 me-4 w-52 hover:bg-neutral"> 
  <p className="text-lg ">Right Sidebar</p>
  <p> Another sidebar </p>
</div></div>
      </div>
    </section>)
    }

    else{
      return (
        <main className="flex flex-col  " >
      <div className="flex justify-end w-full">
        
      <ThemeProvider/>
      </div>
      <h1 className="text-center text-lg text-error"> Error!! Login to Gain acesss  </h1>
      <div className="flex justify-center h-[90vh]  items-center" >
        <LoginForm/>
      </div>
    </main>
      )
    }
  }