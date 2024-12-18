import PaymentIcon from "@/assets/images/payment-icon.svg";
import Paypal from "@/assets/images/paypal-img.png";

import visa from "@/assets/images/visa.png";
import discover from "@/assets/images/discover.png";
import masterCard from "@/assets/images/masterCard.png";
import amricanCard from "@/assets/images/amricanCard.png";
import AuthorizeImage from "@/assets/images/authorizeImage.png";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import AuthorizeDotNet from "@/components/AuthorizeDotNet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const PaymentMethods = ({ onChange, paymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethod); // Track selected payment method
  const formRef = useRef(null); // Create a ref to the HostedForm

  const handleRadioChange = (value) => {
    setSelectedMethod(value);
    onChange({ paymentMethod: value }); // Call the parent handler
  };

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.submit(); // Programmatically trigger the form submission
    }
  };

  return (
    <>
      <div className="hidden lg:flex gap-3 px-4">
        <Image
          src={PaymentIcon}
          alt="icon"
          className="w-[26px] h-[26px] lg:block hidden"
        />
        <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold">
          Payment Method
        </h4>
      </div>
      <div className="flex gap-[25px] pl-[25px] mt-[18px] lg:px-4">
        <Image
          src={PaymentIcon}
          alt="icon"
          className="mt-[25px] w-[26px] h-[26px] lg:hidden"
        />
        <div className="py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white lg:px-3 lg:py-5 lg:m-0">
          <div>
            <h4 className="lg:hidden text-blue3 text-[17px] mb-[18px] leading-[25px] font-semibold">
              Payment Method
            </h4>
            <div className="mt-[30px] lg:m-0">
              <RadioGroup
                value={selectedMethod}
                onValueChange={handleRadioChange}
                className="gap-6"
              >
                {/* PayPal Option */}
                <div className="flex items-center space-x-2 justify-between">
                  <Label htmlFor="paypal">
                    <div className="flex items-center gap-5">
                      <div className="w-full max-w-[107px]">
                        <Image
                          src={Paypal}
                          alt="icon"
                          className="h-[30px] w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-black text-[13px] leading-[16px] font-semibold">
                          Pay with PayPal
                        </h3>
                        <p className="text-gray6 text-[11px] leading-[12px] font-semibold">
                          You will be redirected to the external website.
                        </p>
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="paypal" id="paypal" />
                </div>

                {/* Authorize.Net Option */}
                <div className="flex items-center space-x-2 justify-between">
                  <Label htmlFor="authorize" className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-full max-w-[50px]">                      
                        <Image
                            src={amricanCard}
                            alt="icon"
                            className="h-[40px] w-auto object-contain"
                          />                       
                      </div>
                      <div className="w-full max-w-[50px]">
                        <Image
                          src={visa}
                          alt="icon"
                          className="h-[50px] w-auto object-contain"
                        />                        
                      </div>
                      <div className="w-full max-w-[50px]">
                        <Image
                          src={masterCard}
                          alt="icon"
                          className="h-[50px] w-auto object-contain"
                        />                        
                      </div>
                      <div className="w-full max-w-[50px]">
                        <Image
                          src={discover}
                          alt="icon"
                          className="h-[50px] w-auto object-contain"
                        />                        
                      </div>                     
                        
                      <div>
                        <h3 className="text-black text-[13px] leading-[16px] font-semibold">
                          Pay with Credit Card
                        </h3>
                        {/* <p className="text-gray6 text-[11px] leading-[12px] font-semibold">
                          You will be redirected to the external website.
                        </p> */}
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="authorize" id="authorize" />
                </div>

                 {/* Affrim Option */}
                 <div className="flex items-center space-x-2 justify-between">
                  <Label htmlFor="affirm" className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-full max-w-[107px]">                   
                        <span
                          className="__affirm-logo __affirm-logo-blue"
                          style={{ fontSize: "28px" }}
                        >
                          Affirm
                        </span>                  
                      </div>                                       
                        
                      <div>
                        <h3 className="text-black text-[13px] leading-[16px] font-semibold">
                         Pay over time
                        </h3>
                        {/* <p className="text-gray6 text-[11px] leading-[12px] font-semibold">
                          You will be redirected to the external website.
                        </p> */}
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="affirm" id="affirm" />
                </div>
                 {/* <div className="flex items-center space-x-2 justify-between">
                  <Label htmlFor="Affrim">
                    <div className="flex items-center gap-5">
                      <div className="w-full max-w-[107px]">
                        <span
                          className="__affirm-logo __affirm-logo-blue"
                          style={{ fontSize: "28px" }}
                        >
                          Affirm
                        </span>
                      </div>
                      <div className="w-full max-w-[107px]">
                        <h3 className="text-black text-[13px] leading-[16px] font-semibold">
                         Pay over time
                        </h3>
                      </div>
                    </div>
                  </Label>
                  <RadioGroupItem value="Affirm" id="Affirm" />
                </div> */}

                 {/* <div className="flex items-center space-x-2 justify-between">
                <Label htmlFor="r2" className="flex-1">
                  <div className="flex items-center gap-5">
                    <div className="w-full max-w-[107px]">
                      <Image
                        src={Paypal}
                        alt="icon"
                        className="h-[30px] w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className=" text-black text-[13px] leading-[16px] font-semibold">
                        Synchrony Home card - Pay over time
                      </h3>
                    </div>
                  </div>
                </Label>

                <RadioGroupItem value="comfortable" id="r2" />
              </div>
              <div className="flex items-center space-x-2 justify-between">
                <Label htmlFor="r3" className="flex-1">
                  <div className="flex items-center gap-5">
                    <div className="w-full max-w-[107px]">
                      <Image
                        src={Paypal}
                        alt="icon"
                        className="h-[30px] w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className=" text-black text-[13px] leading-[16px] font-semibold">
                        Pay over time
                      </h3>
                    </div>
                  </div>
                </Label>

                <RadioGroupItem value="compact" id="r3" />
              </div> */}
              {/* <button className=" text-[16px] leading-[34px] font-medium mt-[25px]">
              Add new card
            </button> */}
              </RadioGroup>

              {/* Conditionally Render Authorize.Net Form */}
              {selectedMethod === "authorize" && (
                <div className="mt-4">
                  <AuthorizeDotNet />
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;