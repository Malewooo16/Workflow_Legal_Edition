

import ThemeProvider from "./main-components/ThemeProvider"
import LoginForm from "./main-components/LoginForm"


export default function Home() {
  
  return (
    <main className="flex flex-col  " >
      <div className="flex justify-end w-full">
        
      <ThemeProvider/>
      </div>
      
      <div className="flex justify-center h-[90vh]  items-center" >
        <LoginForm/>
      </div>
    </main>
  )
}
