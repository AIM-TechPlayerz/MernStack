"use client";
import React from "react";
import { Inter } from "@next/font/google";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import "./page.module.css";

export default function allrecord() {
 
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


