import prisma from "@/app/db/prismadb";
import { revalidatePath } from "next/cache";


async function fetchPersonalUserInfo(userId: string ) {
    try {
        if (!userId || userId.trim() === '') {
            return { error: "Email address cannot be empty", success:false };
        }

        const userData = await prisma.testPerson.findMany({
            where: {
               userId
            }
        });

        
        return userData;
        
    
    } catch (error) {
        console.error("Error fetching userData:", error);
        return { error: "Internal Server Error" };
    }

    
}

export default fetchPersonalUserInfo;
