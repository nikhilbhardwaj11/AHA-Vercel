"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

// Example function to disable specific dates
const disabledDates = [
  new Date(2024, 7, 17), // August 17, 2024
  new Date(2024, 7, 19), // August 19, 2024
];

export function DatePicker({
  date,
  onChange,
  label = " Select delivery date",
  className,
}) {
  const [isFocused, setIsFocused] = useState(false);

  // Function to check if a date should be disabled (all past dates including today)
  const isDateDisabled = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 to compare only dates

    // Disable if date is earlier than today or in the disabledDates array
    return (
      day <= today ||
      disabledDates.some(
        (disabledDate) =>
          disabledDate.getDate() === day.getDate() &&
          disabledDate.getMonth() === day.getMonth() &&
          disabledDate.getFullYear() === day.getFullYear()
      )
    );
  };

  return (
    <div className={`relative mb-5 ${className}`}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full h-[50px] px-3 py-2 border border-gray-300 rounded-[8px] text-black focus:outline-none focus:border-blue-500 mt-1 flex items-center justify-between",
              !date && "text-muted-foreground"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <span className={cn(date ? "" : "text-gray-500")}>
              {date ? format(date, "PPP") : ""}
            </span>
            <CalendarIcon className="h-5 w-5 text-gray-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onChange(selectedDate);
              // setDate(selectedDate);
              setIsFocused(false);
            }}
            initialFocus
            disabled={isDateDisabled}
            className=""
          />
        </PopoverContent>
      </Popover>
      <label
        className={cn(
          "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none bg-gray-50 px-1 text-[14px]",
          {
            "top-[2px] text-xs text-gray-700 bg-white": isFocused || date,
          }
        )}
      >
        {label}
      </label>
    </div>
  );
}
