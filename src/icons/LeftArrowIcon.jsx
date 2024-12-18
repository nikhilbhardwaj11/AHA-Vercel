import React from "react";

function Icon({width="7", height="11px"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 7 11"
    >
      <path stroke="#0B223C" strokeLinecap="round" d="M6 1L1 5.5 6 10"></path>
    </svg>
  );
}

export default Icon;