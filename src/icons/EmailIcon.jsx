import React from "react";

function Icon({fill="#1C1B1F"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      fill="none"
      viewBox="0 0 19 17"
    >
      <path
        fill={fill}
        d="M1.808 16.796c-.505 0-.933-.194-1.283-.584-.35-.389-.525-.865-.525-1.427V2.12C0 1.558.175 1.083.525.693.875.304 1.303.11 1.808.11h15.384c.505 0 .933.195 1.283.584.35.39.525.865.525 1.427v12.665c0 .562-.175 1.038-.525 1.427-.35.39-.778.584-1.283.584H1.808zM9.5 9.073l-8-5.69v11.402c0 .1.029.182.087.246a.284.284 0 00.22.097h15.385c.09 0 .164-.032.221-.097a.354.354 0 00.087-.246V3.383l-8 5.69zm0-1.733l7.846-5.562H1.654L9.5 7.34zm-8-3.957V1.778v13.007c0 .1.029.182.087.246a.284.284 0 00.22.097H1.5V3.383z"
      ></path>
    </svg>
  );
}

export default Icon;
