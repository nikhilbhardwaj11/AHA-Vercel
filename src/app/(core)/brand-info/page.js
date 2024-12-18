"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Banner from "@/components/BrandDetail/Banner";
import Category from "@/components/BrandDetail/Category"; 
import VideoSection from "@/components/BrandDetail/Video";
import FindShowroom from "@/components/BrandDetail/FindShowroom"; 

const BrandDetail = () => { 
  // const brandTitle = "GE_Appliances"
  const [brandTitle, setBrandTitle] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const title = params.get('title').replace(/\s+/g, '_');
      
      setBrandTitle(title || '');
    }
  }, []);

  if (!brandTitle) return <p>Loading...</p>; // Optional: Add a loading state

  return (
    <div>
      <Banner brandName={brandTitle} />
      <Category brandName={brandTitle}/>
      <VideoSection brandName={brandTitle}/> 
      <FindShowroom brandName={brandTitle}/> 
    </div>
  );
};
 
export default BrandDetail;
