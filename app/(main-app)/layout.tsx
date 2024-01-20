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
      return(<section className="flex flex-col mt-2" >
      <Navbar/>
      <div className="flex" >
      <ul className="hidden md:flex menu  w-56 rounded-box  ms-2 ">
<li> <Link href={`/dashboard`}  className="mb-3">  Dashboard  </Link>  </li>
<li><Link href={`/workflows`}  className="mb-3">  Workflows  </Link> </li>
<li><Link href={`/analytics`}  className="mb-3">  Analytics  </Link> </li>
<li><Link href={`/gantts`}  className="mb-3">  Gantts  </Link> </li>
<li><Link href={`/teams`} className="mb-3" >  Teams  </Link> </li>
</ul>
{children}
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