
import emailjs from "@emailjs/browser"


 const sendEmail = async (emailAddress:string, userId:string) =>{
    const serviceId = "service_jsgnv1l";
    const templateId = "template_zot3ok3";
    const publicKey = "b-FvyqvR8k3C9GFEo"
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    //console.log(process.env.NEXT_PUBLIC_BASE_URL)
    const templateParams ={
        message:`${baseUrl}/validateusr/${userId}`,
        to_email:emailAddress
    }

    try{
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        return{sucesss:true, message:"Email Sent Succesfully"}
    }

    catch (error){
      console.log("Failed To Send Email")
    }
}

export default sendEmail