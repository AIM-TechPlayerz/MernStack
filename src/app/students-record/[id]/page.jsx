import React from "react";
import axios from "axios";

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
      <h1>ID: {_id && _id}</h1>
      <h1>Name: {name && name}</h1>
      <h1>Email: {email && email}</h1>
      <h1>Phone: {phone && phone}</h1>
      <h1>Address: {address && address}</h1>
      <h1>Description: {description && description}</h1>
    </div>
  );
}
