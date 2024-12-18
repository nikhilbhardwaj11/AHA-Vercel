"use client";
import { useState } from "react";

import amana from "@/assets/images/static/brands/amana.webp";
import asko from "@/assets/images/static/brands/asko.webp";
import awanti from "@/assets/images/static/brands/awanti.webp";
import azureRefrigeration from "@/assets/images/static/brands/azureRefrigeration.webp";

import beko from "@/assets/images/static/brands/beko.webp";
import bestVentillation from "@/assets/images/static/brands/bestVentillation.webp";
import Bertazzoni from "@/assets/images/static/brands/Bertazzoni.webp";
import bluestar from "@/assets/images/static/brands/bluestar.webp";
import bosch from "@/assets/images/static/brands/bosch.webp";
import broan from "@/assets/images/static/brands/Broan/logo.png";
// import broilKing from "@/assets/images/static/brands/BroilKing/logo.png";

// import premier from "@/assets/images/static/brands/Premier/logo.png";
// import speed from "@/assets/images/static/brands/Speed_Queen/logo.svg";
// import summit from "@/assets/images/static/brands/Summit/logo.svg";
import viking from "@/assets/images/static/brands/viking.webp";
import zline from "@/assets/images/static/brands/Zline.webp";

import COVE from "@/assets/images/static/brands/COVE.webp";
import DACOR from "@/assets/images/static/brands/DACOR.webp";
import exectrolux from "@/assets/images/static/brands/exectrolux.webp";
import FisherPaykelCanada from "@/assets/images/static/brands/FisherPaykelCanada-logo.webp";
import foster from "@/assets/images/static/brands/foster.webp";
import GAGGENAU from "@/assets/images/static/brands/GAGGENAU.webp";
import JENNAIR from "@/assets/images/static/brands/JENNAIR.webp";
import LIEBHERR from "@/assets/images/static/brands/LIEBHERR.webp";
import MIELE from "@/assets/images/static/brands/MIELE.webp";
import MONOGRAM from "@/assets/images/static/brands/MONOGRAM.webp";
import signature from "@/assets/images/static/brands/signature.webp";
import wasteKing from "@/assets/images/static/brands/wasteKing.webp";

import smeg from "@/assets/images/static/brands/smeg.webp";
import SubZero from "@/assets/images/static/brands/Sub-Zero.webp";
import Thermador from "@/assets/images/static/brands/Thermador.webp";
import ThorKitchen from "@/assets/images/static/brands/ThorKitchen-logo.webp";
import VentAHood from "@/assets/images/static/brands/VentAHood.webp";
import verona from "@/assets/images/static/brands/verona.webp";
import Wolf from "@/assets/images/static/brands/Wolf.webp";
import DynamicImage from "@/components/DynamicImages/DynamicImage";

import cafe from "@/assets/images/static/brands/cafe.webp";
import dcs from "@/assets/images/static/brands/dcs.webp";
import elica from "@/assets/images/static/brands/elica-logo.webp";
import forno from "@/assets/images/static/brands/forno.webp";
import frigidaireGallery from "@/assets/images/static/brands/frigidaire-gallery.webp";
import frigidaireProfessional from "@/assets/images/static/brands/frigidaire-professional.webp";
import frigidaire from "@/assets/images/static/brands/frigidaire.webp";
import geappliances from "@/assets/images/static/brands/geappliances.webp";
import geprofile from "@/assets/images/static/brands/geprofile.webp";
import haier from "@/assets/images/static/brands/haier.webp";
import hotpoint from "@/assets/images/static/brands/hotpoint.webp";
import kitchenaid from "@/assets/images/static/brands/kitchenaid.webp";
import Kobe from "@/assets/images/static/brands/Kobe-logo.webp";
import lgStudio from "@/assets/images/static/brands/lg-studio.webp";
import lg from "@/assets/images/static/brands/lg.webp";
import marvel from "@/assets/images/static/brands/marvel.webp";
import maytag from "@/assets/images/static/brands/maytag.webp";
import perlick from "@/assets/images/static/brands/perlick.webp";
import premier from "@/assets/images/static/brands/Premier.webp";
import samsung from "@/assets/images/static/brands/samsung.webp";
import summit from "@/assets/images/static/brands/summit.webp";
import speedQueen from "@/assets/images/static/brands/speed-queen.webp";

import sharp from "@/assets/images/static/brands/sharp.webp";
import uline from "@/assets/images/static/brands/uline.webp";
import Unique from "@/assets/images/static/brands/Unique.webp";
import whirlpool from "@/assets/images/static/brands/whirlpool.webp";
import zephyr from "@/assets/images/static/brands/zephyr.webp";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Link from "next/link";

// Alphabet list from A to Z
const alphabet = [
  "All",
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
];

const BrandImageTag = ({ src, link, title }) => {
  return (
    <li className="px-5 py-4 bg-white rounded-[12px] border-[1px] border-[#F0F0F0] shadow-lg p-2 h-[129px] flex items-center justify-center hover:underline cursor-pointer transition-transform duration-300 transform hover:scale-105">
      <Link
        href={{
          pathname: link ? link:"/brand-info",
          query: { title },
        }}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-1 items-center text-center  "
      >
        <div className="w-[100%] h-[50px] md:p-0 flex items-center justify-center overflow-hidden">
          <DynamicImage
            src={src}
            className="w-[auto] h-[100%] object-contain max-w-[135px]"
            alt="Brand Logo"
          />
        </div>
        {/* <b className="text-sm font-medium  ">{title}</b> */}
      </Link>
    </li>
  );
};

const BrandPage = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");

  const handleMajorChange = (event) => {
    setSelectedOption(event);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  // Luxury brand images with links
  const luxuryBrands = [
    // { name: "Amana", src: amana, link: "#" },
     { name: "Asko", src: asko, link: "/brand-info" },
    // { name: "Avanti", src: awanti, link: "#" },
    // { name: "Beko", src: beko, link: "/appliance-beko" },
    { name: "Bertazzoni", src: Bertazzoni, link: "#" },
    { name: "Bluestar", src: bluestar, link: "#" },
    { name: "Cove Appliances", src: COVE, link: "#" },
    // { name: "Bosch", src: bosch, link: "#" },   
    // { name: "Broan", src: broan, link: "#" },
    // { name: "BroilKing", src: broilKing, link: "#" },
    // { name: "Cafe", src: cafe, link: "#" },
    { name: "Dacor", src: DACOR, link: "#" },
    { name: "DCS", src: dcs, link: "#" },
    // { name: "Electrolux", src: exectrolux, link: "#" },
    // { name: "Elica", src: elica, link: "/appliance-beko" },

    { name: "FisherPaykel", src: FisherPaykelCanada, link: "/brand-info" },
    { name: "Forno", src: forno, link: "#" },
    { name: "Foster", src: foster, link: "#" },
    // { name: "Frigidaire", src: frigidaire, link: "/appliance-beko" },
    // { name: "Frigidaire Gallery", src: frigidaireGallery, link: "#" },
    // { name: "Frigidaire Pro", src: frigidaireProfessional, link: "/appliance-beko" },
    { name: "Gaggenau", src: GAGGENAU, link: "#" },
    // { name: "GE Appliances", src: geappliances, link: "#" },
    // { name: "GE Profile", src: geprofile, link: "#" },
    // { name: "Haier", src: haier, link: "#" },
    // { name: "Hotpoint", src: hotpoint, link: "#" },
    { name: "Jennair", src: JENNAIR, link: "#" },
    // { name: "KitchenAid", src: kitchenaid, link: "#" },
    // { name: "LG Appliances", src: lg, link: "#" },
    // { name: "LG Studio", src: lgStudio, link: "#" },
    { name: "Liebherr", src: LIEBHERR, link: "/brand-info" },
    { name: "Marvel Refrigeration", src: marvel, link: "#" },
    // { name: "Maytag", src: maytag, link: "#" },
    { name: "Miele", src: MIELE, link: "#" },
    { name: "Monogram", src: MONOGRAM, link: "/brand-info" },    
    // { name: "Perlick", src: perlick, link: "#" },
    // { name: "Premier", src: premier, link: "#" },
    // { name: "Samsung Appliances", src: samsung, link: "#" },
    // { name: "Sharp", src: sharp, link: "#" },
    { name: "Signature Kitchen Suite", src: signature, link: "/brand-info" },
    { name: "Smeg", src: smeg, link: "#" },
    { name: "Sub-Zero Refrigerators", src: SubZero, link: "#" },
    // { name: "Speed Queen", src: speed, link: "#" },
    // { name: "Summit", src: summit, link: "#" },
    { name: "Thermador", src: Thermador, link: "/brand-info" },
    { name: "Thor Kitchen", src: ThorKitchen, link: "#" },
    { name: "U Line", src: uline, link: "#" },
    { name: "Unique", src: Unique, link: "#" },
    { name: "Vent A Hood", src: VentAHood, link: "#" },
    { name: "Viking", src: viking, link: "#" },
    { name: "Wolf", src: Wolf, link: "#" },
    // { name: "Whirlpool", src: whirlpool, link: "#" },
    // { name: "Zephyr", src: zephyr, link: "#" },
    { name: "Zline", src: zline, link: "#" },
    
    // { name: "COVE", src: COVE, link: "#" },
    // { name: "Smeg", src: smeg, link: "#" },
    // { name: "Sub-Zero", src: SubZero, link: "#" },
    
    // { name: "Verona", src: verona, link: "#" },
    // 
  ];

  // Major brand images with links
  const majorBrands = [
    { name: "Amana", src: amana, link: "#" },
    { name: "Avanti", src: awanti, link: "#" },
    { name: "Azure Refrigeration", src: azureRefrigeration, link: "#" },
    { name: "Beko", src: beko, link: "/appliance-beko" },
    { name: "Best Ventillation", src: bestVentillation, link: "/appliance-beko" },
    { name: "Bosch", src: bosch, link: "#" },   
    { name: "Broan Ventillation", src: broan, link: "#" },
    { name: "Café", src: cafe, link: "#" },
    { name: "Electrolux", src: exectrolux, link: "#" },
    // { name: "DCS", src: dcs, link: "#" },
    { name: "Elica", src: elica, link: "/appliance-beko" },
    // { name: "Forno", src: forno, link: "#" },
    { name: "Frigidaire", src: frigidaire, link: "/appliance-beko" },
    { name: "Frigidaire Gallery", src: frigidaireGallery, link: "#" },
    { name: "Frigidaire Professional", src: frigidaireProfessional, link: "/appliance-beko" },
    { name: "GE Appliances", src: geappliances, link: "#" },
    { name: "GE Profile", src: geprofile, link: "#" },
    { name: "Haier", src: haier, link: "#" },
    { name: "Hotpoint", src: hotpoint, link: "#" },
    { name: "KitchenAid", src: kitchenaid, link: "#" },
    // { name: "Kobe", src: Kobe, link: "#" },
    { name: "LG", src: lg, link: "#" },
    { name: "LG Studio", src: lgStudio, link: "#" },
    // { name: "Marvel", src: marvel, link: "#" },
    { name: "Maytag", src: maytag, link: "#" },
    { name: "Premier", src: premier, link: "#" },
    // { name: "Perlick", src: perlick, link: "#" },
    { name: "Samsung", src: samsung, link: "#" },
    { name: "Sharp", src: sharp, link: "#" },
    { name: "Speed Queen", src: speedQueen, link: "#" },
    { name: "Summit", src: summit, link: "#" },
    { name: "Waste King", src: wasteKing, link: "#" },
    // { name: "Summit", src: sharp, link: "#" },


    // { name: "U-Line", src: uline, link: "#" },
    // { name: "Unique", src: Unique, link: "#" },
    { name: "Whirlpool", src: whirlpool, link: "#" },
    { name: "Zephyr", src: zephyr, link: "#" },
   
  ];

  const allBrands = [
    { name: "LG", src: lg, link: "#" },
    { name: "Thermador", src: Thermador, link: "/brand-info" },
    { name: "Bosch", src: bosch, link: "#" },  
    { name: "GE Appliances", src: geappliances, link: "#" },
    { name: "Sub-Zero Refrigerators", src: SubZero, link: "#" },
    { name: "GE Profile", src: geprofile, link: "#" },
    { name: "Wolf", src: Wolf, link: "#" },
    { name: "Miele", src: MIELE, link: "#" },
    { name: "Monogram", src: MONOGRAM, link: "/brand-info" },
    { name: "Frigidaire", src: frigidaire, link: "/appliance-beko" },
    { name: "KitchenAid", src: kitchenaid, link: "#" },
    { name: "Café", src: cafe, link: "#" },
    { name: "Zephyr", src: zephyr, link: "#" },
    { name: "Speed Queen", src: speedQueen, link: "#" },
    { name: "Samsung", src: samsung, link: "#" },
    { name: "Whirlpool", src: whirlpool, link: "#" },
    { name: "FisherPaykel", src: FisherPaykelCanada, link: "/brand-info" },
    { name: "LG Studio", src: lgStudio, link: "#" },
    { name: "Frigidaire Gallery", src: frigidaireGallery, link: "#" },
    { name: "Signature Kitchen Suite", src: signature, link: "/brand-info" },
    { name: "Electrolux", src: exectrolux, link: "#" },
    { name: "Gaggenau", src: GAGGENAU, link: "#" },
    { name: "Jennair", src: JENNAIR, link: "#" },
    { name: "Bertazzoni", src: Bertazzoni, link: "#" },
    { name: "Maytag", src: maytag, link: "#" },
    { name: "Frigidaire Professional", src: frigidaireProfessional, link: "/appliance-beko" },
    { name: "Haier", src: haier, link: "#" },
  ];
  // const allBrands = [...luxuryBrands, ...majorBrands];
  // const allBrands = [...luxuryBrands];

  luxuryBrands.sort((a, b) => a?.name?.localeCompare(b.name));
  // majorBrands.sort((a, b) => a?.name?.localeCompare(b.name));

  // // Filter brands by selected letter
  // const filteredLuxuryBrands = luxuryBrands?.filter((brand) =>
  //   brand?.name?.startsWith(selectedLetter)
  // );
  // const filteredMajorBrands = majorBrands?.filter((brand) =>
  //   brand?.name?.startsWith(selectedLetter)
  // );
  // Filter brands by selected letter
  const filteredLuxuryBrands =
    selectedLetter === "All"
      ? luxuryBrands
      : luxuryBrands?.filter((brand) =>
          brand?.name?.startsWith(selectedLetter)
        );

  const filteredMajorBrands =
    selectedLetter === "All"
      ? majorBrands
      : majorBrands.filter((brand) => brand?.name?.startsWith(selectedLetter));

  const filteredAllBrands =
    selectedLetter === "All"
      ? allBrands
      : allBrands.filter((brand) => brand?.name?.startsWith(selectedLetter));

  return (
    <div className=" container-fuild max-w-full ">
      {/* <div className="container-fuild max-w-full bg-[#ffffff] mx-auto  ">
              
                    <div className="  md:block items-center ">
                   
                          <div className="w-full h-[362px]  overflow-hidden ">
                              <DynamicImage
                                src={tradeBg}
                                className="w-full h-full object-cover"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>   
                    </div>
                
              </div> */}

      <div className="container mx-auto p-0 bg-white text-black py-[64px] lg:py-[28px]">
        <section className="bg-white text-black container max-w-1440 px-7  mx-auto h-auto relative lg:px-4">
          <div className="lg:mb-[32px]"><h1 className="text-4xl leading-[54px] font-bold text-center lg:text-[22px] lg:leading-[24px] ">
            Our Brands
          </h1>
          <h4 className="text-md font-normal text-center mlg:text-lg  md:text-base  p-2 lg:text-[16px] lg:leading-[24px] ">
            Discover from various brands
          </h4></div>
          <div className="inline-flex items-center gap-5 absolute right-4 top-[25%] lg:relative lg:top-0 lg:right-0 lg:justify-end lg:gap-[10px]">
            <span className=" text-gray3 lg:text-[13px] lg:leading-[24px]">Filter By</span>
            <Select onValueChange={handleMajorChange} value={selectedOption}>
              <SelectTrigger className="w-[205px] h-[44px] rounded-[10px] border-gray7 font-medium lg:w-[175px]">
                <SelectValue placeholder="Luxury" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                  <SelectItem value="Major">Major</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
      </div>

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 pb-[20px] ">
        <section className="container max-w-1440 px-7 lg:px-0">
          {/* A-Z Navigation with "All" option */}
          <div className="flex justify-center mb-4 flex-wrap">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`px-3 py-1 m-1 font-normal ${
                  selectedLetter === letter
                    ? "bg-gray-600 text-white"
                    : "bg-gray-100 text-black"
                } rounded`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Display selected letter */}
          {/* {selectedLetter && selectedLetter !== "All" && (
                        <div className="text-center text-3xl font-bold my-4">
                          <span>{selectedLetter}</span>
                        </div>
                      )} */}
          {/* <div className="flex justify-center mb-4">
                        {alphabet.map((letter) => {
                          // Check if the current letter is "All" or if any brand title starts with the current letter
                          const isLetterAvailable = letter === 'All' || allBrandList.some(brand => {
                            const brandKey = Object.keys(brand)[0]; // Get the brand key
                            return brandKey.startsWith(letter);
                          });
                      return (
                        <button
                          key={letter}
                          className={`px-3 py-1 m-1 font-bold ${selectedLetter === letter ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} rounded`}
                          onClick={() => isLetterAvailable && handleLetterClick(letter)}
                          disabled={!isLetterAvailable} // Disable button if no brands start with the letter
                          style={{
                            cursor: isLetterAvailable ? 'pointer' : 'not-allowed', // Change cursor to not-allowed when disabled
                          }}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div> */}
        </section>
      </div>

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 pb-[58px] ">
        <section className="container max-w-1440 px-7 lg:px-0">
          <ul className="grid grid-cols-215  gap-[15px] mt-6 md:grid-cols-3 lg:grid-cols-5 md:gap-[20px] justify-center items-center lg:gap-x-3 lg:gap-y-[22px] mob:grid-cols-2">
            {selectedOption === "Luxury" &&
              filteredLuxuryBrands.map((brand, index) => (
                <BrandImageTag
                  key={index}
                  src={brand.src}
                  link={brand.link}
                  title={brand.name}
                />
            ))}

           {selectedOption === "Major" &&
            filteredMajorBrands.map((brand, index) => (
              <BrandImageTag
                key={index}
                src={brand.src}
                link={brand.link}
                title={brand.name}
              />
            ))}

          {selectedOption === "All" &&
            filteredAllBrands.map((brand, index) => (
              <BrandImageTag
                key={index}
                src={brand.src}
                link={brand.link}
                title={brand.name}
              />
            ))}

          </ul>
          {/* Show a message if no brands are found */}
          {((selectedOption === "Luxury" &&
            filteredLuxuryBrands.length === 0) ||
            (selectedOption === "Major" &&
              filteredMajorBrands.length === 0)) && (
                <div className="max-w-[1480px] mx-auto my-0 py-14 px-5 lg:py-11  pb-[40px] ">
                  <h2 class=" text-[21px] leading-[31px] font-bold text-blue2 text-center lg:text-[16px] lg:leading-[22px] lg:mb-[27px]">
                    No brands found.
                  </h2>
                </div>
            // <p className="text-center col-span-full">No brands found for the selected letter.</p>
          )}
          {/* {selectedOption === "Luxury" && (
                <ul className="grid grid-cols-5 gap-[35px] mt-6">
                  {luxuryBrands.map((brand, index) => (
                    <BrandImageTag key={index} src={brand.src} link={brand.link} />
                  ))}
                </ul>
              )}

              {selectedOption === "Major" && (
                <ul className="grid grid-cols-5 gap-[35px] mt-6">
                  {majorBrands.map((brand, index) => (
                    <BrandImageTag key={index} src={brand.src} link={brand.link} />
                  ))}
                </ul>
              )} 
          */}
        </section>
      </div>
    </div>
  );
};

export default BrandPage;
