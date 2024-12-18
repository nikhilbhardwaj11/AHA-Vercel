function Icon({ fill = "#000", width = "15", height = "16", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 16"
      className={className}
    >
      <path
        fill={fill}
        d="M2.403 15.084L.414 13.095l5.114-5.114L.414 2.903 2.403.914l5.114 5.114L12.595.914l1.99 1.989L9.47 7.98l5.114 5.114-1.989 1.99L7.517 9.97l-5.114 5.114z"
      ></path>
    </svg>
  );
}

export default Icon;
