"use client"


import { useState } from "react";
import { addNewUser } from "@/app/actions/testActions/addUser";

export default function page() {
   
   const [base64String, setBase64String] = useState <string | null>('');
   const [validationErrors , setValidationErrors] = useState <string>('')
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
    
  const uploadPerson = async (formData:FormData) =>{

    const userUploadResponse = await addNewUser(formData);

    if(userUploadResponse.success==false && userUploadResponse.type == 'validation'){
      setValidationErrors(userUploadResponse.error)
    }

  }
      

      
  return (
    <div>
    <form action={uploadPerson} className="mx-6">
      <h2 className="text-2xl">User Upload</h2>
    <div className="join join-vertical flex">
    <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Last Name</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  name="lastName"/>
       <p className="text-error text-sm">  </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> First Name</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  name="firstName"/>
       <p className="text-error text-sm"> </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Email Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  name="emailAddress"/>
       <p className="text-error text-sm">  </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Town Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  name="townAddress"/>
       <p className="text-error text-sm">  </p>
        </label>

        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Date of Birth</p>
        <input type="date"  max={new Date().toISOString().slice(0,10)} placeholder="Type here" className="input input-bordered w-full "  name="dob"/>
        <p className="text-error text-sm">  </p>
        </label>

        <label className='form-control max-w-xl my-4 join-item '>
           <p className="my-2"> Picture</p>
           <input type="file" className="file-input file-input-bordered w-full " onChange={handleFileChange} name="userPic" />
           {base64String && (
        <div>
          
          <p>Image Preview:</p>
          <img src={base64String} alt="Preview" />
        </div>
      )}
        </label>
        {validationErrors && <p className= 'text-error'> {validationErrors} </p>}
        <button type="submit" className="btn btn-success">Add User</button>
    </div>
    </form>
    
    </div>
  )
}
