import Link from "next/link";
const SMSTerms = () => {
  return (
    <div className=" container-fuild max-w-full ">
      <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[73px] md:py-6 hidden">
        <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto align-middle">
          <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
            SMS Terms
          </h1>
        </section>
      </div>
      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[0px]  md:px-0">
        <section className="container max-w-1440 px-7  1440:px-4 1440:w-full flex items-start  md:flex-col md:flex-col ">
          <div className="flex flex-col gap-[30px] flex-1 max-w-[300px] sticky top-[180px] overflow-auto max-h-StoreSideBar md:max-w-full md:bg-[#F6F6F6] md:top-[109px]">
            <div className=" py-[18px]  pr-[15px] pl-[26px] rounded-[15px] grid gap-[7px] bg-[#F6F6F680] md:px-0 md:py-[10px]">
              <ul className="grid grid-cols-1 md:flex ">
                <li className=" py-3">
                  <Link
                    href={"/privacy-policy-cookie-restriction-mode"}
                    className="py-3 text-[15px] leading-6  font-medium pl-4 md:whitespace-nowrap md:px-3 border-l-1 border-[#0B223C] "
                  >
                    Privacy Policy{" "}
                  </Link>{" "}
                </li>
                <li className=" py-3">
                  <Link
                    href={"/terms-and-conditions"}
                    className=" py-3 text-[15px] leading-6  font-medium pl-4 md:whitespace-nowrap md:px-3 border-l-1 border-[#0B223C] "
                  >
                    Terms & Conditions{" "}
                  </Link>{" "}
                </li>
                <li className=" py-3">
                  <Link
                    href={"/accessibility-statement"}
                    className="   py-3 text-[15px] leading-6  font-medium pl-4 md:whitespace-nowrap md:px-3 border-l-1 border-[#0B223C]  md:px-3"
                  >
                    Accessibility{" "}
                  </Link>{" "}
                </li>
                <li className=" py-3">
                  <Link
                    href={"/sms-terms"}
                    className=" py-3 text-[15px] leading-6 pl-4 font-semibold text-[#0B223C] border-l-2 border-[#0B223C] md:border-b-2 md:border-l-0 md:whitespace-nowrap md:px-3"
                  >
                    SMS Terms{" "}
                  </Link>{" "}
                </li>
                <li className=" py-3">
                  <Link
                    href={"/california-privacy-rights"}
                    className=" py-3 text-[15px] leading-6  font-medium pl-4 md:whitespace-nowrap md:px-3 border-l-1 border-[#0B223C] "
                  >
                    California Privacy Rights{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white px-[38px] py-[14px] rounded-[15px] flex-1 md:px-0 md:px-0 md:px-0">
            <h1 className="text-4xl leading-[54px] font-medium text-left  mlg:text-3xl  md:text-2xl mb-4 text-[#0B223C]">
              SMS Terms
            </h1>
            <hr className="border-[#D4D4D4] border-[1px] mb-2"></hr>

            <section className="container max-w-1440  1440:px-4 1440:w-full mt-8">
              <div className="flex md:block items-center ">
                <div className="md:w-full w-full order-2 md:order-1 ">
                  <div className="  md:max-w-none w-full">
                    <p className="mb-4 md:text-sm">
                      By providing your phone number to one or more text
                      messaging programs, you expressly consent to receive
                      automated marketing or non-marketing text messages from
                      Airport Home Appliance or others texting on its behalf to
                      your phone number(s). Your consent to such messages is not
                      required as a condition to purchase goods or services from
                      Airport Home Appliance&apos;s. Number of messages per
                      month will vary based on the subscription list you&apos;ve
                      enrolled in. Consent is not required to purchase goods or
                      services. Message and data rates may apply.
                    </p>
                    <p className="mb-4 md:text-sm">
                      You may discontinue the receipt/Opt Out of these text
                      messages at any time by texting STOP to the short code for
                      the text messaging program from which you no longer wish
                      to receive a message (i.e., the short code number from
                      which its text messages are being sent). We may send you
                      an SMS message to confirm that you have been unsubscribed.
                      Similarly, for additional help, text HELP to the short
                      code for the text messaging program about which you have
                      questions, or contact customer service at 1-866-304-4449
                      or{" "}
                      <a
                        href="mailto:support@airportappliance.com"
                        className="text-blue-500"
                      >
                        support@airportappliance.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] hidden">
            <section className="container max-w-1440 px-7 1440:px-4 1440:w-full lg:px-0">
              <div className="flex md:block items-center ">
                <ul className=" grid grid-cols-3 gap-[26px] justify-around w-full text-center lg:gap-[16px] lg:text-base md:grid-cols-1">
                  <li className="text-cray-950 text-white h-[67px] py-5 rounded-[8px] border-[1px] border-gray-500">
                    <Link
                      href="/terms-and-conditions"
                      className="text-gray-700"
                    >
                      Terms and Conditions of Use
                    </Link>
                  </li>
                  <li className="text-cray-950 text-white h-[67px]  py-5 rounded-[8px] border-[1px] border-gray-500">
                    <Link
                      href="/privacy-policy-cookie-restriction-mode"
                      className="text-gray-700"
                    >
                      Privacy Statement
                    </Link>
                  </li>
                  <li className="text-cray-950 text-white h-[67px]  py-5 rounded-[8px] border-[1px] border-gray-500">
                    <Link
                      href="/california-privacy-rights"
                      className="text-gray-700"
                    >
                      Your California Privacy Rights
                    </Link>
                  </li>
                </ul>
               
              </div>
            </section>
          </div> */}
          
        </section>
      </div>
    </div>
  );
};

export default SMSTerms;
