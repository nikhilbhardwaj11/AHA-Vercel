import { useState } from "react";
import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";

const RangeSlider = ({ min, max, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);
  const minDistance = 100; // Set a minimum distance between the two thumbs

  const handlePriceChange = (value) => {
    const [lower, upper] = value;
    if (upper - lower >= minDistance) {
      setPriceRange(value);
    }  };

  return (
    <div className="w-full pt-2">
      <Slider.Root
        className={cn("relative cursor-pointer flex items-center w-full")}
        value={priceRange}
        onValueChange={handlePriceChange}
        onValueCommit={(value) => {
          if (onPriceChange) {
            onPriceChange(value);
          }
        }}
        min={min}
        max={max}
        step={100}
      >
        <Slider.Track className="bg-gray-300 relative h-[5px] grow rounded">
          <Slider.Range className="absolute bg-[#0b223c] h-[5px] rounded" />
        </Slider.Track>
        <Slider.Thumb className="ml-[1px] block w-5 h-5 bg-[#0b223c] rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" />
        <Slider.Thumb className="mr-[1px] block w-5 h-5 bg-[#0b223c] rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" />
      </Slider.Root>
      <div className="flex justify-between pt-4  text-lg">
        <span>${priceRange[0]}</span>to
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
