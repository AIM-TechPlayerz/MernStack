import React from "react";

const FormInput = ({label,name,value,onChange,tag,type}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        {tag === "textarea" ? (
          <textarea name={name} value={value} onChange={onChange} />
        ) : tag === "select" ? (
          <select name={name} value={value} onChange={onChange}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </div>
    </>
  );
};

export default FormInput;
