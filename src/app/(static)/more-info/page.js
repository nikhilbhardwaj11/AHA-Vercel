"use client";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import BackIcon from "@/assets/images/back-arrow-icon.png";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/ui/customInput";
import { Button } from "@/components/ui/button";


const MoreInfo = () => {
  const router = useRouter();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div className="bg-[#FBFBFB]">
        <div className="  px-5 container max-w-1440 py-5 mx-auto my-0 ">
      <button
        onClick={() => router.push("/careers")}
        className=" inline-flex items-center gap-3 text-[18px] leading-[24px] font-semibold mb-[30px]"
      >
        BACK TO LISTINGS <Image src={BackIcon} width={30} alt="icon" />{" "}
      </button>
     

      <div className="flex items-start gap-x-14 gap-y-3 lg:flex-col">
        <div className="flex-1">
          <h2 className="text-[36px] leading-[54px] mb-[48px] font-bold text-[#001833] lg:text-[30px] lg:leading-9 lg:mb-9">
            Warehouse Operations Lead
          </h2>
          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Responsibilities
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nullam dictum ligula a gravida porta.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nam pellentesque orci ut odio blandit, sit amet elementum augue
                venenatis.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Vivamus semper magna suscipit leo malesuada, eu dictum velit
                varius.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nulla non enim eu quam rutrum dictum in non urna.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Integer et felis a purus convallis condimentum nec vel eros.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Vestibulum porta libero nec aliquet blandit.
              </li>
            </ul>
          </div>

          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Qualifications
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nullam dictum ligula a gravida porta.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nam pellentesque orci ut odio blandit, sit amet elementum augue
                venenatis.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Vivamus semper magna suscipit leo malesuada, eu dictum velit
                varius.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Nulla non enim eu quam rutrum dictum in non urna.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Integer et felis a purus convallis condimentum nec vel eros.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Vestibulum porta libero nec aliquet blandit.
              </li>
            </ul>
          </div>

          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Job Type
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Full-Time
              </li>
            </ul>
          </div>

          <div className="text-[#001833]">
            <h4 className="text-[24px] leading-[36px] font-medium mb-4">
              Salary
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Salary Review: Yearly
              </li>
            </ul>
          </div>
          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Schedule
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Weekly: 5 days.
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Weekend: Friday.Saturday
              </li>
            </ul>
          </div>
          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Benefits
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Dental Insurance
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Employee Discount
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Health Insurance
              </li>
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Paid Time Off
              </li>
            </ul>
          </div>
          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Ability to commute/relocate
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                Hayward, CA 94545: Reliably commute or planning to relocate
                before starting work (Required)
              </li>
            </ul>
          </div>
          <div className="text-[#001833]">
            <h4 className=" text-[24px] leading-[36px] font-medium mb-4">
              Work Location
            </h4>
            <ul className="mb-[54px] list-disc pl-[20px] lg:mb-[30px]">
              <li className=" text-[16px] leading-[24px] mb-[9px]">
                In Person
              </li>
            </ul>
          </div>
        </div>
        <div className=" sticky top-[227px] border boder-[#D4D4D4] max-w-[405px] flex-1 rounded-[10px] p-[25px] bg-white">
          <h3 className=" text-[18px] font-bold leading-[24px] mb-7">
            Apply Now
          </h3>
          <div>
            <div className="grid grid-cols-2 gap-x-5 ">
              <CustomInput label="First Name*" />
              <CustomInput label="Last Name*" />
            </div>
            <div className="grid grid-cols-1 gap-x-5 ">
              <CustomInput label="Email*" />
              <CustomInput label="Confirm Email*" />
              <CustomInput label="Phone Number*" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree with the stated terms
              </label>
            </div>
          <div className="flex justify-center ">
            
            <Button className=" bg-[#D2232A] rounded-[8px] h-[50px] w-[180px]">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MoreInfo;
