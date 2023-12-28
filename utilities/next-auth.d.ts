import NextAuth from "next-auth"

declare module "next-auth" {
  
    interface User{
        firstName:string;
        role:string;
        lastName:string
    }
  interface Session {
    user: User & {
      firstName:string,
      lastName:string

    }
    token:{
        firstName:string,
    }
  }
}