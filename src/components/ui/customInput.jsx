"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CustomInput = React.forwardRef(
  ({ label, labelClassName, isInvalid = false, errorMessage = "", ...props }, ref) => {
    return (
      <div className="relative mb-5">
        <Input
          ref={ref} // Forward the ref to the Input component
          className={cn(
            "w-full h-[50px] px-3 py-2 border border-gray-300 rounded-[8px] text-black focus:outline-none focus:border-blue-500 mt-1 labelInput",
            isInvalid && "border-red-500",
            isInvalid && "focus:border-red-500"
          )}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none bg-gray-50 px-1 text-[14px]",
            {
              "top-[6px] text-xs text-gray-700 bg-white": props.value,
            },
            labelClassName
          )}
        >
          {label}
        </label>
        {isInvalid && (
          <p className="text-red-600 text-[10px] absolute bottom-[-18px] left-[12px]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
