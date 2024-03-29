"use client";
import React, { useEffect, useState } from "react";
import { FormInput } from "@/components";
import { FormInputsData } from "@/constants";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";

const AppForm = ({ isUpdate, valueArrayFromApi, id }) => {
  const [loading, setLoading] = useState(false);
  const [updatedArray, setUpdatedArray] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("useForm ",reactHookForm);

  useEffect(() => {
    if (!isUpdate) return;
    const updatedArray = FormInputsData.map((obj, index) => ({
      ...obj,
      value: valueArrayFromApi[index],
    }));
    setUpdatedArray(updatedArray);
  }, [isUpdate, valueArrayFromApi]);

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

  const onEditHandler = async (data) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:3000/api/students/${id}`,
        data
      );
      alert(response.data.message)
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
      <form
        className="textcenter"
        onSubmit={handleSubmit(isUpdate ? onEditHandler : onSubmit)}
      >
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
        <br />
        <input className="btn" type="submit" />
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
