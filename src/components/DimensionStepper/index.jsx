import StepOneImg from "@/assets/images/fitfinder_refrigerator_page0.png";
import StepTwoImg from "@/assets/images/fitfinder_refrigerator_page1.png";
import StepThreeImg from "@/assets/images/fitfinder_refrigerator_page2.png";
import StepFourImg from "@/assets/images/fitfinder_refrigerator_page3.png";
import StepFive_1Img from "@/assets/images/fitfinder_refrigerator_page4_0.png";
import StepFive_2Img from "@/assets/images/fitfinder_refrigerator_page4_1.png";
import StepFive_3Img from "@/assets/images/fitfinder_refrigerator_page4_2.png";
import DimensionsIcon from "@/icons/DimensionsIcon";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { heightOptions, inchOptions, widthOptions } from "./sizes";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const StepOne = () => {
  return (
    <div className="grid gap-3 grid-cols-2 items-center min-h-[444px] sm:grid-cols-1 max-h-310 overflow-auto">
      <div className=" sm:flex sm:justify-center">
        <Image
          src={StepOneImg}
          alt="step-one"
          className=" w-full max-w-[300px] sm:max-w-[200px]"
        />
      </div>
      <div>
        <h3 className=" text-[30px] font-semibold text-left mb-6 leading-9 sm:text-[24px] sm:leading-7 sm:mb-4 ">
          Remember to measure the open space and not the appliance.
        </h3>
        <p className=" my-4 text-left text-[14px]">
          This way we can show the refrigerators that fit within your space,
          while allowing for proper ventilation.
        </p>
      </div>
    </div>
  );
};

const StepTwo = ({ handleChange = {}, dimensions = {} }) => {
  return (
    <div className="grid gap-3 grid-cols-2 items-center min-h-[444px] sm:grid-cols-1 max-h-310 overflow-auto">
      <div>
        <Image
          src={StepTwoImg}
          alt="step-two"
          className=" w-full max-w-[300px] sm:max-w-[200px]"
        />
      </div>
      <div>
        <h3 className=" text-[30px] font-semibold text-left mb-6 leading-9  sm:text-[24px] sm:leading-7 sm:mb-4">
          Let&apos;s start with the width.
        </h3>
        <p className=" my-4 text-left text-[14px]">
          The width of your space may vary from place to place, so take multiple
          mesurements and enter the smallest ones.
        </p>
        <h5 className="  my-4 text-left text-[14px] font-semibold">
          The width of your space
        </h5>
        <div className=" flex items-center gap-3 flex-wrap 500:grid 500:grid-cols-1frAuto">
          <Select
            value={dimensions.selectedWidth || "select"}
            onValueChange={(value) => handleChange("selectedWidth", value)}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {widthOptions &&
                  widthOptions.length > 0 &&
                  widthOptions?.map((width, index) => {
                    return (
                      <SelectItem key={index} value={width?.value}>
                        {width?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">and</p>
          <Select
            value={dimensions.selectedWidthInch || "select"}
            onValueChange={(value) => handleChange("selectedWidthInch", value)}
            disabled={!dimensions.selectedWidth}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {inchOptions &&
                  inchOptions.length > 0 &&
                  inchOptions?.map((inch, index) => {
                    return (
                      <SelectItem key={index} value={inch?.value}>
                        {inch?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">Inches</p>
        </div>
      </div>
    </div>
  );
};
const StepThree = ({ handleChange = {}, dimensions = {} }) => {
  return (
    <div className="grid gap-3 grid-cols-2 items-center min-h-[444px] sm:grid-cols-1 max-h-310 overflow-auto">
      <div>
        <Image
          src={StepThreeImg}
          alt="step-three"
          className=" w-full max-w-[300px] sm:max-w-[200px]"
        />
      </div>
      <div>
        <h3 className=" text-[30px] font-semibold text-left mb-6 leading-9  sm:text-[24px] sm:leading-7 sm:mb-4">
          Next, let&apos;s measure the height.
        </h3>
        <p className=" my-4 text-left text-[14px]">
          Measure from the floor to lowest point of your upper cabinet.
        </p>
        <h5 className="  my-4 text-left text-[14px] font-semibold">
          The height of your space
        </h5>
        <div className=" flex items-center gap-3 flex-wrap 500:grid 500:grid-cols-1frAuto">
          <Select
            value={dimensions.selectedHeight || "select"}
            onValueChange={(value) => handleChange("selectedHeight", value)}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {heightOptions &&
                  heightOptions.length > 0 &&
                  heightOptions?.map((height, index) => {
                    return (
                      <SelectItem key={index} value={height?.value}>
                        {height?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">and</p>
          <Select
            value={dimensions.selectedHeightInch || "select"}
            onValueChange={(value) => handleChange("selectedHeightInch", value)}
            disabled={!dimensions.selectedHeight}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {inchOptions &&
                  inchOptions.length > 0 &&
                  inchOptions?.map((inch, index) => {
                    return (
                      <SelectItem key={index} value={inch?.value}>
                        {inch?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">Inches</p>
        </div>
      </div>
    </div>
  );
};
const StepFour = ({ handleChange = {}, dimensions = {} }) => {
  return (
    <div className="grid gap-3 grid-cols-2 items-center min-h-[444px] sm:grid-cols-1 max-h-310 overflow-auto">
      <div>
        <Image
          src={StepFourImg}
          alt="step-img"
          className=" w-full max-w-[300px] sm:max-w-[200px]"
        />
      </div>
      <div>
        <h3 className=" text-[30px] font-semibold text-left mb-6 leading-9  sm:text-[24px] sm:leading-7 sm:mb-4">
          Are you interested in counter-depth?
        </h3>
        <p className=" my-4 text-left text-[14px]">
          Counter-depth fridges are more shallow, so they blend well with
          standard 25-inch counters.
        </p>
        <h5 className="  my-4 text-left text-[14px] font-semibold">
          What are you looking for:
        </h5>
        <div className=" flex items-center gap-3 flex-wrap 500:grid 500:grid-cols-1frAuto">
          <Select
            value={dimensions.selectedDepth || "select"}
            onValueChange={(value) => handleChange("selectedDepth", value)}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {widthOptions &&
                  widthOptions.length > 0 &&
                  widthOptions?.map((width, index) => {
                    return (
                      <SelectItem key={index} value={width?.value}>
                        {width?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">and</p>
          <Select
            value={dimensions.selectedDepthInch || "select"}
            onValueChange={(value) => handleChange("selectedDepthInch", value)}
            disabled={!dimensions.selectedDepth}
          >
            <SelectTrigger className="w-[100px] rounded-[8px] text-[14px] 500:w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[14px]">
                {inchOptions &&
                  inchOptions.length > 0 &&
                  inchOptions?.map((inch, index) => {
                    return (
                      <SelectItem key={index} value={inch?.value}>
                        {inch?.label}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px]">Inches</p>
        </div>
      </div>
    </div>
  );
};
const StepFive = () => {
  return (
    <div className=" min-h-[444px]">
      <h3 className=" text-[30px] font-semibold text-center py-6 leading-9 sm:py-4 sm:text-[24px] sm:leading-7 ">
        Other things to keep in mind:
      </h3>
      <div className="grid grid-cols-150 gap-y-3 gap-x-5 items-start max-h-400 overflow-auto ">
        <div className="grid gap-y-2 gap-x-4 ">
          <Image
            src={StepFive_1Img}
            alt="step-img"
            className=" w-full max-w-[200px]"
          />
          <h5 className=" text-left text-[14px] font-semibold">
            How will the doors open?
          </h5>
          <p className=" text-left text-[14px]">
            Do you have any obstacles that will stop doors and drawers from
            fully opening?
          </p>
        </div>
        <div className="grid gap-y-2 gap-x-4">
          <Image
            src={StepFive_2Img}
            alt="step-img"
            className=" w-full max-w-[200px]"
          />
          <h5 className=" text-left text-[14px] font-semibold">
            Hinge-side door space.
          </h5>
          <p className=" text-left text-[14px]">
            If your refrigerator is next to a wall allow 3 3/4 inches between
            the wall and hinge side of the door so it can swing open.
          </p>
        </div>
        <div className="grid gap-y-2 gap-x-4">
          <Image
            src={StepFive_3Img}
            alt="step-img"
            className=" w-full max-w-[200px]"
          />
          <h5 className=" text-left text-[14px] font-semibold">
            Deliver path is clear.
          </h5>
          <p className=" text-left text-[14px]">
            Measure doorways, hallways, around islands, and anywhere there may
            be a tight fit.
          </p>
        </div>
      </div>
    </div>
  );
};

const Stepper = ({
  setIsOpen,
  dimensions,
  setDimensions,
  specifications,
  willItFit,
  setWillItFit,
  convertToDecimal,
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 5; // Total number of steps

  // const convertToDecimal = (whole, fraction) => {
  //   const wholeNumber = parseInt(whole); // Convert whole number
  //   if (fraction) {
  //     const [numerator, denominator] = fraction.split("/").map(Number);
  //     return wholeNumber + numerator / denominator;
  //   }
  //   return wholeNumber; // If no fraction, return the whole number
  // };

  const formatSpecifications = (data) => {
    const matches = data?.match(/\d+(\.\d+)?/g);
    return parseFloat(matches[0]) || null;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    if (step === 5) {
      setIsOpen(false);
      const productDepth = specifications?.find(
        (item) => item.key === "Depth (in.)"
      )?.value;
      const height = specifications?.find(
        (item) => item.key === "Height (in.)"
      )?.value;
      const width = specifications?.find(
        (item) => item.key === "Width (in.)"
      )?.value;

      const selectedWidth = convertToDecimal(
        dimensions.selectedWidth,
        dimensions.selectedWidthInch
      );
      const selectedHeight = convertToDecimal(
        dimensions.selectedHeight,
        dimensions.selectedHeightInch
      );

      const selectedDepth = convertToDecimal(
        dimensions.selectedDepth,
        dimensions.selectedDepthInch
      );

      if (
        selectedHeight >= formatSpecifications(height) &&
        selectedWidth >= formatSpecifications(width) &&
        selectedDepth >= formatSpecifications(productDepth)
      ) {
        setWillItFit(true);
      }
    }
  };
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  // Calculate the percentage for the progress bar
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  // Update dimension values
  const handleChange = (type, value) => {
    setDimensions((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const isDisabled =
    (step === 2 && !dimensions.selectedWidthInch) ||
    (step === 3 && !dimensions.selectedHeightInch) ||
    (step === 4 && !dimensions.selectedDepthInch);

  return (
    <div>
      {/* Step Titles */}
      <div className="text-center mb-3">
        {step === 1 && <StepOne />}
        {step === 2 && (
          <StepTwo
            handleChange={handleChange}
            dimensions={dimensions}
            setDimensions={setDimensions}
          />
        )}
        {step === 3 && (
          <StepThree
            handleChange={handleChange}
            dimensions={dimensions}
            setDimensions={setDimensions}
          />
        )}
        {step === 4 && (
          <StepFour handleChange={handleChange} dimensions={dimensions} />
        )}
        {step === 5 && <StepFive />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 items-center">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded-[6px] text-[14px]   ${
            step === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed hidden "
              : "text-[#0B223C] bg-transparent block border border-[#0B223C]"
          }`}
          disabled={step === 1}
        >
          Back
        </button>
        <div className="h-2 bg-gray-200 rounded-full flex-1">
          <div
            className="h-full bg-[#0C253F] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button
          onClick={handleNext}
          className={`rounded-[6px] px-4 py-2 text-[14px]  ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#CE000E] text-white"
          }`}
          disabled={isDisabled}
        >
          {!isDisabled && step === 5 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

const WillItFitModal = ({ specifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const convertToDecimal = (whole, fraction) => {
    const wholeNumber = parseInt(whole, 10); // Convert whole number
    let decimalValue = wholeNumber; // Initialize with the whole number
    if (fraction) {
      const [numerator, denominator] = fraction.split("/").map(Number);
      decimalValue += numerator / denominator; // Add the fractional part
    }
    return Math.round(decimalValue * 100) / 100; // Round to 2 decimal places
  };
  
  const [dimensions, setDimensions] = useState({
    selectedWidth: null,
    selectedWidthInch: null,
    selectedHeight: null,
    selectedHeightInch: null,
    selectedDepth: null,
    selectedDepthInch: null,
  });
  const [willItFit, setWillItFit] = useState(false);

  const handleSeeMore = () => {
    const decimalHeight = convertToDecimal(
      dimensions?.selectedHeight,
      dimensions?.selectedHeightInch
    );
    const decimalWidth = convertToDecimal(
      dimensions?.selectedWidth,
      dimensions?.selectedWidthInch
    );
    const decimalDepth = convertToDecimal(
      dimensions?.selectedDepth,
      dimensions?.selectedDepthInch
    );
    router.push(
      `/refrigerators?h=${decimalHeight}&w=${decimalWidth}&d=${decimalDepth}`
    );
  };

  const hasSelectedDimensions =
    dimensions?.selectedHeight &&
    dimensions?.selectedWidth &&
    dimensions?.selectedDepth;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-[14px] lg:gap-[9px]">
        {/* Icon and Dimensions Info */}
        <DimensionsIcon className="mt-[14px] lg:hidden" />
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="text-black2 font-medium pt-[10px] lg:pt-0">
            <p className="text-sm leading-[21px] lg:inline-flex lg:items-center gap-[9px]">
              <DimensionsIcon className="hidden lg:inline-block" />
              Dimensions & Fitting
            </p>
            <p className="text-sm leading-[21px] font-semibold">
              {willItFit
                ? `This Refrigerator Fits Your Space`
                : `This Refrigerator Doesn't Fits Your Space`}
            </p>
            {!willItFit && hasSelectedDimensions && (
              <p
                className="text-sm text-blue5 underline cursor-pointer"
                onClick={() => handleSeeMore()}
              >
                See more refrigerators that fit
              </p>
            )}
          </div>
        </div>

        {/* Your Space Measurements */}
        <DialogTrigger asChild>
          <div className="lg:w-full text-black2 pt-[10px] px-[13px] pb-[13px] border border-gray13 rounded-10 cursor-pointer">
            <p className="text-sm leading-[21px] font-medium">
              Your Space Measurements
            </p>
            <p className="text-sm leading-[21px]">
              W{" "}
              <span className="font-normal">
                {dimensions?.selectedWidth || ""}{" "}
                {dimensions?.selectedWidthInch || ""}
              </span>{" "}
              x H{" "}
              <span className="font-normal">
                {dimensions?.selectedHeight || ""}{" "}
                {dimensions?.selectedHeightInch || ""}
              </span>
              x D{" "}
              <span className="font-normal">
                {dimensions?.selectedDepth || ""}{" "}
                {dimensions?.selectedDepthInch || ""}
              </span>
              <span className="text-blue5"> (Edit)</span>
            </p>
          </div>
        </DialogTrigger>
      </div>

      <DialogTitle></DialogTitle>
      <DialogContent className=" w-modalWidthMobile max-w-[700px] rounded-10">
        <Stepper
          setIsOpen={setIsOpen}
          dimensions={dimensions}
          setDimensions={setDimensions}
          specifications={specifications}
          willItFit={willItFit}
          setWillItFit={setWillItFit}
          convertToDecimal={convertToDecimal}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WillItFitModal;
