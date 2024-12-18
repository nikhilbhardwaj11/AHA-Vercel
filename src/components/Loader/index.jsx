import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      
    };
  }, []);
  return (
    <div className="custom-loader-bg">
      <div className="custom-loader"/>
    </div>
  );
};

export default Loader;
