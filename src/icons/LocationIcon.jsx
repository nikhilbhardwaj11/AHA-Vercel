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
        d="M10 19.77l-5.303-5.303a7.5 7.5 0 1110.606 0L10 19.771zm4.125-6.481a5.833 5.833 0 10-8.25 0L10 17.414l4.125-4.125zM10 10.83a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333z"
      ></path>
    </svg>
  );
}

export default Icon;
