import React from "react";
import Image from "next/image";
import applianceInstallation from "@/assets/images/applianceInstallation.webp";

const BlogSection = () => {
  const services = [
    {
      title: "Efficient Appliances Saving the Planet & Your Wallet",
      description:
        "Chances are, you’ve heard people throw out the term “Energy Efficient”..",
      imgSrcWebp:
        "https://cdn.airportappliance.com/media/magefan_blog/EnergyEfficientAppliances-blog_1.webp",
      imgSrcPng:
        "https://cdn.airportappliance.com/media/magefan_blog/EnergyEfficientAppliances-blog_1.webp",
      link: "/appliance-installation",
    },
    {
      title: "Smart Appliances The Future of Home Appliance",
      description:
        "Chances are, you already have several smart devices around you..",
      imgSrcWebp:
        "https://cdn.airportappliance.com/media/magefan_blog/SmartAppliances.webp",
      imgSrcPng:
        "https://cdn.airportappliance.com/media/magefan_blog/SmartAppliances.webp",
      link: "/appliance-delivery",
    },
    {
      title: "Airport Home Appliance Opens 7th Store in San Rafael",
      description:
        "San Rafael, May 1st – Airport Home Appliance is proud to announce that after servin..",
      imgSrcWebp:
        "https://cdn.airportappliance.com/media/magefan_blog/stores-san-rafael-branch.webp",
      imgSrcPng:
        "https://cdn.airportappliance.com/media/magefan_blog/stores-san-rafael-branch.webp",
      link: "/delivery-and-customer-pick-up",
    },
    {
      title: "Airport Home Appliance Roseville Store Now Open",
      description:
        "Roseville, May 3rd – After years of requests from our customers across Sacramento..",
      imgSrcWebp:
        "https://cdn.airportappliance.com/media/magefan_blog/stores-roseville-branch.jpg",
      imgSrcPng:
        "https://cdn.airportappliance.com/media/magefan_blog/stores-roseville-branch.jpg",
      link: "/customer-kitchens",
    },
  ];

  return (
    <div className="builders-blog-wrapper max-w-[1550px] mb-0 mx-auto w-full">
      <div className="container mx-auto p-4">
        <div className="flex gap-[20px] pb-[20px] items-start ">
          {/* Left Column */}
          <div className="flex-1 max-w-[480px] px-[30px] lg:hidden">
            <div className="col-left flex-1">
              <div class="information-content p-6 rounded-lg">
                <ul class="space-y-4 border border-[#ededed] rounded-lg">
                  <li class="text-lg  p-4 font-semibold text-gray-800 border-b border-b-[#ededed] pb-5 bg-[#0c2340] text-white rounded-t-10">
                    Key Information
                  </li>
                  <li className="border-b p-4 border-b-[#ededed] pb-5">
                    <strong class="font-bold text-gray-700">
                      Client Name:
                    </strong>
                    <span class="text-gray-600">
                      SF Giants &amp; Tishman Speyer
                    </span>
                  </li>
                  <li className="border-b p-4 border-b-[#ededed] pb-5">
                    <strong class="font-bold text-gray-700">Location: </strong>
                    <span class="text-gray-600"> San Francisco, CA</span>
                  </li>
                  <li className="border-b p-4 border-b-[#ededed] pb-5">
                    <strong class="font-bold text-gray-700">Scale: </strong>
                    <span class="text-gray-600">
                      254 Unit Residential Tower - 315,000 square feet
                    </span>
                  </li>
                  <li className="border-b p-4 border-b-[#ededed] pb-5">
                    <strong class="font-bold text-gray-700">
                      LEED Certification:{" "}
                    </strong>
                    <span class="text-gray-600">Gold (Pending)</span>
                  </li>
                  <li className="border-b p-4 border-b-[#ededed] pb-5">
                    <strong class="font-bold text-gray-700 ">
                      Airport Builder Manager:{" "}
                    </strong>
                    <span class="text-gray-600">
                      Laura Clifton -
                      <a
                        href="mailto:laura.clifton@airportappliance.com"
                        class="text-blue-500 hover:underline"
                      >
                        laura.clifton@airportappliance.com
                      </a>
                    </span>
                  </li>
                  <li className="p-4">
                    <strong class="font-bold text-gray-700">Architect: </strong>
                    <span class="text-gray-600">Studio Gang</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1 lg:flex-wrap">
            <div className="col-right flex-1">
              <div className="blog-body-content p-6">
                <h1 className="text-2xl font-bold mb-4">
                  Airport Home Appliance Achieves Significant Milestone With
                  Inaugural Tower Building Project
                </h1>
                <ul className="link-content flex gap-4 text-blue-600">
                  <li className="bg-[#9f9f9f] text-base text-[#fff] py-2 px-3">
                    <a href="/blog/category/life-style">Life Style</a>
                  </li>
                  <li className="bg-[#9f9f9f] text-base text-[#fff] py-2 px-3">
                    <a href="/blog/category/smart-appliances">
                      Smart Appliances
                    </a>
                  </li>
                </ul>
                <img
                  className="my-4 rounded"
                  src="https://cdn.airportappliance.com/media/wysiwyg/blog/builder-blog_01.webp"
                  alt="(Mission Rock’s Parcel F with Oracle Park – Photo via SFYIMBY)"
                />
                <p className="italic text-center">
                  (Mission Rock’s Parcel F with Oracle Park – Photo via SFYIMBY)
                </p>
                <p className="mt-4 text-gray-700">
                  Hayward, [Oct. 3rd, 2023] – Airport Home Appliance, the
                  esteemed family-owned appliance superstore, proudly announces
                  a pivotal achievement in its latest Builder Division
                  endeavors. Within a mere three months of its relaunch, the
                  company has secured its inaugural tower building project,
                  marking a significant milestone in its legacy.
                </p>
                <p className="mt-4 text-gray-700">
                  The prestigious tower, Parcel F, stands as the focal point of
                  the esteemed Mission Rock project, strategically located on
                  Seawall Lot 337 and Pier 48 near the heart of San Francisco.
                  Rising majestically to a remarkable 23 stories, this
                  architectural marvel will manifest as a luxurious apartment
                  complex, redefining the city skyline.
                </p>
                <p className="mt-4 text-gray-700">
                  At the core of this towering edifice lies an intricate sky
                  garden, adding a touch of natural elegance to the urban
                  landscape. Parcel F will host 300 rental units, each
                  meticulously designed for modern living. Moreover, this
                  monumental structure encompasses nearly 25,000 square feet of
                  ground-level co- working space, seamlessly integrated with a
                  plethora of shops and cafes. The result is a dynamic
                  streetscape, destined to become a hub of urban sophistication.
                </p>

                {/* Add other paragraphs similarly */}

                <img
                  className="my-4 rounded"
                  src="https://cdn.airportappliance.com/media/wysiwyg/blog/builder-blog_02.webp"
                  alt="(Mission Rock’s Parcel F with Oracle Park – Photo via SFYIMBY)"
                />
                <p className="italic text-center">
                  (Mission Rock’s Parcel F (Left) & Visa HQ (Right) – Photo via
                  SFYIMBY)
                </p>
                <p className="mt-4 text-gray-700">
                  Airport’s Builder Division, under the leadership of Laura
                  Clifton, takes immense pride in its role as the exclusive
                  supplier for this remarkable project. Every rental unit within
                  Parcel F will be furnished with a bespoke kitchen package,
                  meticulously curated to elevate the culinary experience of its
                  inhabitants. Additionally, each unit will be equipped with
                  state-of-the-art washer and dryer units, expertly installed
                  with precision and care, utilizing innovative stacking kits
                  for optimal space utilization.
                </p>
                <p className="mt-4 text-gray-700">
                  This achievement stands as a testament to the unwavering
                  commitment, dedication, and sheer determination of Airport
                  Home Appliance&apos;s newly revamped Builder Division team.
                  Their relentless pursuit of excellence has not only earned
                  them this remarkable opportunity but also reaffirmed their
                  position as pioneers in the industry.
                </p>
                <p className="mt-5">
                  <strong>Airport Home Appliance</strong>
                </p>
                <p>(866) 304-4449 | www.airportappliance.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-page-slider-content bg-gray-100 py-8">
        <div className="slider-header text-center">
          <h2 className="text-xl font-semibold">From the Blog</h2>
          <p className="text-gray-600">
            Appliance Blog Information, resources, & reviews!
          </p>

          <button className="bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[30px] mt-4">
            <a
              href="/blog"
              // className="text-blue-600 hover:underline inline-block mt-2"
            >
              View All Articles
            </a>
          </button>
        </div>

        <div className="py-8 mt-8">
          <div className="px-5 container max-w-1440  lg:p-[14px]">
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg  flex flex-col items-center max-w-xs text-center justify-between"
                >
                  <div>
                    <picture className="mb-4">
                      <source srcSet={service.imgSrcWebp} type="image/webp" />
                      <img
                        className="rounded-t-20"
                        src={service.imgSrcPng}
                        // alt="(Mission Rock’s Parcel F with Oracle Park – Photo via SFYIMBY)"
                      />
                      {/* <Image src={service.imgSrcPng} alt={service.title} className=" mx-auto m-h-[70px]" loading="lazy" height={70} width="auto" /> */}
                    </picture>
                    <div className="px-5 text-left mb-5">
                      <h4 className="text-[16px] font-semibold mb-2 mt-[15px]">
                        {service.title}
                      </h4>
                      <p className="text-sm">{service.description}</p>
                      <span className="text-[#9f9f9f]">May 02, 2022</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const BlogCard = ({ imgSrc, title, date }) => (
//   <div className="slider-card bg-white shadow-lg rounded-md overflow-hidden">
//     <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
//     <div className="card-info p-4">
//       <a
//         href="#"
//         className="text-lg font-bold text-blue-600 hover:underline block mb-2"
//       >
//         {title}
//       </a>
//       <p className="text-gray-500 text-sm">{date}</p>
//     </div>
//   </div>
// );

export default BlogSection;
