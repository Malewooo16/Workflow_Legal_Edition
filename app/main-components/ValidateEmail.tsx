"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sendEmail from "../actions/testActions/validateEmail";
import { clearUserData } from "@/store/cartSlice";
export default function ValidateUser (props : {finalStep:number , backToStart:()=>void}){
    const userId = useSelector((state:any)=>state.cart.userData.userId);
    const userEmail = useSelector((state:any)=>state.cart.userData.userEmail)
    const dispatch = useDispatch()
    const [error, setError] = useState('')
   const [success, setSuccess] = useState('')
    const [emailAddress, setEmailAddress] = useState(userEmail)
    const userValidation = async () =>{
        const response = await sendEmail(emailAddress, userId);
        try{
            if(response?.sucesss){
                setSuccess("Email sent succesfully")
                dispatch(clearUserData())
                setTimeout(()=>{props.backToStart()} , 1500)
            }

            else{
                setError("Failed to Send Email");
            }
        }

        catch{
            setError("Failed to Send Email");
        }
     
    }
    return(
        <div>
            {success && <div role="alert" className="alert alert-success max-w-lg">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span> {success} </span>
</div>}
{error && <div role="alert" className="alert alert-error max-w-lg">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span> {error} </span>
</div>}

            <h1 className="text-lg my-4"> Validate user Email</h1>
        <p>A validation message will be sent to this Email Address</p>
        <form className="max-w-xl" action={userValidation}>
        <input type="text" value={userEmail} className="input input-bordered w-full " />
        <button className="btn btn-success my-4" type="submit"> Validate Email </button>
        </form>
        </div>
    )
}