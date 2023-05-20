"use client"
import React, { useState } from "react";
import { FormInput } from "@/components";
import { FormInputsData } from "@/constants";

const AppForm = () => {

    const initialFormValue = FormInputsData.reduce((acc, input) => {
        return {
            ...acc,
            [input.name]: "",  // name,email: "" --> key 
        }
    }, {})

    const [form, setForm] = useState(initialFormValue)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.email ) return;
        console.log(form);
    }

  return (
    <>
      <form>
        {FormInputsData.map((input, index) => (
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
        </button>
      </form>
    </>
  );
};

export default AppForm;




   