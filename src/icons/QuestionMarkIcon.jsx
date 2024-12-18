import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
      className={className}
    >
      <path
        fill="#1C1B1F"
        d="M9.489 15.115a.983.983 0 00.723-.295.986.986 0 00.296-.725.983.983 0 00-.296-.723.986.986 0 00-.724-.295.983.983 0 00-.723.296.985.985 0 00-.296.724c0 .285.099.526.296.723a.986.986 0 00.724.295zm-.708-3.58h1.407c.013-.493.085-.886.217-1.18.131-.294.45-.684.957-1.17.44-.44.776-.846 1.01-1.219.234-.372.351-.812.351-1.319 0-.86-.31-1.533-.928-2.017-.618-.484-1.35-.726-2.195-.726-.835 0-1.525.223-2.072.668-.547.446-.937.97-1.17 1.574l1.284.516c.122-.332.33-.656.625-.97.295-.315.733-.473 1.314-.473.59 0 1.028.162 1.31.486.283.324.425.68.425 1.068 0 .34-.097.65-.291.933-.194.282-.44.554-.74.817-.657.592-1.072 1.065-1.245 1.418-.173.352-.26.883-.26 1.593zM9.5 19c-1.313 0-2.548-.25-3.704-.748a9.596 9.596 0 01-3.017-2.03 9.595 9.595 0 01-2.032-3.016A9.246 9.246 0 010 9.502c0-1.314.25-2.55.748-3.706a9.596 9.596 0 012.03-3.017A9.594 9.594 0 015.794.75 9.246 9.246 0 019.498 0c1.314 0 2.55.25 3.706.748a9.596 9.596 0 013.017 2.03 9.594 9.594 0 012.03 3.016A9.247 9.247 0 0119 9.498c0 1.314-.25 2.55-.748 3.706a9.596 9.596 0 01-2.03 3.017 9.595 9.595 0 01-3.016 2.03A9.247 9.247 0 019.502 19zM9.5 17.5c2.233 0 4.125-.775 5.675-2.325 1.55-1.55 2.325-3.442 2.325-5.675 0-2.233-.775-4.125-2.325-5.675C13.625 2.275 11.733 1.5 9.5 1.5c-2.233 0-4.125.775-5.675 2.325C2.275 5.375 1.5 7.267 1.5 9.5c0 2.233.775 4.125 2.325 5.675C5.375 16.725 7.267 17.5 9.5 17.5z"
      ></path>
    </svg>
  );
}

export default Icon;