"use client";
import FindShowroomImage from "@/assets/images/find-showroom.png";
import LuxuryKitchenSuites from "@/assets/images/luxury-kitchen-suites.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image"; 
import { allBrandList } from "@/components/BrandDetail/arraybrandlist";

const FindShowroom= ({ brandName }) => { 
  const DataResponse = allBrandList.find(item => item[brandName])?.[brandName];  
  const collectionListData = Array.isArray(DataResponse?.collectionList) ? DataResponse.collectionList : [];
 

  return (  
    <div className={`py-[52px] px-[20px]  ${!collectionListData || collectionListData.length === 0 || collectionListData.every(item => item === '') ? 'hidden' : ''}`}>

      <div className="max-w-[1410px] mx-auto my-0 grid grid-cols-2 gap-8 ">
        {collectionListData.map((collection, index) => (
          <div className="relative rounded-[18px] overflow-hidden" key={index}>
            <AspectRatio ratio={685 / 359}  >
              <Image
                src={collection.img}
                alt={collection.title}
                fill
                className="object-cover"
              />
            </AspectRatio>  
           
            <div className="px-[64px] pt-[64px] pb-[62px] absolute top-0 left-0 bottom-0 right-0 1440:px-[4.444vw] 1440:pt-[4.444vw] 1440:pb-[4.306vw]">
              <div className="px-8  grid grid-cols-1 gap-[12px] h-[240px] py-[13px] rounded-[18px] bg-[#FFFFFFE5] 1440:px-[1.667vw] 1440:pt-[1.667vw] 1440:pb-[1.25vw] 1440:rounded-[1.667vw]">
                <h2
                  className="text-[39px] leading-[49px] text-[#0C2340]  marker:font-medium text-center 1440:text-[2.5vw] 1440:leading-[2.986vw] 1440:mb-[0.556vw]"
                >
                  {collection.title}
                </h2>
                <p className="text-[12px] leading-[18px] font-normal text-black text-center 1440:text-[1.25vw] 1440:leading-[1.667vw] 1440:mb-[1.111vw] three-line-dots h-[50px]">
                  {collection.descriptionTxt}
                </p>
                <button
                  // onClick={() => window.location.href = collection.link}
                  className="text-white text-[14px] leading-[19px] bg-[#0C2340] w-[120px] h-[36px]  rounded-[50px] mx-auto my-0 1440:text-[1.111vw] 1440:leading-[1.319vw] 1440:px-[3.056vw] 1440:py-[1.111] 1440:rounded-[3.472vw]"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div> 
  );
};

export default FindShowroom;

//   return (
//     <div className=" bg-gray27 py-[52px] px-[20px] ">
//       <div className=" max-w-[1410px] mx-auto my-0 grid grid-cols-2 gap-8">
//         <div className="relative ">
//           <AspectRatio ratio={685 / 359}>
//             <Image
//               src={FindShowroomImage}
//               alt="image"
//               fill
//               className=" object-cover"
//             />
//           </AspectRatio>
//           <div className="px-[64px] pt-[64px] pb-[62px] absolute top-0 left-0 bottom-0 right-0 1440:px-[4.444vw] 1440:pt-[4.444vw] 1440:pb-[4.306vw]">
//             <div className="grid px-6 pt-6 pb-[18px] rounded-[24px] bg-[#FFFFFFE5] 1440:px-[1.667vw] 1440:pt-[1.667vw] 1440:pb-[1.25vw] 1440:rounded-[1.667vw]">
//               <h2
//                 className=" text-[36px] leading-[43px] text-blue3 mb-2 font-bold text-center
//                 1440:text-[2.5vw] 1440:leading-[2.986vw] 1440:mb-[0.556vw]"
//               >
//                 Find a Showroom
//               </h2>
//               <p className=" text-[18px] leading-[24px] text-black mb-4 text-center 1440:text-[1.25vw] 1440:leading-[1.667vw] 1440:mb-[1.111vw]">
//                   Designed with you in mind, Liebherr's Monolith line represents the pinnacle of 65 years of refrigeration innovation and expertise, 
//                   offering unmatched performance, cutting-edge technology, and sleek design to elevate your kitchen experience.

//               </p>
//               <button className=" text-white text-[16px] leading-[19px] bg-blue6 px-11 py-4 rounded-[50px] mx-auto my-0 1440:text-[1.111vw] 1440:leading-[1.319vw] 1440:px-[3.056vw] 1440:py-[1.111] 1440:rounded-[3.472vw] ">
//                 View Stories
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <AspectRatio ratio={685 / 359}>
//             <Image
//               src={LuxuryKitchenSuites}
//               alt="image"
//               fill
//               className=" object-cover"
//             />
//           </AspectRatio>
//           <div className="px-[64px] pt-[64px] pb-[62px] absolute top-0 left-0 bottom-0 right-0 1440:px-[4.444vw] 1440:pt-[4.444vw] 1440:pb-[4.306vw]">
//             <div className="grid px-6 pt-6 pb-[18px] rounded-[24px] bg-[#FFFFFFE5] 1440:px-[1.667vw] 1440:pt-[1.667vw] 1440:pb-[1.25vw] 1440:rounded-[1.667vw]">
//               <h2
//                 className=" text-[36px] leading-[43px] text-blue3 mb-2 font-bold text-center
//                 1440:text-[2.5vw] 1440:leading-[2.986vw] 1440:mb-[0.556vw]"
//               >
//                 Luxury Kitchen Suites
//               </h2>
//               <p className=" text-[18px] leading-[24px] text-black mb-4 text-center 1440:text-[1.25vw] 1440:leading-[1.667vw] 1440:mb-[1.111vw]">
//               Say goodbye to the ordinary and embrace the extraordinary with Liebherr's OpenStage Drawers. 
//               Inspired by fine delicatessen displays, these transparent drawers offer a clear, ergonomic view of all your fridge's contents, 
//               setting a new standard in both design and convenience.

//               </p>
//               <button className=" text-white text-[16px] leading-[19px] bg-blue6 px-11 py-4 rounded-[50px] mx-auto my-0 1440:text-[1.111vw] 1440:leading-[1.319vw] 1440:px-[3.056vw] 1440:py-[1.111] 1440:rounded-[3.472vw] ">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindShowroom;
