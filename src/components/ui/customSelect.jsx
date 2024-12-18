import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import SelectIcon from "@/assets/images/select-arrow.png"
const CustomSelect = ({
  options,
  label,
  errorMessage,
  isInvalid,
  className,
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
      className={`custom-select ${className} ${isFocused || props.value ? "focused" : ""} mb-5`}
    >
      <label className="custom-select-label  text-gray-500">{label}</label>
      <select
        className={`custom-select-field text-[14px] mt-1 focus-visible:outline-0 focus:border-blue-500 border ${isInvalid ? "border-red-600" : "border-gray-300"}   `}
        // value={selectedValue}
        // onChange={handleChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        {...props}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>
      <Image src={SelectIcon} alt="icon"  className=" absolute object-contain top-[13px] h-[32px] left-[unset] right-[6px] w-[40px]"/>

      {isInvalid && (
        <p className="text-red-600 text-[10px] absolute bottom-[3px] left-[12px]">
          {errorMessage}
        </p>
      )}
    </SelectStyled>
  );
};

export default CustomSelect;

const SelectStyled = styled.div`
  position: relative;
  margin-bottom: 20px 0;
  .custom-select-label {
    position: absolute;
    left: 12px;
    top: 35%;
    font-size: 14px;
    transition: all 0.2s ease;
    pointer-events: none;
    background: white;
    padding: 0 0.25rem;
  }

  .custom-select-field {
    width: 100%;
    padding: 13.5px 12px;
    border-radius: 4px;
    background: white;
    appearance: none;
    border-radius: 8px;
    padding-right: 50px;

  }

  &.custom-select.focused .custom-select-label,
  .custom-select:not(:focus-within)
    .custom-select-field:not(:placeholder-shown)
    + .custom-select-label {
    top: 6px;
    left: 10px;
    font-size: 0.75rem;
     color: #374151;
    transform: translateY(-50%);
  }
`;
