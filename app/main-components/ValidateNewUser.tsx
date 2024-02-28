"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';

interface userData {
  userId: string;
  firstName: string;
  lastName: string;
  townAddress: string;
  dob: Date;
  emailAddress: string;
  pictureURL: string;
  phoneNumber: string;
  validated: Boolean;
  createdAt: Date;
}
export default function ValidateNewUser(props: { userData: userData }) {
  const userData = props.userData;
  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string().required('Description is required'),
    
  
  });

  const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const validateUser = (formData:any)=>{
    const {password} = formData
    console.log(formData)
    console.log(password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(validateUser)}>
      <div className="join join-vertical flex">
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> First Name</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.firstName}
            disabled
          />
        </label>
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Last Name</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.lastName}
            disabled
          />
        </label>
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Date of Birth</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.dob.toUTCString()}
            disabled
          />
        </label>
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Physical Address</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.townAddress}
            disabled
          />
        </label>

        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Phone Number</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.phoneNumber}
            disabled
          />
        </label>

        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Email Address</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.emailAddress}
            disabled
          />
        </label>

        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Organization Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={userData.emailAddress}
            disabled
          />
          <p className="text-md"> This email will be used to access your workflows in your Organization </p>
        </label>

        <p className="text-lg mt-4">Add a Password to Access your Workflow</p>
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Organization Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("password")}
          />
          <p className="text-sm text-error"> {errors.password?.message} </p>
        </label>
        <label className="form-control max-w-xl my-4 join-item">
          <p className="my-2"> Organization Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("confirmPassword")}
            onBlur={() => trigger("confirmPassword")}
          />
          <p className="text-sm text-error"> {errors.confirmPassword?.message} </p>
        </label>
        <button className="btn btn-success mb-10 mt-2" type="submit">
          {" "}
          Validate your account
        </button>
      </div>
      </form>
    </div>
  );
}
