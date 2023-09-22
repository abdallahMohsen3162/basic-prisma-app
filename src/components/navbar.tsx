"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react';


export default function Navbar() {
    const {data, status} = useSession();
    console.log(status);
    
    return (
    <div className='nav'>
        <div className='logo'>
            <Link href={"/"} >Home</Link>
        </div>

        <div className='links'>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Help</Link>
            {status=="authenticated"?(<button onClick={() => signOut()} className='loagout'>Logout</button>):(<Link href={"/user/login"}>login</Link>)}

        </div>
    </div>
  )
}
