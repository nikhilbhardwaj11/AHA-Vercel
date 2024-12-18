import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#545454"
      d="M6.887 6.07V4.681c0-1.29.526-2.459 1.374-3.309A4.666 4.666 0 0 1 11.569 0h8.683c.634 0 1.233.116 1.793.347a4.644 4.644 0 0 1 1.515 1.025l.003-.003 4.64 4.64c.45.45.79.956 1.023 1.519.231.558.348 1.156.348 1.792v15.93c0 1.29-.526 2.46-1.374 3.309a4.666 4.666 0 0 1-3.308 1.373h-2.206v1.386c0 1.29-.525 2.459-1.373 3.308A4.666 4.666 0 0 1 18.005 36H4.681a4.668 4.668 0 0 1-3.309-1.373A4.666 4.666 0 0 1 0 31.317v-20.57C0 9.458.525 8.29 1.373 7.44a4.666 4.666 0 0 1 3.309-1.373h2.205v.002Zm15.797 22.176h2.206c.824 0 1.572-.336 2.116-.879.542-.542.878-1.29.878-2.115V9.322c0-.421-.072-.806-.217-1.153a2.97 2.97 0 0 0-.661-.963l-4.64-4.64.003-.001-.003-.003a2.962 2.962 0 0 0-.963-.658 2.992 2.992 0 0 0-1.153-.216h-8.683c-.823 0-1.571.336-2.115.878a2.983 2.983 0 0 0-.878 2.116v1.387h4.79c.635 0 1.233.117 1.793.348a4.674 4.674 0 0 1 1.518 1.023l4.639 4.64c.449.45.79.956 1.023 1.518.231.559.347 1.157.347 1.793v12.856-.001Zm-9.32-20.49H4.68c-.824 0-1.571.337-2.115.88a2.982 2.982 0 0 0-.879 2.115v20.57c0 .824.336 1.571.879 2.116.542.542 1.29.878 2.115.878h13.323c.824 0 1.572-.336 2.115-.878.543-.543.879-1.29.879-2.116v-15.93c0-.42-.072-.806-.217-1.153a2.948 2.948 0 0 0-.662-.963l-4.638-4.64a3.008 3.008 0 0 0-.963-.661 2.992 2.992 0 0 0-1.153-.217Zm10.828-.867a.843.843 0 1 1 0 1.687H21.84a.843.843 0 0 1-.844-.844v-2.35a.843.843 0 1 1 1.688 0V6.89h1.508l-.002-.001Z"
    />
  </svg>
)
export default SvgComponent