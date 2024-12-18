import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CompareOpenBoxModal() {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <button className=" text-blue5  text-[13px] leading-[20px] bg-transparent border-0">
          See Details...
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-w-[729px] rounded-[20px] p-0 "
        classNameBtn="top-[42px] right-[57px]"
      >
        <DialogHeader>
          <DialogTitle className=" border-b border-b-gray21 text-[25px] py-[30px] px-4 leading-[37px] font-semibold text-blue2">
            Compare Open-Box Conditions
          </DialogTitle>
          <DialogDescription>
            <div className=" px-9 pb-[40px]">
              <table className="divide-y divide-gray-200 w-full">
                <thead className=" text-[13px] text-black2 font-semibold">
                  <tr>
                    <th className="px-6 py-3 text-lef"></th>
                    <th className="px-6 py-3 text-left border-l border-l-gray21  ">
                      <p className="bg-[#D3FFED] inline-flex px-[5px] rounded-[5px]  ">
                        Excellent
                      </p>
                    </th>
                    <th className="px-6 py-3 text-left ">
                      <p className="bg-[#FFC81199] inline-flex px-[5px] rounded-[5px]  ">
                        Good
                      </p>
                    </th>
                    <th className="px-6 py-3 text-left ">
                      <p className="bg-[#E075214D] inline-flex px-[5px] rounded-[5px]  ">
                        Fair
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y text-left text-black2 divide-gray-200 text-[13px]">
                  <tr>
                    <td className="px-6 font-semibold py-4 whitespace-nowrap  ">
                      Physical Condition
                    </td>
                    <td className=" px-6 py-4 border-l border-l-gray21  ">
                      Fully functional & works like new
                    </td>
                    <td className="px-6 py-4  ">
                      Fully functional & works like new
                    </td>

                    <td className="px-6 py-4  ">
                      Fully functional & works like new
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6  font-semibold py-4 whitespace-nowrap  ">
                      Working Condition
                    </td>
                    <td className=" px-6 py-4  border-l border-l-gray21 ">
                      Looks like new
                    </td>
                    <td className="px-6 py-4  ">
                      May have minor scratches or dents
                    </td>

                    <td className="px-6 py-4  ">
                      May have larger dents or scratches
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 font-semibold py-4 whitespace-nowrap  ">
                      Parts & Accessories
                    </td>
                    <td className=" px-6 py-4 border-l border-l-gray21  ">
                      Includes all original parts & accessories
                    </td>
                    <td className="px-6 py-4  ">
                      May be missing non-essential parts & accessories
                    </td>

                    <td className="px-6 py-4  ">
                      May be missing non-essential parts & accessories
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 font-semibold py-4 whitespace-nowrap  ">
                      Packaging
                    </td>
                    <td className=" px-6 py-4  border-l border-l-gray21 ">
                      Includes all original packaging
                    </td>
                    <td className="px-6 py-4  ">
                      May be missing original packaging
                    </td>

                    <td className="px-6 py-4  ">
                      May be missing original packaging
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 font-semibold py-4 whitespace-nowrap border-b border-b-gray21  ">
                      Delivery Options
                    </td>
                    <td className=" px-6 py-4  border-l border-l-gray21 border-b border-b-gray21 ">
                      Store pickup & shipping when available.
                    </td>
                    <td className="px-6 py-4  border-b border-b-gray21 ">
                      Store pickup & shipping when available.
                    </td>

                    <td className="px-6 py-4 border-b border-b-gray21  ">
                      Store pickup & shipping when available.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
