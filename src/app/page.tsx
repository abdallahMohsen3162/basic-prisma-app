"use client"
import Navbar from '../components/navbar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Suspense } from 'react';
import { Lol } from '@/components/list/List';
export default function Home() {
  
  return (
    <div>
      <Suspense fallback={<h1>loadong...</h1>}>
        < Lol />
      </Suspense>
    </div>
  )
}
