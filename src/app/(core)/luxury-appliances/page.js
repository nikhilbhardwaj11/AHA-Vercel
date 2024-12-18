import Banner from "@/components/LuxuryAppliances/Banner";
import Category from "@/components/LuxuryAppliances/Category";
import ContactApplianceSpecialist from "@/components/LuxuryAppliances/ContactApplianceSpecialist";
import FeaturedLuxuryBrands from "@/components/LuxuryAppliances/FeaturedLuxuryBrands";
import FindShowroom from "@/components/LuxuryAppliances/FindShowroom";
import Story from "@/components/LuxuryAppliances/Story"; 

const LuxuryAppliances = () => { 
  return (
    <div className=" lg:bg-mobileBG">
      <Banner />
       <Category />
      <FeaturedLuxuryBrands />
      <Story />
      <FindShowroom />
      <ContactApplianceSpecialist />
    </div>
  );
};

export default LuxuryAppliances;
