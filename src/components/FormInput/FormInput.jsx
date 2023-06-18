import React from "react";
import "./form.css"
const FormInput = ({ label, name, defaultValue, register, tag, type, errors }) => {
  return (
    <>
      <div className="hello">
        <div>
        <label>{label}</label>
        </div>
        <div>
        {tag === "textarea" ? (
          <textarea
            name={name} 
            defaultValue={defaultValue}
            {...register(name, { required: true })}
            
          />
          
        )  :  (

          <input
            className="testclass"
            type={type}
            name={name}
            defaultValue={defaultValue}
            {...register(name, { required: true })}
            placeholder={label}
          />
          
        )}
        

        {errors.name && <span>This field is required</span>}
        </div>
      </div>
    </>
  );
};

export default FormInput;
