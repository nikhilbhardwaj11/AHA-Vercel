import AdServiceIcon from "@/assets/images/ad-service.svg";
import buildIcon from "@/assets/images/build.svg";
import LeftIcon from "@/assets/images/left-arrow-icon.svg";
import ProtectionIcon from "@/assets/images/protection-icon.svg";
import VerifiedIcon from "@/assets/images/verified.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useAddToCart from "@/hooks/useAddToCart";
import useCalculateSubTotal from "@/hooks/useCalculateSubTotal";
import useCartDetails from "@/hooks/useCartDetails";
import CallIcon from "@/icons/CallIcon";
import ChatIcon from "@/icons/ChatIcon";
import EmailIcon from "@/icons/EmailIcon";
import { cn } from "@/lib/utils";
import { useGetWarrentyAndServicesQuery } from "@/redux/apiSlices/supportApi";
import { formatCurrency } from "@/utils/formatCurrency";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DynamicImage from "../DynamicImages/DynamicImage";
import InstallationSkeleton from "../Skeletons/InstallationSkeleton";
import WarrentySkeleton from "../Skeletons/WarrentySkeleton";
import { Button } from "../ui/button";
import NoImage from "@/assets/images/no-image.webp";
import OkIcon from "@/assets/images/Ok.svg";
import Loader from "../Loader";
import { useUpdateCartMutation } from "@/redux/apiSlices/userCartApi";
import RightMark from "@/assets/images/rightMark.svg";
import NoResultFound from "@/components/NoResultFound";

const StepOne = ({
  warrantyAndInstallationData,
  isFetching,
  addOnsPayload,
  setAddOnsPayload,
}) => {
  const { warranties = [] } = warrantyAndInstallationData || {};

  const warrentyArray = useMemo(() => {
    return (
      (warranties &&
        warranties.length > 0 &&
        [...warranties[0]?.warrantyPriceRanges]?.reverse()) ||
      []
    );
  }, [warranties]);

  return (
    <div>
      <div className=" px-[30px] pt-[30px] pb-4 ">
        {isFetching && <WarrentySkeleton />}
        {warrentyArray && warrentyArray.length > 0 && (
          <>
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
                  <button className="text-blue5 p-0 bg-transparent border-0 font-medium text-[12px] leading-[15px]">
                  <a
                    href="/warranty-support"
                    className="text-blue-500 underline"
                  >
                     Learn More
                  </a>
                   
                  </button>
                </div>
              </div>

              {warrentyArray &&
                warrentyArray?.length > 0 &&
                warrentyArray?.map((warrenty, index) => (
                  <div key={index} className="flex items-center space-x-2 my-1">
                    <Checkbox
                      id={warrenty?.warrantyType}
                      checked={
                        warrenty?.warrantyType ===
                        addOnsPayload?.warranties?.warrantyType
                      }
                      onCheckedChange={() =>
                        setAddOnsPayload((prev) => ({
                          ...prev,
                          warranties: warrenty,
                        }))
                      }
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

              {warrentyArray.length > 0 && (
                <div className="flex items-center space-x-2 my-1">
                  <Checkbox
                    id="decline"
                    checked={!addOnsPayload?.warranties}
                    onCheckedChange={() =>
                      setAddOnsPayload((prev) => ({
                        ...prev,
                        warranties: null,
                      }))
                    }
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
          </>
        )}
        {warrentyArray && !isFetching && warrentyArray.length === 0 && (
          <NoResultFound
            message="No Warranty Found!"
            minHeight="0"
            className="h-60"
          />
        )}
      </div>
    </div>
  );
};

const StepTwo = ({
  warrantyAndInstallationData,
  isFetching,
  addOnsPayload,
  setAddOnsPayload,
  categoryName,
}) => {
  const { addOnServices = [] } = warrantyAndInstallationData || {};
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

  return (
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
                  addOnsPayload.installationServiceId === installationServiceId
                }
                onCheckedChange={() =>
                  setAddOnsPayload((prev) => ({
                    ...prev,
                    installationServiceId,
                    installationService,
                    installationParts: [],
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
                      <div className="flex ml-12 py-0.5 gap-2" key={i.partSKU}>
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
                    installationParts: [],
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
  );
};

const ReviewCoverageOptions = ({
  productData,
  productId,
  sheetClose,
  deliveryPayload = {},
  isInstallationService,
  isWarranty,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const { addToCart, isAddToCartLoading, isAddToCartSuccess } = useAddToCart();
  const { getCountByProductId } = useCartDetails();
  const currentQuantityOfProduct = getCountByProductId({ productId });
  const [addOnsPayload, setAddOnsPayload] = useState({
    installationServiceId: null,
    warranties: {},
    installationParts: [],
  });
  const [steps, setSteps] = useState([
    { component: StepOne, title: "Step 1: Basic Information" },
  ]);
  const {
    categoryId,
    subCategory,
    subCategoryId,
    productName,
    productImages,
    price_details,
    category,
  } = productData;

  const { displayPrice, crossedPrice, cartPrice } = price_details || {};
  const { categoryName } = category || {};
  const subCategoryOneId = subCategory?.id || subCategoryId;

  const { data, isFetching } = useGetWarrentyAndServicesQuery({
    categoryId,
    subCategory: subCategoryOneId,
    productId,
  });

  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const { warranties = [], addOnServices = [] } = data?.data || {};

  useEffect(() => {
    const steps = [];
    if (isWarranty) {
      steps.push({ component: StepOne, title: "Step 1: Basic Information" });
    }
    if (isInstallationService) {
      steps.push({ component: StepTwo, title: "Step 2: Details" });
    }
    setSteps(steps);
  }, [isWarranty, isInstallationService]);

  const totalSubTotal = useCalculateSubTotal(
    addOnsPayload,
    cartPrice,
    displayPrice
  );
  const extractAddOnsPayloadIds = (data) => {
    const { warranties, installationServiceId, additionServices } = data;
    const warrantyPriceId = warranties?.id;

    return {
      installationServiceId,
      warrantyPriceId,
      additionServices,
    };
  };

  const addProductToCart = () => {
    const addToCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity: currentQuantityOfProduct + 1,
          ...deliveryPayload,
        },
      ],
    };
    addToCart(addToCartPayload);
  };

  const updateCartDetails = async () => {
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity: currentQuantityOfProduct,
          ...extractAddOnsPayloadIds(addOnsPayload),
        },
      ],
    };
    return await updateCart(updateCartPayload);
  };

  useEffect(() => {
    addProductToCart();
  }, []);

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      await updateCartDetails();
      router.push("/cart");
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSave = async () => {
    await updateCartDetails();
    sheetClose();
  };

  const CurrentStepComponent = steps[currentStep].component;

  useEffect(() => {
    if (warranties[0]?.warrantyPriceRanges.length > 0) {
      const initialWarrenty = warranties[0]?.warrantyPriceRanges?.find(
        (w) => w.warrantyType === "3"
      );
      setAddOnsPayload((prev) => ({ ...prev, warranties: initialWarrenty }));
    }
  }, [warranties.length]);

  return (
    <div className=" max-h-[100vh] overflow-auto">
      {isAddToCartLoading && <Loader />}
      <div className=" px-[30px] pt-[30px] pb-4 border-b border-gray-14">
        {isAddToCartSuccess && (
          <div className="flex items-center gap-[5px] mb-[18px]">
            <Image src={OkIcon} alt="icon" />

            <p className=" text-green3 text-[20px] leading-[30px] font-semibold">
              Item added to the cart
            </p>
          </div>
        )}{" "}
        <div className="flex gap-3">
          <div className="min-w-[97px] w-[97px] h-[94px] p-2 inline-flex items-center justify-between border rounded-[5px] border-gray-14">
            <DynamicImage
              src={
                getThumbnailUrl(productImages) ||
                productData?.thumbnail ||
                NoImage
              }
              alt="product-img"
              width={94}
              height={94}
              className="h-[50px] w-auto my-0 mx-auto"
            />
          </div>
          <div>
            <p className="text-base text-black two-line-dots">{productName}</p>
            <div className="flex flex-col items-end">
              <p className=" text-[17px] leading-[26px] text-black mt-2">
                {formatCurrency(cartPrice) || formatCurrency(displayPrice)}
              </p>
              <p className=" text-[14px] leading-[26px] text-gray6 line-through decoration-gray6">
                {formatCurrency(crossedPrice)}
              </p>
            </div>
          </div>
        </div>
        {currentStep === 1 && (
          <div className="mt-4">
            <p className="text-[13px] leading-[20px] text-black font-medium">
              Parts & Services
            </p>
            <div className="flex items-center justify-between text-[13px] leading-[20px] text-black font-thin">
              <p>
                {addOnsPayload?.warranties?.warrantyType} Year Protection Plan
                <button
                  className=" text-blue5 cursor-pointer ml-2 underline"
                  onClick={() => setCurrentStep(0)}
                >
                  Edit
                </button>
              </p>
              <p>{formatCurrency(addOnsPayload?.warranties?.warrantyPrice)}</p>
            </div>
          </div>
        )}
      </div>
      <CurrentStepComponent
        warrantyAndInstallationData={data?.data || {}}
        isFetching={isFetching}
        setAddOnsPayload={setAddOnsPayload}
        addOnsPayload={addOnsPayload}
        categoryName={categoryName || ""}
      />
      <div className=" px-[30px] pb-4">
        <div className="mt-10 pb-7 border-b border-gray-14 ">
          <p className=" font-medium text-[17px] leading-[25px] text-black2 flex items-center justify-end">
            Subtotal :&nbsp;
            <span className=" font-semibold text-[21px] leading-[32px]">
              {totalSubTotal}
            </span>
          </p>
          <p className="text-[12px] leading-[18px] text-black text-right">
            Taxes are calculated at checkout
          </p>
        </div>
        <div className="flex justify-between gap-1 pt-[17px]">
          <button
            className={cn(
              "inline-flex items-center gap-[5px] text-[14px] leading-[21px] text-black font-medium"
            )}
            onClick={handleSave}
            disabled={isLoading || isFetching}
          >
            <DynamicImage
              className="w-[8px] h-[11px]"
              src={LeftIcon}
              alt="icon"
            />{" "}
            Save & Keep Shopping
          </button>

          <Button
            onClick={handleNext}
            disabled={isLoading || isFetching}
            className=" bg-red3 h-[50px] rounded-10 min-w-[191px] text-[14px] leading-[21px] text-white font-medium"
          >
            {currentStep === steps.length - 1 ? "Review Cart" : "Continue"}
          </Button>
        </div>
        <div className=" justify-center flex-1 flex py-[9px] px-[14px] border border-gray-14 rounded-10 gap-8 items-center mt-[30px] mb-5">
          <p className=" text-[17px] leading-[18px] font-thin">Expert Help</p>
          <div className="flex gap-7 pl-8 border-l border-black py-3">
            <a
              href="tel:+18663044449"
              // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
              aria-label="call +18663044449"
            >
             <CallIcon />
            </a>
            <ChatIcon fill="#1C1B1F" width="19px" height="20px" />
             <a
                href="/contact"
                // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                aria-label="Email Us"
              >
             <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCoverageOptions;
