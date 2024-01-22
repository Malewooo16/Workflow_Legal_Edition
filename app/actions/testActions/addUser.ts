
"use server"
import { getServerSession } from "next-auth";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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
  userPic: File;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dob: Yup.date().required('Date of Birth is required').typeError('Invalid Date'),
  townAddress: Yup.string().required('Town Address is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
});

export async function addNewUser(formData: FormData): Promise<SuccessResponse | ErrorResponse > {
  try {
    await validationSchema.validate({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dob: formData.get("dob") as string,
      townAddress: formData.get("townAddress") as string,
      emailAddress: formData.get("emailAddress") as string,
    }, { abortEarly: false });

    const rawFormData: UserData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dob: formData.get("dob") as string,
      townAddress: formData.get("townAddress") as string,
      emailAddress: formData.get("emailAddress") as string,
      userPic: formData.get("userPic") as File,
    };

    // Create a FormData instance

    // Parse the deadline string into a JavaScript Date object
    const updatedDob = new Date(rawFormData.dob);
    console.log(rawFormData.userPic.name);
    const b2Response = await imgUpload(rawFormData.userPic);
    const imgUrl = b2Response?.location;
    const updatedData = {
      firstName: rawFormData.firstName,
      lastName: rawFormData.lastName,
      emailAddress: rawFormData.emailAddress,
      townAddress: rawFormData.townAddress,
      dob: updatedDob,
      pictureUrl: imgUrl,
      
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
