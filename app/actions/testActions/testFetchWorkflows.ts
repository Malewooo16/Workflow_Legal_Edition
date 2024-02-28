import prisma from "@/app/db/prismadb";
import { revalidatePath } from "next/cache";


async function fetchTestWorkflowsPerUser(creatorEmail: any ) {
    try {
        if (!creatorEmail || creatorEmail.trim() === '') {
            return { error: "Email address cannot be empty", success:false };
        }

        const workflows = await prisma.workflowTest.findMany({
            where: {
               creatorEmail
            }
        });

        if (!workflows || workflows.length === 0) {
            return { error: "No workflows available", success:false };
        }
        
        return workflows;
        
    
    } catch (error) {
        console.error("Error fetching workflows:", error);
        return { error: "Internal Server Error" };
    }

    
}

export default fetchTestWorkflowsPerUser;
