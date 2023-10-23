import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Dashboard() {

  const session= await getServerSession(authOptions)
  //console.log(session);
  
  return (
    
    <h1 className="text-3xl text-center mt-5 ms-5"> Welcome To {session?.user.firstName} Dashboard </h1>
  )
}
