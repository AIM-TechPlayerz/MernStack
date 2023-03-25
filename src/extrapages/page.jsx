"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import axios from "axios";
import "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function allrecord() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const allRecords = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "http://localhost:3000/api/students/all-students/"
    );
    setApiData(data.students);
    console.log(data);
    setLoading(false);
  };

  
  useEffect(() => {
    allRecords();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        "loading"
      ) : (
        <table className="table-email">
          <tr className="table-email-tr">
          <th className="table-email-th">Id</th>
            <th className="table-email-th">Name</th>
            <th className="table-email-th">Email</th>
            <th className="table-email-th">Delete</th>
          </tr>

          {apiData?.map((item) => {
            return (
              <tr className="table-email-tr">
                 <td className="table-email-td">{item._id}</td>
                <td className="table-email-td">{item.name}</td>
                <td className="table-email-td">{item.email}</td>
                <td className="table-email-td">
                  <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",

                  }}
                 
                  >
                  Delete 
                  </button>
                  </td>
              </tr>
            );
          })}
        </table>
      )}

      <br />
      <br />

      <Footer />
    </>
  );
}
