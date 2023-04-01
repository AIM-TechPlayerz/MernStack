"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Inter } from "@next/font/google";
import axios from "axios";
import "./page.module.css";
import Loading from "./loading";

import {RecordTable, Header, Footer} from "@/components/index";







export default  async function  allrecord () {
 


  return (
    <>
      <Header />
    {/* <RecordTable/> */}

      <Footer />
    </>
  );
}
