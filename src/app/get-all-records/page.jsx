"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

import { NextResponse } from "next/server";



export default function allrecord() {
//   const response = GETAllRecord();
//   console.log(response);

const allRecords=async ()=>{
    const {data}=await axios.get("http://localhost:3000/api/students/all-students/");
    console.log(data)
}

useEffect(() => {
    allRecords()
}, [])


  return (
    <>
      <Header />
       

      <Footer />
    </>
  );
}
