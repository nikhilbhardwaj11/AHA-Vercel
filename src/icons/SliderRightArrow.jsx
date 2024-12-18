function Icon({
  className,
  bg = "#5C5C5C",
  arrowColor = "#000",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      fill="none"
      viewBox="0 0 43 43"
      className={className}
    >
      <g opacity="0.67">
        <g filter="url(#filter0_b_3031_29452)">
          <rect
            width="42.252"
            height="42.252"
            fill={arrowColor}
            fillOpacity="0.05"
            rx="21.126"
            transform="matrix(-1 0 0 1 43 0)"
          ></rect>
        </g>
        <path
          fill={bg}
          fillOpacity="0.7"
          d="M23.038 21.13L18.1 26.068l1.41 1.41 6.35-6.348-6.35-6.349-1.41 1.411 4.938 4.938z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_3031_29452"
          width="113.65"
          height="113.65"
          x="-34.95"
          y="-35.7"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="17.85"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_3031_29452"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_3031_29452"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
