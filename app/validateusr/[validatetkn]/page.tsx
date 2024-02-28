import fetchPersonalUserInfo from "@/app/actions/testActions/fetchPersonalUserInfo";
import Navbar from "@/app/main-components/Navbar";
import ValidateNewUser from "@/app/main-components/ValidateNewUser";


export default async function Validate(params:{userId:string}){
  const userData = await fetchPersonalUserInfo(params.userId)
    return(
        <div>
            <Navbar />
           <ValidateNewUser userData={userData} />
        </div>
    )
    }