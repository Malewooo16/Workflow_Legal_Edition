"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/db/prismadb";
import toB2Test from "./toB2Test";

interface SuccessResponse {
  success: true;
  message?: string;
  workflowId:string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

export async function addNewWorkflowB2Test(formData: { workflowTitle: string; description: string; deadline: string; with: string;  }): Promise<SuccessResponse | ErrorResponse> {
  try {
    const session = await getServerSession(authOptions);

    const rawFormData = {
      collaborators: formData.with,
      workflowTitle: formData.workflowTitle,
      workflowDescription: formData.description,
      suggestedDeadline: formData.deadline,
   
    };

    // Create a FormData instance

   

    // Parse the deadline string into a JavaScript Date object
    const deadlineDate = new Date(rawFormData.suggestedDeadline);

   
    const updatedData = {
      collaborators: rawFormData.collaborators,
      workflowTitle: rawFormData.workflowTitle,
      workflowDescription: rawFormData.workflowDescription,
      suggestedDeadline: deadlineDate,
      creatorEmail: session?.user.email,
      firstName: session?.user.firstName,
      lastName: session?.user.lastName,
     
    };

    const prismaResponse = await prisma.workflowTest.create({
      data: updatedData,
    });

   const workflowId = prismaResponse.workflowId as string;
  
    return { success: true, message: "Workflow created successfully." , workflowId};
  } catch (error) {
    console.error('Error creating workflow:', error);

    return { success: false, error: "Failed to create workflow." };
  }
}

