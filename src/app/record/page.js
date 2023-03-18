"use client"
import React,{useState} from "react";
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';



const inter = Inter({ subsets: ['latin'] })


export default function record() {
//creates a usestate
const [name,setName]=useState({
  name:"",
  phone_number:"",
  email:"",
  address:"",
  description:"",
})
//a function which gets values from input
const handleClick = (event) => {
  setName(
      prevState => ({ ...prevState, [event.target.name]: event.target.value })
  )
}

  return (
    <>
    <Header />
    
    <div>
   {/* the indication of what to print*/}
   <div className="text-lg">
    <h1>Name = {name.name}</h1>
    <h1>phone_number = {name.phone_number}</h1>
    <h1>email = {name.email}</h1>
    </div>
    <h1 className="text-lg">address = {name.address}</h1>
    <h1 className="text-lg">description = {name.description}</h1>
{/* the input which takes the values */}
    <input
      name="name"
      onChange={handleClick}
      type="text"
            // the indication of the forms input type
      id='name'
      className="bg-lime-600 text-white"
    />
    <br/>
      <input
      name="phone_number"
      onChange={handleClick}
      type="text"
      // the indication of the forms input type
      id='phone_number'
      className="bg-lime-500 text-white"
    />
    <br/>
          <input
      name="email"
      onChange={handleClick}
      type="text"
      // the indication of the forms input type
      id='email'
      className="bg-lime-300 text-white"
    />
    <br/>
          <input
      name="address"
      onChange={handleClick}
      type="text"
      // the indication of the forms input type
      id='phone_number'
      className="bg-lime-200 text-aqua"
    />
    <br/>
          <input
      name="description"
      onChange={handleClick}
      type="text"
      // the indication of the forms input type
      id='description'
      className="bg-lime-100 text-aqua"
    />
    <br/>
   
   </div>
    
    <Footer />
    </>
  )
}
