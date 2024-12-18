import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ManualsGuides from "./Manuals&Guides";
import ProductDetails from "./ProductDetails";
import Rebates from "./Rebates";
import Specifications from "./Specifications";
import useRenderPowerReviewSnippets from "@/hooks/useRenderPowerReviewSnippets";
import { useState } from "react";

const TabHeading = ({ heading }) => {
  return (
    <h3 className=" text-[20px] font-medium text-blue3 lg:text-[16px] lg:leading-[24px] lg:font-semibold">
      {heading}
    </h3>
  );
};

export function Tabs({
  productOverview,
  productHighlights,
  productDescription,
  productSpecifications,
  orderedSpecifications,
  productManualGuides,
  specificationImage,
  productImages = [],
  specificationPdfUrl,
  upcCode,
  sku,
  powerReviewsPayloads,
  rebates,
}) {
  const [value, setValue] = useState("item-1");

  useRenderPowerReviewSnippets(powerReviewsPayloads);

  const renderDimensions = () => {
    const dimensionsCategory = productSpecifications?.find(
      (category) => category.category === "Dimensions"
    );
    if (!dimensionsCategory) return null;
    const dimensionLabels = ["Height", "Width", "Depth"];
    const seenKeys = new Set();
    const dimensions = dimensionsCategory.details
      .filter(({ key }) =>
        dimensionLabels.some(
          (label) =>
            key.includes(label) && !seenKeys.has(label) && seenKeys.add(label)
        )
      )
      .map(({ key, value }) => `${key[0]} ${value} in`)
      .join(", ");

    return <div>Dimensions: {dimensions}</div>;
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem
        value="item-4"
        className=" rounded-[12px] overflow-hidden mb-4"
      >
        <AccordionTrigger className="bg-white py-7 px-9 lg:px-5 lg:py-[18px]">
          <div className="flex items-center gap-[66px]">
            <TabHeading heading="Product Details" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray15">
          <ProductDetails
            productHighlights={productHighlights}
            productOverview={productOverview}
            productDescription={productDescription}
            upcCode={upcCode}
            sku={sku}
            productManualGuides={productManualGuides}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-1"
        className=" rounded-[12px] overflow-hidden mb-4"
      >
        <AccordionTrigger className="bg-white py-7 px-9 lg:px-5 lg:py-[18px]">
          <div
            className="flex items-center gap-x-[66px] flex-wrap "
            style={{ maxWidth: "calc(100% - 20px)" }}
          >
            <TabHeading heading="Specifications" />

            <div className="text-blue3 text-[18px] font-normal lg:text-[12px] lg:leading-[18px]">
              {renderDimensions()}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray15">
          <Specifications
            productSpecifications={productSpecifications}
            orderedSpecifications={orderedSpecifications}
            specificationImage={specificationImage}
            productImages={productImages}
            specificationPdfUrl={specificationPdfUrl}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className=" rounded-[12px] overflow-hidden mb-4"
      >
        <AccordionTrigger className="bg-white py-7 px-9 lg:px-5 lg:py-[18px]">
          <TabHeading heading="Manuals & Guides" />
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray15">
          <ManualsGuides productManualGuides={productManualGuides} />
        </AccordionContent>
      </AccordionItem>
      {rebates?.length > 0 && (
        <AccordionItem
          value="item-3"
          className=" rounded-[12px] overflow-hidden mb-4"
        >
          <AccordionTrigger className="bg-white py-7 px-9 lg:px-5 lg:py-[18px]">
            <TabHeading heading="Rebates" />
          </AccordionTrigger>
          <AccordionContent className="bg-white border-t border-gray15">
            <Rebates rebates={rebates} />
          </AccordionContent>
        </AccordionItem>
      )}
      <AccordionItem
        value="item-5"
        className=" rounded-[12px] overflow-hidden mb-4"
      >
        <AccordionTrigger className="bg-white py-7 px-9 lg:px-5 lg:py-[18px]">
          <TabHeading heading="Customer Reviews" />
        </AccordionTrigger>
        <AccordionContent className="bg-white border-t border-gray15">
          <div className="py-10 px-9">
            <div id="pr-reviewdisplay"/>
            <div id="pr-questionsnippet"/>
            <div id="pr-questiondisplay"/>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
