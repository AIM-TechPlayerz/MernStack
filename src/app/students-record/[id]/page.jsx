import React from "react";
import axios from "axios";
import { Footer, Header } from "@/components";
import "../../page.module.css"
import UserInfo from "@/components/userInfo/UserInfo";


// get single student record
const getStudent = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/students/${id}`
    );

    return response.data.student;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page({ params: { id } }) {
  console.log("this is id", id);
  const { _id, name, email, phone, address, description } = await getStudent(
    id
  );

  console.log(name);
  return (
    <div>
    <Header/>
    <br/>
    <br/>
    <br/>
    <UserInfo
      id={_id}
      name={name}
      email={email}
      phone={phone}
      address={address}
      description={description} 
    />
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  );
}
