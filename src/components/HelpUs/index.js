import Link from "next/link";
import CallIcon from "@/icons/CallIcon";
import ChatIcon from "@/icons/ChatIcon";
import EmailIcon from "@/icons/EmailIcon";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HelpUs = ({ title }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="lg:px-0 lg:py-3 cursor-pointer ">
          {title}
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-[500px] p-0 rounded-20">
        <SheetTitle></SheetTitle>
        <div className="mid-content-wrapper">
          <div className="ef-HelpWrapper mt-20">
            <h2 className="text-2xl font-semibold text-center my-12">
              Hey there. <br role="presentation" />
              How can we help you out?
            </h2>
            <div className="ContactDetails flex flex-col items-center text-center gap-4 max-w-[300px] mx-auto">
              <p className="text-lg">Give us a call</p>

              <a
                href="tel:+18663044449"
                className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                aria-label="call +18663044449"
              >
                <div className="mr-3">
                  <CallIcon fill="#0A223C" />
                </div>
                <div className="Content flex flex-col text-left">
                  <span className="Number">(866) 304-4449</span>
                </div>
              </a>

              <a
                href="/contact"
                className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                aria-label="Email Us"
              >
                <div className="mr-3">
                  <EmailIcon fill="#0A223C" />
                </div>
                <div className="Content flex flex-col">
                  <span className="Label font-medium">Email Us</span>
                </div>
              </a>

              <a
                href="#"
                className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                aria-label="Live Chat"
              >
                <div>
                  <ChatIcon
                    fill="#0A223C"
                    width="19px"
                    height="20px"
                    className="mr-3"
                  />
                </div>
                <div className="Content flex flex-col">
                  <span className="Label font-medium">Live Chat</span>
                </div>
              </a>
            </div>

            <div className="OpenStoreDetails text-center mt-6">
              <p className="text-lg font-medium">Hours</p>
              <span className="block text-xl my-2">
                MON - FRI 10 AM - 7 PM PT
              </span>
              <span className="block text-xl">SAT - SUN 10 AM - 6 PM PT</span>
            </div>
          </div>

          <div className="HeplCardBottom mt-6 text-center">
            <a
              className="inline-block px-6 py-3 bg-blue2 text-white rounded-[8px] transition"
              href="/store"
            >
              Store &amp; Pick Up Locations
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HelpUs;
