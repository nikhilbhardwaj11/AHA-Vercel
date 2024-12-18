
import RebatesCard from "@/components/RebatesCard/RebatesCard";

export default function Rebates({ rebates }) {
  return (
    <div className="py-10 px-9 grid grid-cols-4 gap-5 mxl:grid-cols-3 lg:p-0 lg:grid-cols-283 ">
      {rebates.map((rebates) => (
        <RebatesCard key={rebates.id} data={rebates} />
      ))}
    </div>
  );
}
