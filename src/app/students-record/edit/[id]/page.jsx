import React from "react";
import axios from "axios";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { AppForm } from "@/container";

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
  const { name, email, phone, address, description } = await getStudent(id);// ---> object form 
  // loop ---> map ---> array

  const valueArrayFromApi = [name, email, phone, address, description];

  console.log(name);
  return (
    <>
      <div>
        <Header />
        <br />
        <AppForm isUpdate={true} valueArrayFromApi={valueArrayFromApi} />

        <Footer />
      </div>
    </>
  );
}
