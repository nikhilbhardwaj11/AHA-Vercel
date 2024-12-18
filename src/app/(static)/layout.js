import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";

const staticLayout = ({ children }) => {
  return (
    <div className=" container-fuild max-w-full ">
        <DynamicBreadcrumb />      
      
      {children}
    </div>
  );
};

export default staticLayout;
