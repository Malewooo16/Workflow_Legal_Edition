import {hash, compare} from "bcrypt"
import { log } from "console"

const string = "deezNutez"

// async function hashing(){
//     const hashed= await hash(string,10)

// console.log(hashed)
// }

// hashing()

async function hashingChecker(){
    const passwordMatch = await compare("deezNutez", "$2b$10$ovK2P/cnC3L5b34xbDvmSu1vVmOU1p4TW7g9Harls9zGuNH3EFb1.")

    if(passwordMatch){
        console.log("Matches!!!");
    }
    else{
        console.log("Doesn't Match???");
    }
}

hashingChecker()