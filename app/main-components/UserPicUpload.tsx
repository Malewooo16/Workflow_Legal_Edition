"use client"

import { useState } from "react";
import Image from 'next/image'


export default function UserPicUpload(props : {nextStep:number , setNextStep : ()=> void}) {

   const [base64String, setBase64String] = useState <string | null>('')
    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
    
        if (file) {
          // Read the file as a data URL
          const reader = new FileReader();
    
          reader.onloadend = () => {
            // Set the Base64 string in the state
            const base64 = reader.result as string
            setBase64String(base64);
          };
    
          reader.readAsDataURL(file);
        }

       
      };

      const toFinalStep = (formData :FormData) =>{
        props.setNextStep()
      }
 

  return (
    <div>
        <h2 className="text-lg my-4">Upload User Pic</h2>
        <form action={toFinalStep}>
        <input type="file" className="file-input file-input-bordered w-full" name="userPic" onChange={handleFileChange}  />
        <p>Preview:</p>
        {base64String && <Image src={base64String} alt="preview" width={250} /> }
        <button className="btn btn-success" type="submit">Upload</button>
        </form>
    </div>
  )
}
