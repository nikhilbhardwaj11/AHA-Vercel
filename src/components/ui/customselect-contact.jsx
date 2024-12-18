"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
 
 

import React, { useState } from "react";
import styled from "styled-components";

const CustomSelectContact = ({
  options,
  label,
  errorMessage,
  isInvalid,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (selectedValue === "") {
      setIsFocused(false);
    }
  };

  return (
    <SelectStyled
      className={`custom-select ${isFocused || props.value ? "focused" : ""}`}
    >
      <label className="custom-select-label  text-gray-500">{label}</label>
      <select
        className="custom-select-field text-[14px] mt-1"
        // value={selectedValue}
        // onChange={handleChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        {...props}
      >
              <option value="" disabled>
                Select an option
              </option> 
              <option> Concord</option>
              <option> Duboptionn</option>
              <option> Emeryville</option>
              <option> Hayward</option>
              <option> Redwood City</option>
              <option> Roseville</option>
              <option> San Jose</option>
              <option> San Rafael</option>
              <option> Hayward Outlet Center</option>
              <option> Warehouse - Customer Pick Up Only</option>
       
      </select>

      {isInvalid && (
        <p className="text-red-600 text-[10px] absolute bottom-[-18px] left-[12px]">
          {errorMessage}
        </p>
      )}
    </SelectStyled>
  );
};

export default CustomSelectContact;

const SelectStyled = styled.div`
  position: relative;
  margin-bottom: 20px 0;
  .custom-select-label {
    position: absolute;
    left: 12px;
    top: 24%;
    font-size: 14px;
    transition: all 0.2s ease;
    pointer-events: none;
    background: white;
    padding: 0 0.25rem;
  }

  .custom-select-field {
    width: 100%;
    padding: 13.5px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    appearance: none;
    border-radius: 8px;
  }

  &.custom-select.focused .custom-select-label,
  .custom-select:not(:focus-within)
    .custom-select-field:not(:placeholder-shown)
    + .custom-select-label {
    top: 0;
    left: 10px;
    font-size: 0.75rem;
    /* color: #007BFF; */
    transform: translateY(-50%);
  }
`;
 



 


 