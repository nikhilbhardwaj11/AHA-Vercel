
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "./Banner"
import BlogSection from "./BlogSection"

const BuildersBlog = () => {
  return (
    <div>
     <Banner brandName="builders-blog" />
     <BlogSection/>
  </div>
  );
};

export default BuildersBlog;