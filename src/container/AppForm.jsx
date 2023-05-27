"use client"
import React from "react";
import { FormInput } from "@/components";
import { FormInputsData } from "@/constants";
import { useForm } from "react-hook-form";

const AppForm = () => {

  const reactHookForm = useForm();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // console.log("useForm ",reactHookForm);

  const onSubmit = (data) => {
    console.log("data ", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

       

      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input type="submit" />
        {/* {FormInputsData.map((input, index) => (
          <FormInput
            key={index}
            label={input.label}
            name={input.name}
            value={input.value}
            onChange={handleChange}
            tag={input.tag}
            type={input.type}
          />

        ))}

        
        <button type="submit" onClick={handleSubmit} >
            Submit
        </button> */}
      </form>
    </>
  );
};

export default AppForm;




   