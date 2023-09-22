"use client"
import React from 'react'
import {useSession, signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function login() {
    const {data, status} = useSession();
    console.log(data, status);
    const router = useRouter();
    if(status == "authenticated"){
        router.push("/")
    }
    return (
    <div>

        <button onClick={() => signIn("google")}>google login</button>
      
    </div>
  )
}
