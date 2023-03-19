"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export default function record() {
  const [loading, setLoading] = useState(false);
  //creates a usestate
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    description: "",
  });
  //a function which gets values from input
  const handleClick = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    // post api using axios
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/students/add-student",
        formData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />

      <div>
        {/* the indication of what to print*/}

        {/* the input which takes the values */}
        <form onSubmit={submitHandler}>
          <input
            name="name"
            onChange={handleClick}
            required
            type="text"
            // the indication of the forms input type
            id="name"
            className="bg-lime-600 text-white"
          />
          <br />
          <input
            name="phone"
            required
            onChange={handleClick}
            type="text"
            // the indication of the forms input type
            id="phone"
            className="bg-lime-500 text-white"
          />
          <br />
          <input
            name="email"
            onChange={handleClick}
            type="text"
            required
            // the indication of the forms input type
            id="email"
            className="bg-lime-300 text-white"
          />
          <br />
          <input
            name="address"
            onChange={handleClick}
            type="text"
            required
            // the indication of the forms input type
            id="phone"
            className="bg-lime-200 text-aqua"
          />
          <br />
          <input
            name="description"
            onChange={handleClick}
            type="text"
            // the indication of the forms input type
            id="description"
            required
            className="bg-lime-100 text-aqua"
          />
          <br />
          <button
            type="submit"
            className="bg-red-500 text-white-500
          "
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
