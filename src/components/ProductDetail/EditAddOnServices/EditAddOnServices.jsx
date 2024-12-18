import buildIcon from "@/assets/images/build.svg";
import VerifiedIcon from "@/assets/images/verified.svg";
import InstallationSkeleton from "@/components/Skeletons/InstallationSkeleton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useGetWarrentyAndServicesQuery } from "@/redux/apiSlices/supportApi";
import { useUpdateCartMutation } from "@/redux/apiSlices/userCartApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import AdServiceIcon from "@/assets/images/ad-service.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCurrency } from "@/utils/formatCurrency";
import RightMark from "@/assets/images/rightMark.svg";

const EditAddOnServices = ({
  productId,
  categoryId,
  subCategoryId,
  selectedWarrantyId,
  quantity,
  selectedAdditionalServiceId,
  selectedInstallationServiceId,
  categoryName,
  additionalServicesData,
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className={cn(" text-[15px] leading-[23px] text-blue5 lg:text-[14px] lg:leading-[21px] hover:underline hover:underline-offset-2")}>
          {!selectedAdditionalServiceId && !selectedInstallationServiceId
            ? "Add Services"
            : "Edit Services"}
        </button>
      </SheetTrigger>
      <SheetContent className="w-[500px] p-0 rounded-20">
        <SheetBody
          selectedInstallationServiceId={selectedInstallationServiceId}
          selectedAdditionalServiceId={selectedAdditionalServiceId}
          categoryName={categoryName}
          additionalServicesData={additionalServicesData}
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

export default EditAddOnServices;

const SheetBody = ({
  productId,
  categoryId,
  subCategoryId,
  selectedWarrantyId,
  quantity,
  setIsSheetOpen,
  categoryName,
  selectedAdditionalServiceId,
  selectedInstallationServiceId = null,
  additionalServicesData,
}) => {
  const { toast } = useToast();

  const [updateCart, { isSuccess, isLoading }] = useUpdateCartMutation();

  const { data, isFetching } = useGetWarrentyAndServicesQuery({
    categoryId,
    subCategoryId,
    productId,
  });

  const { addOnServices = [] } = data?.data || {};
  
  const [installationService = {}, haulAwayService = {}] = addOnServices;

  const {
    installationFee,
    InstallationPart = [],
    installationServiceId,
    optOutOption,
  } = installationService || {};

  const {
    haulAway,
    moveAway,
    haulAwayPrice = 0,
    moveAwayPrice = 0,
    installationServiceId: additionalServiceId,
  } = haulAwayService || {};

  const [installation, ...installationParts] = InstallationPart;

  const [addOnsPayload, setAddOnsPayload] = useState({
    installationServiceId: selectedInstallationServiceId,
    installationParts: [],
    additionServices: {
      haulaway: additionalServicesData?.haulAway || false,
      moveAway: additionalServicesData?.moveAway || false,
    },
  });

  const handleUpdateServices = () => {
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity,
          ...addOnsPayload,
        },
      ],
    };
    updateCart(updateCartPayload);
  };

  useEffect(() => {
    if (isSuccess && data?.success) {
      setIsSheetOpen(false);
      toast({
        title: data?.message || "Services updated successfully",
      });
    }
  }, [isSuccess]);

  return (
    <>
      <div className=" px-[30px] pt-[30px] pb-4 ">
        <h3 className=" text-[18px] leading-[27px] text-black font-medium mb-6 ">
          Next, let’s review service options.
        </h3>
        {isFetching && <InstallationSkeleton />}

        {!isFetching && installationService && (
          <div className="border border-gray-14 rounded-10 px-[14px] py-[18px]">
            <div className="flex gap-4 border-b border-gray-14 pb-[18px] mb-[18px]">
              <Image
                src={buildIcon}
                className="w-[27px] h-[27px] mt-4px"
                alt="icon"
              />
              <div>
                <h4 className="text-[17px] leading-[26px] font-medium mb-[5px]">
                  Installation Services
                </h4>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={
                    addOnsPayload.installationServiceId ===
                    installationServiceId
                  }
                  onCheckedChange={() =>
                    setAddOnsPayload((prev) => ({
                      ...prev,
                      installationServiceId,
                      installationService,
                      installationParts:[]
                    }))
                  }
                />

                <div className="flex-1 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <p className="text-[15px] leading-[23px]">
                      {categoryName} Installation
                    </p>
                    <Image
                      className="w-[18px] h-[18px] mr-[3px]"
                      src={VerifiedIcon}
                      alt="icon"
                    />
                  </div>
                  <p className="text-[14px] leading-[22px] font-medium">
                    {formatCurrency(installationFee)}
                  </p>
                </div>
              </div>
              <p className="ml-6 leading-[18px] text-[13px]">
                Installation + Required Parts
              </p>
              {installation && (
                <div className=" flex gap-2">
                  <span className=" w-4 ml-6">
                    <Image
                      src={RightMark}
                      alt="icon"
                      className=" w-[16px] h-[16px]"
                    />
                  </span>
                  <p className="text-[13px]">
                    Installation{" "}
                    {installation.price
                      ? formatCurrency(installation.price)
                      : "Free"}
                  </p>
                </div>
              )}
              {!optOutOption &&
                (installationParts.length === 0 ? (
                  <div className=" flex gap-2">
                    <span className=" w-4 ml-6">
                      <Image
                        src={RightMark}
                        alt="icon"
                        className=" w-[16px] h-[16px]"
                      />
                    </span>
                    <p className="text-[13px]">No Parts Required</p>
                  </div>
                ) : installationParts?.length === 1 ? (
                  <div className=" flex gap-2">
                    <span className=" w-4 ml-6">
                      <Image
                        src={RightMark}
                        alt="icon"
                        className=" w-[16px] h-[16px]"
                      />
                    </span>
                    <p className="text-[13px]">
                      {installationParts[0].partName || "___"}
                      {formatCurrency(installationParts[0].price)}
                    </p>
                  </div>
                ) : (
                  installationParts?.length > 1 && (
                    <>
                      <div className=" flex gap-2">
                        <span className=" w-4 ml-6">
                          <Image
                            src={RightMark}
                            alt="icon"
                            className=" w-[16px] h-[16px]"
                          />
                        </span>
                        <p className="text-[13px]">
                          Required Parts For Installation{" "}
                          {formatCurrency(installationFee)}
                        </p>
                      </div>
                      {installationParts?.map((i) => (
                        <div
                          className="flex ml-12 py-0.5 gap-2"
                          key={i.partSKU}
                        >
                          <Checkbox
                            checked={addOnsPayload?.installationParts?.some(
                              (service) => service === i.partSKU
                            )}
                            disabled={
                              addOnsPayload.installationServiceId !==
                              installationServiceId
                            }
                            onCheckedChange={() => {
                              setAddOnsPayload((prev) => {
                                const isAlreadySelected =
                                  prev.installationParts.some(
                                    (service) => service === i.partSKU
                                  );

                                const updatedServices = isAlreadySelected
                                  ? prev.installationParts.filter(
                                      (service) => service !== i?.partSKU
                                    )
                                  : [i.partSKU];

                                return {
                                  ...prev,
                                  installationParts: updatedServices,
                                };
                              });
                            }}
                          />
                          <p className="text-[13px]">{i.partName || "----"}</p>
                        </div>
                      ))}
                    </>
                  )
                ))}
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={!addOnsPayload.installationServiceId}
                  onCheckedChange={() =>
                    setAddOnsPayload((prev) => ({
                      ...prev,
                      installationServiceId: null,
                      installationService: {},
                      installationParts:[]
                    }))
                  }
                />

                <div className="flex-1 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <p className="text-[15px] leading-[23px]">
                      No, I’ll install it myself.
                    </p>
                  </div>
                </div>
              </div>
              <p className="ml-6 leading-[18px] text-[13px]">
                In-box delivery only
              </p>
            </div>

            {optOutOption && installationParts?.length > 0 && (
              <>
                <div className=" flex gap-2">
                  <span className=" w-4 ml-6">
                    <Image
                      src={RightMark}
                      alt="icon"
                      className=" w-[16px] h-[16px]"
                    />
                  </span>
                  <p className="text-[13px]">
                    Required Parts For Installation{" "}
                    {/* {formatCurrency(installationFee)} */}
                  </p>
                </div>
                {installationParts?.map((i) => (
                  <div className="flex ml-12 py-0.5 gap-2" key={i.partSKU}>
                    <Checkbox
                      checked={addOnsPayload?.installationParts?.some(
                        (service) => service === i.partSKU
                      )}
                      disabled={
                        addOnsPayload.installationServiceId ===
                        installationServiceId
                      }
                      onCheckedChange={() => {
                        setAddOnsPayload((prev) => {
                          const isAlreadySelected = prev.installationParts.some(
                            (service) => service === i.partSKU
                          );

                          const updatedServices = isAlreadySelected
                            ? prev.installationParts.filter(
                                (service) => service !== i?.partSKU
                              )
                            : [i.partSKU];

                          return {
                            ...prev,
                            installationParts: updatedServices,
                          };
                        });
                      }}
                    />
                    <p className="text-[13px]">{i.partName || "----"}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
        {/* Additional Services Section */}
        {!isFetching && haulAwayService && (
          <div className="border border-gray-14 rounded-10 px-[14px] py-[18px] mt-[18px]">
            <div className="flex gap-4 border-b border-gray-14 pb-[18px] mb-[18px]">
              <Image
                src={AdServiceIcon}
                className="w-[27px] h-[27px] mt-4px"
                alt="icon"
              />
              <div>
                <h4 className="text-[17px] leading-[26px] font-medium mb-[5px]">
                  Haul Away
                </h4>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              {haulAway && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={addOnsPayload?.additionServices?.haulaway}
                    onCheckedChange={(checked) =>
                      setAddOnsPayload((prev) => ({
                        ...prev,
                        additionServices: {
                          ...prev?.additionServices,
                          haulaway: !prev?.additionServices?.haulaway,
                          additionalServiceId,
                        },
                        haulAwayPrice: (checked && haulAwayPrice) || "0",
                      }))
                    }
                  />
                  <p>Haul Away</p>
                  <p className="text-[14px] leading-[22px] font-medium">
                    {formatCurrency(haulAwayPrice)}
                  </p>
                </div>
              )}
              {moveAway && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={addOnsPayload?.additionServices?.moveAway}
                    onCheckedChange={(checked) =>
                      setAddOnsPayload((prev) => ({
                        ...prev,
                        additionServices: {
                          ...prev?.additionServices,
                          moveAway: !prev?.additionServices?.moveAway,
                          additionalServiceId,
                        },
                        moveAwayPrice: (checked && moveAwayPrice) || "0",
                      }))
                    }
                  />
                  <p>Move Old Appliances to Other Room</p>
                  <p className="text-[14px] leading-[22px] font-medium">
                    {formatCurrency(moveAwayPrice)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end px-6 pt-[17px]">
        <Button
          onClick={handleUpdateServices}
          disabled={isLoading || isFetching}
          className=" bg-red3 h-[50px] rounded-10 min-w-[191px] text-[14px] leading-[21px] text-white font-medium"
        >
          {!selectedAdditionalServiceId && !selectedInstallationServiceId
            ? "Add Services"
            : "Update Services"}{" "}
        </Button>
      </div>
    </>
  );
};
