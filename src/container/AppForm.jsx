"use client";
import React, { useEffect, useState } from "react";
import { FormInput } from "@/components";
import { FormInputsData } from "@/constants";
import { useForm } from "react-hook-form";
import axios from "axios";

const AppForm = ({ isUpdate, valueArrayFromApi }) => {
  const [loading, setLoading] = useState(false);
  const [updatedArray, setUpdatedArray] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("useForm ",reactHookForm);

  useEffect(() => {
    const updatedArray = FormInputsData.map((obj, index) => ({
      ...obj,
      value: valueArrayFromApi[index],
    }));
    setUpdatedArray(updatedArray);
  }, [valueArrayFromApi]);

  const onSubmit = async (data) => {
    console.log("data ", data);
    // send data to server
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/students/add-student",
        data
      );
      console.log("response ", response);
    } catch (error) {
      console.log("error ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  console.log(isUpdate, "isUpdate");

  console.log("valueArrayFromApi", valueArrayFromApi);

 

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isUpdate &&
          FormInputsData.map((input, index) => {
            return (
              <div key={index}>
                <FormInput
                  key={index}
                  label={input.label}
                  name={input.name}
                  defaultValue={input.value}
                  tag={input.tag}
                  type={input.type}
                  register={register}
                  errors={errors}
                />
              </div>
            );
          })}

        {isUpdate &&
          updatedArray.map((input, index) => {
            return (
              <div key={index}>
                <FormInput
                  key={index}
                  label={input.label}
                  name={input.name}
                  defaultValue={input.value}
                  tag={input.tag}
                  type={input.type}
                  register={register}
                  errors={errors}
                />
              </div>
            );
          })}
        <input type="submit" />
      </form>
    </>
  );
};

export default AppForm;

{
  /* <input {...register("name", { required: true })} 
      placeholder="name"
      />
      
      <input type="submit" /> */
}

// {FormInputsData.map((input, index) => {
//   return(
//     <div key={index}>
//     <FormInput
//       label={input.label}
//       name={input.name}
//       defaultValue={input.value}
//       tag={input.tag}
//       type={input.type}
//       register={register}
//       errors={errors}
//     />
//   </div>
//   )
// })}
