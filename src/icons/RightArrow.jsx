function Icon({ color = "#0B223C", width = "12px", height = "19px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 19"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2.532"
        d="M1.997 17.195l7.597-7.597-7.597-7.597"
      ></path>
    </svg>
  );
}

export default Icon;
