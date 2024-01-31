"use client"

import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { addNewUser } from "@/app/actions/testActions/addUser";
import { useState } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  dob: string;
  townAddress: string;
  emailAddress: string;
}

export default function AddNewUser( props : {nextStep:number , setNextStep:()=>void}) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Title is required'),
        lastName: Yup.string().required('Description is required'),
        townAddress: Yup.string().required('Deadline is required'),
        emailAddress: Yup.string().required('Collaborators are required'),
        dob:Yup.string().required("Add Date of Birth")
      
      });

      const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
      });

      const uploadUser = (formData:UserData)=>{

        props.setNextStep();
            // try{
            //    const result = await addNewUser(formData);
            //    if (result.success) {
            //     // Success
            //     props.setNextStep();

            //   } else {
            //     if (result.type === 'validation') {
            //       // Handle validation error
            //       console.log('Validation error:', result.error);
            //     } else {
            //       // Handle generic error
            //       console.log('Generic error:', result.error);
            //     }
            //   }

            // }

            // catch (err){

            // }
      }
  return (
    <div>
    <form onSubmit={handleSubmit(uploadUser)}>
    <div className="join join-vertical flex">
    <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> FirstName</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("lastName")}/>
       <p className="text-error text-sm"> {errors.lastName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> LastName</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("firstName")}/>
       <p className="text-error text-sm"> {errors.firstName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Email Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("emailAddress")}/>
       <p className="text-error text-sm"> {errors.lastName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Town Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("townAddress")}/>
       <p className="text-error text-sm"> {errors.townAddress?.message} </p>
        </label>

        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Date of Birth</p>
        <input type="date"  max={new Date().toISOString().slice(0,10)} placeholder="Type here" className="input input-bordered w-full "  {...register("dob")}/>
        <p className="text-error text-sm"> {errors.dob?.message} </p>
        </label>

      <button className="btn btn-success mb-6 mt-2" type="submit"> Add User Details {props.nextStep}</button>
        
    </div>
    </form>
    
    </div>
  )
}