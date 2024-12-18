"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import SearchIcon from "@/icons/SearchIcon";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { useGetSuggestionsQuery } from "@/redux/apiSlices/supportApi";
import { useDebounce } from "use-debounce";
import { useQueryParams } from "@/utils/useQueryParams";

const GlobalSearch = () => {
  const { keyword = "" } = useQueryParams();
  const [inputValue, setInputValue] = useState(keyword);
  const [inputFocused, setInputFocused] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();
  const [value] = useDebounce(inputValue, 500);

  const { data } = useGetSuggestionsQuery(value, { skip: !inputValue });
  const { suggestions = [] } = data?.data || {};

  const handleSelect = (value) => {
    setInputValue(value);
    setInputFocused(false);
    router.push(`/products?keyword=${value}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      router.push(`/products?keyword=${inputValue}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setInputFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={searchRef} className="relative flex-1">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for Product, Brand, and More"
            className="m-0 lg:text-[13px] lg:rounded-[7px] w-full rounded-[10px] px-4 pr-10 py-2 border border-gray-300 focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onKeyDown={handleKeyDown}
          />
          <span className="absolute top-[13px] right-[13px] cursor-pointer">
            <SearchIcon className=" w-[15px] h-[15px] " />
          </span>
        </div>

        {inputValue && inputFocused && (
          <>
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <Command>
                <CommandList>
                  {inputValue &&
                    (suggestions.length > 0 ? (
                      <CommandGroup>
                        {suggestions.map((value, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => handleSelect(value)}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                inputValue === value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {value}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ) : (
                      <CommandEmpty>No results found.</CommandEmpty>
                    ))}
                </CommandList>
              </Command>
            </div>
          </>
        )}
      </div>
      {inputValue && inputFocused && (
        <div className=" h-searchFocus fixed top-[79px] right-0 left-0 bottom-0 bg-black/80"></div>
      )}
    </>
  );
};

export default GlobalSearch;
