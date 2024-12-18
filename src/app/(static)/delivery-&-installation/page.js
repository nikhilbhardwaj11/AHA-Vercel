import deliverInstallationBanner from "@/assets/images/deliverInstallationBanner.webp";
import whyShopAtAHA from "@/assets/images/whyShopAtAHA.png";
import learningCenter from "@/assets/images/learningCenter.png";
import customerService from "@/assets/images/customerService.png";
import applianceInstallation from "@/assets/images/applianceInstallation.webp";
import applianceInstallation1 from "@/assets/images/applianceInstallation1.png";
import applianceDelivery from "@/assets/images/applianceDelivery.webp";
import applianceDelivery1 from "@/assets/images/applianceDelivery2.png";
import customerPickUp from "@/assets/images/customerPickUp.webp";
import customerPickUp1 from "@/assets/images/customerPickUp1.png";
import customerKitchens from "@/assets/images/customerKitchens.webp";
import customerKitchens1 from "@/assets/images/customerKitchens1.png";
import testimonialIcon from "@/assets/images/testimonialIcon.webp";
import Image from "next/image";

const DeliveryAndInstallation = () => {
  const services = [
    {
      title: "Appliance Installation",
      description:
        "Airport Home Appliance is pleased to announce the launch of our NEW Premium Appliance Installation Service.",
      imgSrcWebp: applianceInstallation,
      imgSrcPng: applianceInstallation1,
      link: "/appliance-installation",
    },
    {
      title: "Appliance Delivery",
      description:
        "All orders for In-Stock items & items priced $499 & above, placed before 12PM (Monday through Friday) are eligible for Next Day Delivery.",
      imgSrcWebp: applianceDelivery,
      imgSrcPng: applianceDelivery1,
      link: "/appliance-delivery",
    },
    {
      title: "Customer Pick-Up",
      description:
        "Our staff will contact you upon purchase to confirm your order and schedule your pickup.",
      imgSrcWebp: customerPickUp,
      imgSrcPng: customerPickUp1,
      link: "/delivery-and-customer-pick-up",
    },
    {
      title: "Customer Kitchens",
      description:
        "At Airport Home Appliance, we excel at bringing your dream kitchen to life! However, don't just take our word for it, hear from our actual clients themselves!",
      imgSrcWebp: customerKitchens,
      imgSrcPng: customerKitchens1,
      link: "/customer-kitchens",
    },
  ];

  const testimonials = [
    {
      name: "Noreen S.",
      location: "San Jose, CA",
      text: `   I reviewed this company and especially Ramin last spring after we bought a combo
                micro/oven double oven for our kitchen remodel. Excellent service and follow up.
                After we used the appliance a few times we noticed issues with preheating and the
                oven not maintaining the temperature. Repair service came out twice to thoroughly
                test and nothing was showing up. We kept in contact with Ramin for several weeks
                trying to remedy this and ultimately we received an exact replacement yesterday and
                it's working beautifully. Again, thank you Ramin for your follow thru. It's rare
                these days to find a dedicated employee like you who cares about the customer. We
                will be back if we need a new appliance in the future. Hope you'll still be there!
              `,
      imageUrl: testimonialIcon,
    },
    {
      name: "Julie N.",
      location: "Fairway Prk, Hayward, CA",
      text: `   After 23 years our gas cooktop finally failed so we went to Airport Home Appliance to
                find a replacement. I'm very satisfied with the customer service, selection and
                value in the purchase of my new Monogram gas cooktop, oven &amp; microwave as a
                discounted package! Our sales rep, Andy Lu, was very knowledgeable and was able to
                help us order all the right appliances that fit around our existing granite
                countertops and custom cabinets as well as used his connections to ensure we didn't
                have to wait months for a back ordered item. We are really satisfied with our
                experience at Airport Home Appliance in Hayward!
              `,
      imageUrl: testimonialIcon,
    },
    {
      name: "Jen P.",
      location: "South San Francisco, CA",
      text: `   We went to Airport Appliance to check out their sale and was surprised to see that
                their prices are better than the other stores we considered. We ended up buying all
                our appliance needs from them: from oven, dishwasher, fridge to washer and dryer.
                Our salesperson, John Pham, was professional and knowledgeable. He patiently showed
                us options, answered our questions and later addressed some delivery issues we
                encountered. He was easy to communicate with, even after we already made the
                purchase, to resolve the issues of our dishwasher installation. If you want a
                professional, knowledgeable person to help you with an appliance purchase, go to
                Airport Appliance and ask for John Pham. We will go back to Airport Appliance again
                to get the rest of our appliances after we complete our renovations.
              `,
      imageUrl: testimonialIcon,
    },
  ];

  return (
    <div className="columns">
      <div className="container-fuild max-w-full">
        <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7 mx-auto h-auto">
            <h1 className="text-4xl leading-[54px] font-bold text-center mlg:text-3xl md:text-2xl md:block">
              Delivery & Installation
            </h1>
          </section>
        </div>
      </div>

      <div className="px-5 container max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
        <Image
          src={deliverInstallationBanner}
          alt="Appliance Installation"
          title="Appliance Installation"
          className="w-full h-auto"
        />
      </div>

      <div className="py-8 mt-8">
        <div className="px-5 container max-w-1440  lg:p-[14px]">
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-xs text-center justify-between">
                <div>
                  <picture className="mb-4">
                    <source srcSet={service.imgSrcWebp} type="image/webp" />
                    <Image src={service.imgSrcPng} alt={service.title} className=" mx-auto m-h-[70px]" loading="lazy" height={70} width="auto" />
                  </picture>
                  <h4 className="text-[16px] font-semibold mb-2 mt-[15px]">{service.title}</h4>
                  <p className="text-sm mb-4">{service.description}</p>
                </div>
                  
                <a href={service.link} className=" px-[15px] py-[9px] text-[13px]  bg-[#0C2340] font-semibold rounded-[35px] text-white text-center flex items-center justify-center  w-[200px] ">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

       <div className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">AHA Customer Testimonials</h1>
          <p className="text-lg mb-8">What Our Customers Say About Us</p>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-md grid grid-cols-24-1fr  text-left">
                <picture className="mb-4 ">
                  <source srcSet={testimonial.imageUrl} type="image/webp" />
                  <Image src={testimonial.imageUrl} alt="img" height={26} width={24} />
                </picture>
               <div className=" ml-4 ">
               <h3 className="text-[16px] font-semibold mb-2 pl-4 border-l border-l-black">{testimonial.name}</h3>
                <p className=" text-sm mb-4 pl-4">{testimonial.text}</p>
                <p className=" text-xs pl-4">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndInstallation;