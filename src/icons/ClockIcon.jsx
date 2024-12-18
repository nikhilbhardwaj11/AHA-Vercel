function Icon({color="#000"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M9.997 18.33a8.333 8.333 0 110-16.666 8.333 8.333 0 010 16.667zm0-1.666a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zm.834-6.667h3.333v1.667h-5V5.831h1.667v4.166z"
      ></path>
    </svg>
  );
}

export default Icon;
