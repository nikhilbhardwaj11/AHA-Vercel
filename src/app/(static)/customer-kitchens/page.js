import Image from "next/image";

import jeremySarah from "@/assets/images/jeremySarah.webp";
import beyondLuxury from "@/assets/images/beyondLuxury.webp";
import minimalFlair from "@/assets/images/minimalFlair.webp";

import designerAdvice from "@/assets/images/designerAdvice.webp";

import customerKitchensBanner from "@/assets/images/customerKitchensBanner.webp";


const CustomerKitchens = () => {

  const sections = [
    {
      title: "Answering The Why",
      content: `“I chose Fisher & Paykel appliances for this kitchen remodel because of their high-end timeless
      style at a great price point. Since this location is near the city of San Francisco, I was aiming
      for an industrial look and loved the modern handles in this line which helped create that ambiance I
      was looking for:” Sandra told us.`,
    },
    {
      title: "Minimalistic Lines",
      content: `A few key components of this design are the minimalistic lines and the beautiful bold navy blue
      color of the cabinets, which went well with the sleek contemporary matte finish of the appliances.`,
    },
  ];

  const sections2 = [
    {
      imgSrc: beyondLuxury,
      title: "Beyond Luxury",
      paragraphs: [
        "Hao Chen, of Lussa Group designs a kitchen beyond luxury in the heart of Silicon Valley.",
        "“We build these homes to sell, and we chose Thermador because people get excited to see the brand in a luxury home.”",
        "Hao claims to design a space that is, “…Elegant but not personal. We want the home-buyer to have the freedom to make the kitchen their own, while still giving them a kitchen that is beautiful to start.”",
        "For this project, Hao and his design team combined a Navy-Blue paint with White and Off-White counter-tops and back-splash. They also installed a 24K Gold Island sink faucet, gold cabinet handles, and other Gold decorative pieces to elevate the luxury feel.",
        "They also included a Thermador wine preservation column to divide the right side of the kitchen into a wine bar area. “We wanted to create a separate space within the room without disrupting the flow, so we accented with stainless steel to match the wine column and carried over the Navy-Blue to connect the space with the rest of the kitchen.” Hao says.",
      ],
    },
    {
      imgSrc: minimalFlair,
      title: "Minimal Flair",
      paragraphs: [
        "Nancy Nakano and Michael Mangano, owners of MTM Building Group, use Bertazzoni Appliances to accent their sleek, minimalistic kitchen. How do they ensure appliances pair well with cabinetry, flooring, and back-splash?",
        "“We always suggest that our clients find their favorite flooring and back-splash first because it’s easier to match the rest of the items. The style of appliance also needs to fit the interior design of the house more broadly.”",
      ],
    },
  ];

  const kitchens = [
    {
      src: designerAdvice, // Replace with your image path
      alt: "Vallejo, CA – Renee Hart's Kitchen",
      title: "Customer Kitchens",
      location: "Vallejo, CA – Renee Hart’s Kitchen featuring a Fulgor Milano range.",
      description:
        "“I love cooking in here now, it came together exactly like I planned, and I couldn’t be happier.”",
    },
    {
      src: jeremySarah, // Replace with your image path
      alt: "Santa Cruz, CA – Jeremy & Sarah Sanford’s Kitchen",
      title: "Customer Kitchens",
      location: "Santa Cruz, CA",
      description:
        "“Jeremy & Sarah Sanford’s Kitchen featuring all-new KitchenAid appliances.”",
    },
  ];

  return (
    <div className="columns">
      <div className="container-fuild max-w-full">
        <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7 mx-auto h-auto">
            <h1 className="text-4xl leading-[54px] font-bold text-center mlg:text-3xl md:text-2xl md:block">
             Customer-Kitchens
            </h1>
          </section>
        </div>
      </div>

      <div className="px-5 container max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
        <Image
          src={customerKitchensBanner}
          alt="Customer Kitchens"
          title="Customer Kitchens"
          className="w-full h-auto"
        />
      </div>

      <div className="py-8 mt-8">
        <div className="px-5 container max-w-1440 lg:p-[14px] grid grid-cols-2  gap-[40px]">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg w-full lg:w-1/2">
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-gray-800 text-[22px]">
                  {section.title}
                </h1>
                <p className="text-gray-600 text-[14px]">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 mt-8">
        <div className="px-5 container max-w-1440 lg:p-[14px]">
          <div className=" items-center grid grid-cols-Auto1fr gap-[40px]">
            {/* Rounded Image */}
           <div className="rounded-full overflow-hidden border-2 p-[10px] border-[#dfdfdf]">
           <div className="w-48 h-48  relative">
              <Image
                src={designerAdvice}
                alt="Designer Advice"
                title="Customer Kitchens"
                className="w-full h-auto rounded-full"
                fill
              />
            </div>

           </div>
            {/* Content */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800 text-[22px]">Designer Advice</h1>
              <p className="text-gray-600 text-[14px]">
                The most important advice I give to clients is to make sure to have some kind of a design
                direction or concept in mind before starting any project. Good design is a marriage of form
                and function, so don’t be afraid to try new things and mix and match styles that you wouldn’t
                think go together” – <span className="italic">Sandra Blank</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 mt-8">
          <div className="px-5 container max-w-1440 lg:p-[14px]">
            {sections2.map((sections2, index) => (
              <div key={index} className=" md:flex-row   grid grid-cols-Auto1fr gap-[40px] mb-4">
                {/* Image */}
                <div className="w-[300px] h-[244px] flex-shrink-0 lg:w-1/3 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={sections2.imgSrc}
                    alt={sections2.title}
                    title="Customer Kitchens"
                    className="w-full h-auto "
                  />
                </div>
                {/* Content */}
                <div >
                  <h1 className="text-2xl font-semibold text-gray-800 text-[22px]">{sections2.title}</h1>
                  {sections2.paragraphs.map((text, i) => (
                    <p key={i} className="text-gray-600 text-[14px] mt-[10px]">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="py-8 mt-8">
        <div className="px-5 container max-w-1440 lg:p-[14px] grid grid-cols-2 gap-[40px]">
          <div className="py-8">
              <div className="bg-white p-6 shadow-md rounded-lg w-full lg:w-1/2">
                {/* Text Section */}
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-[22px]">
                    What about their experience with Airport Home Appliance?
                  </h1>
                  <p className="text-gray-600 text-[14px]">
                    “We started using Airport Home Appliance about 14 years ago. We
                    heard about them through a friend and called the Hayward warehouse.
                    We have never visited the store in Hayward, but that’s how we got to
                    know Moe Meschi. He ordered exactly what we needed, had them
                    delivered promptly, and gave us a very competitive price for
                    everything. Since then, we have been calling Moe at Airport
                    Appliance.”
                  </p>
                </div>
              </div>
          </div>

            {/* Image Section */}
            {/* <div className=" items-center grid grid-cols-Auto1fr gap-[40px]"> */}
            <div className="flex flex-col ">
                {kitchens.map((kitchen, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center  space-x-0 md:space-x-4 grid grid-cols-Auto1fr gap-[20px]"
                  >
                    <div className="rounded-full overflow-hidden border-2 p-[10px] border-[#dfdfdf]">
                    <div className="w-48 h-48  relative">
                   
                        <Image
                          src={kitchen.src}
                          alt={kitchen.alt}
                          title={kitchen.title}
                          className="w-48 h-48 object-cover rounded-full"
                          fill
                        />
                        </div>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-[14px]">{kitchen.location}</p>
                      <p className="text-gray-600 text-[14px]">{kitchen.description}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </div>

    </div>
  );
};

export default CustomerKitchens;