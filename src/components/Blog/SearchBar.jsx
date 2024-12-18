"use client";
import React, { useState } from 'react';
import SearchIcon from "@/icons/SearchIcon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Logic to handle the search action
    console.log('Searching for:', searchTerm);
    // You can implement your search logic here (e.g., API call)
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search on Enter key press
    }
  };

  return (
    <div className="relative mb-9">
      <input
        type="text"
        placeholder="Search for Product, Brand and More"
        value={searchTerm} // Bind the input value to the state
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
        onKeyDown={handleKeyDown} // Trigger search on Enter key
        className="w-full h-10 border bg-background px-3 py-2 text-sm pr-9 rounded-[10px]"
      />
      <span className="absolute top-[10px] right-[13px]" onClick={handleSearch}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;