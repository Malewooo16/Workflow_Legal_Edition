
"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/db/prismadb";
import toB2Test from "./toB2Test";
import imgUpload from "./testPictureUpload";
import * as Yup from 'yup';

interface SuccessResponse {
  success: true;
  message?: string;
}

interface ErrorResponse {
  type:string;
  success: false;
  error: string;
}


interface UserData {
  firstName: string;
  lastName: string;
  dob: string;
  townAddress: string;
  emailAddress: string;
}

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required('Last Name is required'),
  firstName: Yup.string().required('First Name is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
  townAddress: Yup.string().required('Town Address is required'),
  dob: Yup.date().required('Date of Birth is required').typeError('Invalid Date'),
  
});

export async function addNewUser(formData: UserData ): Promise<SuccessResponse | ErrorResponse > {
  try {
    await validationSchema.validate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      townAddress: formData.townAddress,
      emailAddress:formData.emailAddress
      
    }, { abortEarly: false });

    const rawFormData: UserData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      townAddress: formData.townAddress,
      emailAddress:formData.emailAddress
    }
    // Create a FormData instance

    // Parse the deadline string into a JavaScript Date object
    const updatedDob = new Date(rawFormData.dob);
   
    const updatedData = {
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      emailAddress: rawFormData.emailAddress,
      townAddress: rawFormData.townAddress,
      dob: updatedDob,
      
    };

    const prismaResponse = await prisma.testUser.create({
      data: updatedData,
    });

    console.log(prismaResponse);

    return { success: true, message: "User created successfully." };
  } catch (error) {
    console.error('Error creating user:', error);

    if (error instanceof Yup.ValidationError) {
      // Yup validation error
      const validationErrors = error.inner.map(err => ({
        field: err.path,
        message: err.message,
      }));
      console.log(validationErrors);
      return { type:"validation", success: false, error: JSON.stringify(validationErrors) };
    }
    
    return { type: "generic", success: false, error: "Failed to create user." };
  }
}
