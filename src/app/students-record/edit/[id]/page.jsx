import React from "react";
import axios from "axios";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { AppForm } from "@/container";

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
  const inputValuesFromApi= await getStudent(
    id
  );

  const valueArrayFromApi=[name,email,phone,address,description]

  console.log(name);
  return (
    <>
      <div>
        <Header />
        {/* <div>
          <h1>ID: {_id && _id}</h1>
          <h1>Name: {name && name}</h1>
          <h1>Email: {email && email}</h1>
          <h1>Phone: {phone && phone}</h1>
          <h1>Address: {address && address}</h1>
          <h1>Description: {description && description}</h1>
        </div> */}
<br/>
        <AppForm 
        isUpdate={true}
        valueArrayFromApi={valueArrayFromApi}
        />

        <Footer />
      </div>
    </>
  );
}
