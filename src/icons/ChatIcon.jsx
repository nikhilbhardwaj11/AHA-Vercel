import React from "react";

function Icon({fill="#fff", width="11px" ,height="13px",className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 11 13"
      className={className}
    >
      <path
        fill={fill}
        d="M0 12.373V2.18c0-.307.095-.568.286-.781a.904.904 0 01.7-.32h5.478a2.55 2.55 0 00-.047.454c-.002.15.007.304.026.46H.986c-.042 0-.08.02-.115.059a.189.189 0 00-.053.128v7.968l.764-.844h7.796c.042 0 .08-.02.115-.058a.189.189 0 00.052-.13V4.504c.157-.04.303-.09.437-.15.135-.061.262-.141.382-.24v5.003c0 .308-.096.568-.287.781a.904.904 0 01-.7.32H1.93L0 12.373zM.818 2.18v7.546-7.733.187zM9 3.351c-.416 0-.77-.163-1.062-.489A1.716 1.716 0 017.5 1.676c0-.465.146-.86.438-1.187C8.23.163 8.584 0 9 0c.416 0 .77.163 1.062.49.292.325.438.72.438 1.186 0 .464-.146.86-.438 1.186-.292.326-.646.49-1.062.49z"
      ></path>
    </svg>
  );
}

export default Icon;