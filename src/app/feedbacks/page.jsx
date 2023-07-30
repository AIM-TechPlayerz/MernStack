import React from "react";

import {FeedbackForm,Header,Footer,FeedbackList} from "@/components/index";
const page = () => {
  return (
    <>
      <Header />
      <br />
      <FeedbackForm />
      <br/><br/><br/>
      <FeedbackList/>
      <Footer />
    </>
  );
};

export default page;
