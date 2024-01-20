"use client"

import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';

export default function page() {
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
  return (
    <div>
    <form>
    <div className="join join-vertical flex">
    <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> FirstName</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("lastName")}/>
       <p className="text-error text-sm"> {errors.lastName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> FirstName</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("firstName")}/>
       <p className="text-error text-sm"> {errors.firstName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Email Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("lastName")}/>
       <p className="text-error text-sm"> {errors.lastName?.message} </p>
        </label>
        <label className='form-control max-w-xl my-4 join-item'>
           <p className="my-2"> Town Address</p>
        <input type="text" placeholder="Type here" className="input input-bordered w-full "  {...register("townAddress")}/>
       <p className="text-error text-sm"> {errors.townAddress?.message} </p>
        </label>

        <label className='form-control max-w-xl my-4 join-item'>
        <p className="my-2"> Date of Birth</p>
        <input type="datetime-local"  max={new Date().toISOString().slice(0,16)} placeholder="Type here" className="input input-bordered w-full "  {...register("dob")}/>
        <p className="text-error text-sm"> {errors.dob?.message} </p>
        </label>

        <label className='form-control max-w-xl my-4 join-item '>
           <p className="my-2"> Town Address</p>
           <input type="file" className="file-input file-input-bordered w-full " />
       
        </label>
        
    </div>
    </form>
    
    </div>
  )
}
