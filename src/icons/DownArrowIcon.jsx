import React from "react";

function Icon({width="15px",height="9",className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 9"
      className={className}
    >
      <path
        stroke="#0C2340"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1.023l6.5 6.96 6.5-6.96"
      ></path>
    </svg>
  );
}

export default Icon;
