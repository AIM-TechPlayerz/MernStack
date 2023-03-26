"use client";
import React,{useState,useEffect} from "react";
import { Inter } from "@next/font/google";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import "./page.module.css";
import axios from "axios";

export default function allrecord() {
 
  const [apiData, setApiData] = useState([])
  const nameArray=[
    "maham", // 0
    "ali",  // 1
    "ahmed", // 2
    "sajid", // 3
  ]

  const arrayObj=[
    {
      name:"maham",
      age:20,
      city:"karachi"
    },  
    {
      name:"haider",
      age:20,
      city:"karachi"
    },

  ]

  const getAllData=async ()=>{
    const {data}=await axios.get("http://localhost:3000/api/students/all-students/")
    setApiData(data)

   
    console.log(data)
  }

  useEffect(()=>{
    getAllData()
  },[])

  return (
    <>
      <Header />
     
     {
      // name ---> element of array
      // item ---> index of array
        // nameArray.map(
        //   (name,item)=> {
        //     return(
        //       <div key={item}>
        //         <h1>
        //           index/Id: {item} <br/>
        //           {name}</h1>

        //       </div>
        //     )
        //   }
        // )
     }
     {
      // map ---> array method 
      arrayObj.map(
        (obj,index)=>{
          return(
            <div key={index}>
              {console.log(obj,"this is obj")}
              <h1>
                index/Id: {index} <br/>
                {obj.name} <br/>
                {obj.age} <br/>
                {obj.city} <br/>
              </h1>
            </div>
            
          )
        }
      )
     }

      <br />
      <br />

      <Footer />
    </>
  );
}


