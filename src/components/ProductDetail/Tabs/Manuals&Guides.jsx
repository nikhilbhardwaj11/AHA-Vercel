import Link from "next/link";

export default function ManualsGuides({ productManualGuides = [] }) {
  return (
    <div className="py-10 px-9 bg-white flex gap-3 flex-wrap justify-between lg:p-5 lg:pb-1">
      <div className=" flex-1 max-w-[502px] text-blue3 text-[17px] leading-[22px] border border-gray16 border-b-0">
        {productManualGuides.length > 0 &&
          productManualGuides?.map(({ fileName, fileURL, id }) => (
            <div className="grid grid-cols-146" key={id}>
              <p className=" bg-gray17 py-[9px] font-medium px-4 border-b border-gray16 lg:text-[14px]">
                {fileName}
              </p>
              <Link
                href={fileURL}
                target="_blank"
                className=" px-[34px] py-[9px] border-b border-gray16 max-w-[200px] lg:text-[14px]"
              >
                Download
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
