import React from "react";

function Icon({width="12px", height="18px"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 18"
    >
      <path
        fill="#0B223C"
        d="M0 18V2C0 1.45.168.98.504.587.839.196 1.243 0 1.714 0h8.572c.471 0 .875.196 1.21.588C11.832.979 12 1.45 12 2v16l-6-3-6 3zm1.714-3.05L6 12.8l4.286 2.15V2H1.714v12.95z"
      ></path>
    </svg>
  );
}

export default Icon;