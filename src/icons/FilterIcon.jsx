import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#000000"
      d="M5.726 9.252h3.07V7.716h-3.07v1.536ZM.352.039v1.536H14.17V.039H.35Zm2.303 5.374h9.213V3.878H2.655v1.535Z"
    />
  </svg>
)
export default SvgComponent
