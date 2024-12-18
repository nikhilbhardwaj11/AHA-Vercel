import BannerImage from "@/assets/images/story-banner.png";
import rightarrow from "@/assets/images/static/rightarrow.webp";
import financing from "@/assets/images/static/financing.webp"; 
import displayIcon from "@/assets/images/static/displayIcon.webp"; 
import warrantySupport from "@/assets/images/static/warranty-support1.webp"; 

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { allBrandList } from "@/components/BrandDetail/arraybrandlist";
import Image from "next/image";


const VideoSection = ({ brandName }) => { 
  const DataResponse = allBrandList.find(item => item[brandName])?.[brandName];   
  // const videoLinkUrl = Array.isArray(DataResponse?.videoLink) ? DataResponse.videoLink : [];
  const videoLinkUrl = DataResponse?.videoLink ? DataResponse.videoLink : [];
  // Function to extract video ID
function getYouTubeVideoId(url) {
  if (!url || typeof url !== 'string') {
    console.error('Invalid URL: URL is undefined or not a string.');
    return null; // Return null if the URL is invalid
  }

  try {
    const urlObj = new URL(url);
    const urlParams = new URLSearchParams(urlObj.search);
    return urlParams.get('v'); // Return the video ID if found
  } catch (error) {
    console.error('Failed to construct URL:', error);
    return null; // Return null if URL parsing fails
  }
}


  const videoId = getYouTubeVideoId(videoLinkUrl); 
  const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=https%3A%2F%2Fwww.airportappliance.com`;

  return ( 
        //  <div className={`max-w-[1480px] mx-auto my-0 px-5 pb-[40px]  ${!videoLinkUrl || videoLinkUrl.length === 0 || videoLinkUrl.every(item => item === '') ? 'hidden' : ''}`}>
          <div className={`max-w-[1480px] mx-auto my-0 px-5 pb-[40px]`}>

              <div className="flex md:block items-center ">
                      <div className="md:w-full w-[675px]  1440:[639px] order-1 md:order-2  mr-[36px] 1280:mr-[28px] lg:mr-[28px]">
                        <div className="  md:max-w-none w-[full]  1280:w-full"> 
                          
                            <ul className="grid grid-cols-1 gap-[29px] mt-4 mb-4">
                              <li className="bg-[#ffffff] gap-5 flex justify-between items-center rounded-[20px] text-base text-[#3C3C43D9] p-[20px] drop-shadow-xl border-[1px] border-[#ececec]">
                                  <span className="w-[79px] h-[100%] relative" >
                                    <Image src={warrantySupport} alt="banner" fill className="object-contain w-full h-full" />
                                  </span>
                                  <span>
                                    <h4 className="text-base text-black font-semibold">Get Protected Today</h4>
                                    <p>Choose from one of our many extended Protections Plans and get protected today.</p>
                                  </span>
                                  <span className="w-[40px] h-[30px] relative" >
                                    <Image src={rightarrow} alt="banner" fill className="object-contain " />
                                  </span>
                              </li>
                              <li className="bg-[#ffffff] gap-5 flex justify-between items-center rounded-[20px] text-base text-[#3C3C43D9] p-[20px] drop-shadow-xl border-[1px] border-[#ececec]">
                                  <span className="w-[79px] h-[100%] relative" >
                                    <Image src={financing} alt="banner" fill className="object-contain w-full h-full" />
                                  </span>
                                  <span>
                                    <h4 className="text-base text-black font-semibold">0% APR For 18-Months*</h4>
                                    <p>Take advantage of 0% APR Financing for up to 18-months on purchases $999 & up! Exclusions apply. </p>
                                  </span>
                                  <span className="w-[40px] h-[30px] relative" >
                                    <Image src={rightarrow} alt="banner" fill className="object-cover" />
                                  </span>
                              </li>
                              <li className="bg-[#ffffff] gap-5 flex justify-between items-center rounded-[20px] text-base text-[#3C3C43D9] p-[20px] drop-shadow-xl  border-[1px] border-[#ececec]">
                                  <span className="w-[79px] h-[100%] relative" >
                                    <Image src={displayIcon} alt="banner" fill className="object-contain w-full h-full" />
                                  </span>
                                  <span>
                                    <h4 className="text-base text-black font-semibold">On Display Now</h4>
                                    <p>Experience Liebherr Brand for yourself at one of our 8 Northern California showrooms.</p>
                                  </span>
                                  <span className="w-[40px] h-[30px] relative" >
                                    <Image src={rightarrow} alt="banner" fill className="object-cover" />
                                  </span>
                              </li>
                              
                            </ul>
                           
                        </div>
                      </div>
                      <div className="md:w-full  w-[830px] h-[467px] md:mt-4    order-2 md:order-2 flex md:ml-0 md:pt-5">
                          
                      <iframe
                        width="100%"
                        src={videoUrl}
                        title="Launch video new Freestanding Appliances | Liebherr"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="Ifram w-[767px] h-[450px] 1280:w-[450px] 1280:h-[373px] lg:w-[400px] lg:h-[306px] md:p-0 rounded-[15px] overflow-hidden md:w-full md:h-[300px]"
                        id="53227150"
                      ></iframe>   
                      </div>
                     
                    </div>
  
      </div> 
  );
};

export default VideoSection;
