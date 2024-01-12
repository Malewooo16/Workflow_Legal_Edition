"use client"

import { addNewWorkflow } from "../actions/new-workflow"
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { useState } from "react";
import { useRouter } from "next/navigation";
import toB2Test from "../actions/testActions/toB2Test";


export default  function AddWorkflow() {
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [file , setFile] = useState <File | null> (null)
  const router = useRouter()

  const validationSchema = Yup.object().shape({
    workflowTitle: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    deadline: Yup.string().required('Deadline is required'),
    with: Yup.string().required('Collaborators are required'),
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if (files && files.length > 0) {
      // Assuming you want to handle only the first selected file
      const file = files[0];
      setFile(file);
    }
  };

  const handleFileSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      try {
        // Provide your bucket ID
        const bucketId = 'YOUR_BUCKET_ID';
        await toB2Test(file);
        // Add any additional logic after the file is uploaded successfully
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error('Error during file upload:', error);
      }
    }
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  async function createNewWorkflow(formData: { workflowTitle: string; description: string; deadline: string; with: string; }){

    const result = await addNewWorkflow(formData)

    if(result.success){
      setError(false)
        setSuccess(true)
       
        reset()
        window.scrollTo({ top: 10, behavior: 'smooth' });
        setTimeout(() => {
          router.push("/workflows", { scroll: false });
        }, 180);
        
        
    }
    else{
      setError(true)
      window.scrollTo({ top: 10, behavior: 'smooth' });
    }
  }
  return (
    <div className ="my-3 ">
        
        
        <form onSubmit={handleSubmit(createNewWorkflow)}>
        {success&& <div role="alert" className="alert alert-success max-w-xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your Workflow has been added!</span>
</div>}

{error && <div role="alert" className="alert alert-error max-w-xl">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Failed to add Workflow.</span>
</div>}
        <div className="join join-vertical flex">
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Title</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("workflowTitle")}/>
       <p className="text-error text-sm"> {errors.workflowTitle?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Description</p>
        <textarea  placeholder="Type here" className="input input-bordered w-full h-60 " {...register("description")} /> 
        <p className="text-error text-sm"> {errors.description?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Additionals</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full " name="additonals" />
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Deadline</p>
        <input type="datetime-local"  min={new Date().toISOString().slice(0,16)} placeholder="Type here" className="input input-bordered w-full "  {...register("deadline")}/>
        <p className="text-error text-sm"> {errors.deadline?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Collaborators</p>
        <select className="select select-bordered w-full max-w-xs"  {...register("with")}>
        <option value="" selected disabled>Select a collaborator</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
<p className="text-error text-sm"> {errors.with?.message} </p>
        </label>
        
</div>
<button className="btn btn-success" type="submit"> Create </button>
        </form>


        <form onSubmit={handleFileSubmit} className="mb-6">
          <p className="text-xl my-4"> Testing BackBlaze </p>
          <label className='form-control max-w-xl my-4 join-item'>
     <p className="my-2"> Upload Files related to the workflow</p>
     <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange}/>
    </label>
    <button className="btn btn-success">Upload to B2</button>
        </form>
    </div>

  )
}
