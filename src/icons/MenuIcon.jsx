import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#0A223C"
      d="M0 16.61v-2.75h21v2.75H0Zm0-6.876v-2.75h21v2.75H0ZM0 2.86V.11h21v2.75H0Z"
    />
  </svg>
)
export default SvgComponent
