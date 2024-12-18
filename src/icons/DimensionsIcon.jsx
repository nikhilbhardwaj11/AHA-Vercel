import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      fill="none"
      viewBox="0 0 20 13"
      className={className}
    >
      <path
        fill="#1C1B1F"
        d="M2 12.831c-.55 0-1.02-.2-1.413-.6A1.993 1.993 0 010 10.784V2.601c0-.563.196-1.045.588-1.445C.979.755 1.45.555 2 .555h16c.55 0 1.02.2 1.413.6.391.401.587.883.587 1.446v8.184c0 .563-.196 1.044-.587 1.445-.392.4-.863.601-1.413.601H2zm0-2.046h16V2.601h-3v4.092h-2V2.6h-2v4.092H9V2.6H7v4.092H5V2.6H2v8.184z"
      ></path>
    </svg>
  );
}

export default Icon;