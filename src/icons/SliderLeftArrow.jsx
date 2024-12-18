import React from "react";

function Icon({className}) {
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
        <g filter="url(#filter0_b_3031_29448)">
          <rect
            width="42.252"
            height="42.252"
            x="0.5"
            fill="#000"
            fillOpacity="0.05"
            rx="21.126"
          ></rect>
        </g>
        <path
          fill="#5C5C5C"
          fillOpacity="0.7"
          d="M20.462 21.13l4.938 4.938-1.41 1.41-6.35-6.348 6.35-6.349 1.41 1.411-4.938 4.938z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_3031_29448"
          width="113.65"
          height="113.65"
          x="-35.2"
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
            result="effect1_backgroundBlur_3031_29448"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_3031_29448"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
