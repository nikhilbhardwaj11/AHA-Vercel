import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M5.83 4.67v-2.5c0-.461.374-.834.834-.834h6.667c.46 0 .833.373.833.833v2.5h3.333c.46 0 .834.373.834.834v11.666c0 .46-.373.834-.834.834h-15a.833.833 0 01-.833-.834V5.503c0-.46.373-.834.833-.834h3.334zm1.667 6.666H3.331v5h13.333v-5h-4.167v2.5h-5v-2.5zm9.167-5H3.331v3.333h4.166V8.003h5v1.666h4.167V6.336zm-7.5 3.333v2.5h1.667v-2.5H9.164zM7.497 3.003v1.666h5V3.003h-5z"
        fill="#333E56"
      />
    </svg>
  )
}

export default SvgComponent