import React from "react";

function Icon({width=24, height=24, fill="#000000"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M23.222 14.228h-8.888v9.108H9.67v-9.108H.782v-4.224H9.67V.896h4.664v9.108h8.888v4.224z"
      ></path>
    </svg>
  );
}

export default Icon;