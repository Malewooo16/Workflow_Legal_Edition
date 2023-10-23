

import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "@/app/db/prismadb"
import { compare } from "bcrypt"

export const authOptions:NextAuthOptions={
    adapter: PrismaAdapter(prisma) ,
    secret: process.env.NEXTAUTH_SECRET ,
    session:{
        strategy:"jwt"
    },
    pages:{
      signIn:"/",
      
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
           if(!credentials?.username || !credentials?.password ){
            return null
           }
            const existingUser=await prisma.users.findUnique({
                where:{emailAddress:credentials.username}
            })

            if(!existingUser){
                return null
            }
            const passwordMatch = await compare(credentials.password, existingUser.hashedPassword)
             
            if(!passwordMatch){
                return null
            }
            return{ 
                id: `${existingUser.id}`,
                firstName:existingUser.firstName,
                email:existingUser.emailAddress,
                role:existingUser.role,
            }
          }
        })
      ],
      callbacks:{
          async jwt({ token, user }) {
            if(user){
                return{
                    ...token,
                    firstName:user.firstName,
                    role:user.role,
                    email:user.email,
                }
                
            }
            return token
          },
          async session({ session,  token }) {
            return {
                ...session,
            user:{
                ...session.user,
                firstName:token.firstName,
                email:token.email,
                role:token.role
            }
            }
          },
      }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }


