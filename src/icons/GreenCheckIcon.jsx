import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="55"
      fill="none"
      viewBox="0 0 54 55"
      className={className}
    >
      <path
        fill="#007600"
        d="M0 .234L47 .5 51.5 3l2.311 3v48.046L0 .234z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M30 17.5l4 4L43.5 11"
      ></path>
    </svg>
  );
}

export default Icon;
