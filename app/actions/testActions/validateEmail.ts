
import emailjs from "@emailjs/browser"

 const sendEmail = async () =>{
    const serviceId = "service_jsgnv1l";
    const templateId = "template_zot3ok3";
    const publicKey = "b-FvyqvR8k3C9GFEo"

    const templateParams ={
        message:"https://tailwindcss.com/docs/font-weight",
        to_email:"basputuyda@gufum.com"
    }

    try{
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        console.log("Email Sent succesfully", response);
    }

    catch (error){
      console.log("Failed To Send Email")
    }
}

export default sendEmail