import ProtectionIcon from "@/assets/images/protection-icon.svg";
import VerifiedIcon from "@/assets/images/verified.svg";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import WarrentySkeleton from "@/components/Skeletons/WarrentySkeleton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useGetWarrentyAndServicesQuery } from "@/redux/apiSlices/supportApi";
import { useUpdateCartMutation } from "@/redux/apiSlices/userCartApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const EditWarranty = ({
  productId,
  categoryId,
  subCategoryId,
  selectedWarrantyId,
  quantity,
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className={cn(" text-[15px] leading-[23px] text-blue5 lg:text-[14px] lg:leading-[21px] hover:underline hover:underline-offset-2")}>
          {selectedWarrantyId === null ? "Add Warranty" : "Edit Warranty"}
        </button>
      </SheetTrigger>
      <SheetContent className="w-[500px] p-0 rounded-20">
        <SheetBody
          productId={productId}
          categoryId={categoryId}
          subCategoryId={subCategoryId}
          selectedWarrantyId={selectedWarrantyId}
          quantity={quantity}
          setIsSheetOpen={setIsSheetOpen}
        />
      </SheetContent>
    </Sheet>
  );
};

export default EditWarranty;

const SheetBody = ({
  productId,
  categoryId,
  subCategoryId,
  selectedWarrantyId = undefined,
  quantity,
  setIsSheetOpen,
}) => {
  const { data, isFetching } = useGetWarrentyAndServicesQuery({
    categoryId,
    subCategoryId,
    productId,
  });
  const { toast } = useToast();
  const warrantyAndInstallationData = data?.data || [];
  const warrantyArray =
    warrantyAndInstallationData?.warranties?.[0]?.warrantyPriceRanges || [];
  const [selectedWarranty, setSelectedWarranty] = useState(selectedWarrantyId);
  const [updateCart, { isSuccess, isLoading: isUpdateWarrantyLoading }] =
    useUpdateCartMutation();

  const handleUpdateWarranty = async ({ selectedWarranty }) => {
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity,
          warrantyPriceId: Number(selectedWarranty),
        },
      ],
    };
    await updateCart(updateCartPayload);
    setIsSheetOpen(false);
  };

  useEffect(() => {
    if (isSuccess && data?.success) {
      toast({
        title: data?.message || "Warranty updated successfully",
      });
    }
  }, [isSuccess]);

  return (
    <>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
      <div>
        <div className=" px-[30px] pt-[30px] pb-4 ">
          <h3 className=" text-[18px] leading-[27px] text-black font-medium mb-6 ">
            Before proceeding, let’s review coverage options.
          </h3>
          <div className="border border-gray-14 rounded-10 px-[14px] py-[18px]">
            <div className="flex gap-4 border-b border-gray-14 pb-[18px] mb-[18px]">
              <DynamicImage
                src={ProtectionIcon}
                className="w-[36px] h-[32px] mt-4px"
                alt="icon"
              />
              <div>
                <h4 className=" text-[17px] leading-[26px] font-medium mb-[5px]">
                  Protection Plans
                </h4>
                <p className=" text-[13px] leading-[20px] mb-[7px]">
                  Enhance your manufacturer warranty and get extended coverage
                  when the warranty ends
                </p>
                <button className="text-blue5 p-0 bg-transparent border-0 font-medium text-[12px] leading-[15px] hover:underline hover:underline-offset-2">
                  Learn More
                </button>
              </div>
            </div>
            {isFetching && <WarrentySkeleton />}
            {!isFetching &&
              warrantyArray &&
              warrantyArray?.length > 0 &&
              warrantyArray?.map((warrenty) => (
                <div
                  key={warrenty?.id}
                  className="flex items-center space-x-2 my-1"
                >
                  <Checkbox
                    id={warrenty?.warrantyType}
                    checked={warrenty?.id === selectedWarranty}
                    onCheckedChange={() => setSelectedWarranty(warrenty?.id)}
                  />
                  <Label
                    htmlFor={warrenty?.warrantyType}
                    className="inline-flex flex-1 justify-between items-center"
                  >
                    <p className=" text-[15px] leading-[23px] inline-flex items-center">
                      {warrenty?.warrantyType} Years Warranty
                    </p>
                    {warrenty?.warrantyType == 3 && (
                      <p className=" text-[15px] leading-[23px] inline-flex items-center gap-2">
                        <span className="text-blue5 text-[12px] leading-[18px] inline-flex items-center">
                          <Image
                            className="w-[18px] h-[18px] mr-[3px]"
                            src={VerifiedIcon}
                            alt="icon"
                          />
                          Most Popular
                        </span>
                      </p>
                    )}
                    <p className=" text-[14px] leading-[22px] font-medium">
                      ${warrenty?.warrantyPrice || 0}
                    </p>
                  </Label>
                </div>
              ))}
            {warrantyArray.length > 0 && (
              <div className="flex items-center space-x-2 my-1">
                <Checkbox
                  id="decline"
                  checked={selectedWarranty === null}
                  onCheckedChange={() => setSelectedWarranty(null)}
                />
                <Label
                  htmlFor="decline"
                  className="inline-flex flex-1 justify-between items-center"
                >
                  <p className=" text-[15px] leading-[23px] inline-flex items-center gap-2">
                    Decline Protection
                  </p>
                </Label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end px-6 pt-[17px]">
        <Button
          onClick={() => handleUpdateWarranty({ selectedWarranty })}
          disabled={isUpdateWarrantyLoading || isFetching}
          className=" bg-red3 h-[50px] rounded-10 min-w-[191px] text-[14px] leading-[21px] text-white font-medium"
        >
          {isUpdateWarrantyLoading
            ? "Updating..."
            : selectedWarrantyId === null
            ? "Add Warranty"
            : "Update Warranty"}{" "}
        </Button>
      </div>
    </>
  );
};
