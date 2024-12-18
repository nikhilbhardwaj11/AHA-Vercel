import React from "react";

function Icon({color="#0B223C",className}) {
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
        fill={color}
        d="M8.476 0h.101c2.342.003 4.418.957 6.092 2.576a8.15 8.15 0 01.753.92c1.34 1.83 1.871 4.116 1.54 6.355-.216 1.324-.71 2.592-1.518 3.669-.13.164-.13.164-.164.365a.74.74 0 00.132.146l.088.089.098.096a1672.368 1672.368 0 01.674.668l.87.863c.246.242.49.485.735.728l.345.341.212.211.097.095c.262.263.443.537.469.916-.012.298-.132.523-.323.744-.205.173-.39.219-.654.217l-.158.001c-.62-.072-1.182-.867-1.6-1.287l-.212-.213-.555-.556-.567-.57-1.11-1.115-.19.127-.107.07a8.768 8.768 0 00-.247.173c-1.72 1.218-3.975 1.69-6.048 1.359-1.663-.293-3.176-.97-4.419-2.13a5.655 5.655 0 00-.256-.222 3.84 3.84 0 01-.456-.485l-.058-.07a9.23 9.23 0 01-.915-1.304l-.048-.081C-.02 10.815-.257 8.472.265 6.377c.218-.817.537-1.618.993-2.332l.056-.089C2.404 2.261 3.968 1.076 5.858.41l.154-.055C6.81.089 7.642 0 8.476 0zM3.956 3.78l-.119.11C2.704 4.976 1.99 6.577 1.952 8.15a28.3 28.3 0 000 .451c.002.486.027.954.146 1.427l.023.094a6.624 6.624 0 001.393 2.698l.06.07a6.531 6.531 0 004.242 2.226c1.88.145 3.585-.382 5.031-1.587l.107-.087c.207-.176.384-.367.557-.577l.11-.131c.715-.865 1.17-1.874 1.394-2.972l.03-.138a6.269 6.269 0 00-.1-2.63C14.673 5.85 14.12 4.867 13.334 4l-.103-.114c-1.198-1.263-2.847-1.881-4.558-1.977-1.772-.036-3.439.657-4.717 1.87z"
      ></path>
    </svg>
  );
}

export default Icon;