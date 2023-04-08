import React from "react";
import { DataTable, Header, Footer } from "@/components/index";
import axios from "axios";

async function allRecords() {
  const response = await axios.get(
    "http://localhost:3000/api/students/all-students"
  );
  return response.data;
}

const page = async () => {
  const { students } = await allRecords();

  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Header />
      <div className="mt-50">
        <div className="mt-20">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-5">
            Students Record
          </h1>
        </div>

        <div class="flex items-center justify-center overflow-auto">
          <DataTable data={students} />
        </div>
      </div>

      <br />
      <br />
 
      <Footer />
    </div>
  );
};

export default page;
