import React from "react";

const FormInput = ({label,name,value,register,tag,type,errors}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        {tag === "textarea" ? (
          <textarea name={name} value={value}  {...register(name, { required: true })} />
        ) : (
          <input type={type} name={name} value={value} 
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
