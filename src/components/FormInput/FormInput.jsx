import React from "react";
import "./form.css"
const FormInput = ({ label, name, defaultValue, register, tag, type, errors }) => {
  return (
    <>
      <div className="hello">
        <label>{label}</label>
        {tag === "textarea" ? (
          <textarea
            name={name}
            defaultValue={defaultValue}
            {...register(name, { required: true })}
          />
        ) : (
          <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            {...register(name, { required: true })}
            placeholder={label}
          />
        )}

        {errors.name && <span>This field is required</span>}
      </div>
    </>
  );
};

export default FormInput;
