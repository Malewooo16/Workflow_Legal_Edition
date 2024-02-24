"use server"

import prisma from "@/app/db/prismadb";

export default async function addAgendas(workflowId:String , agendas:String[]){

try{
    await prisma.workflowTest.update({
        where: {
          workflowId: workflowId,
        },
        data: {
          timeLines: agendas,
        },
      });
      console.log("Added Timeline Successfully")
      return({success:true, message:"Succesfully Added"})
     
}

catch(err){
    console.log(err)
}
}