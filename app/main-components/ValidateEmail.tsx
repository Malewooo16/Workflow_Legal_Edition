"use client"


export default function ValidateUser (props : {finalStep:number}){
    const userValidation = () =>{
        //reload();
    }
    return(
        <div>
            <h1 className="text-lg my-4"> Validate user Email</h1>
        <p>A validation message will be sent to this Email Address</p>
        <form className="max-w-xl" action={userValidation}>
        <input type="text" value={"doncanste@gmail.com"} className="input input-bordered w-full " />
        <button className="btn btn-success my-4" type="submit"> Upload Picture </button>
        </form>
        </div>
    )
}