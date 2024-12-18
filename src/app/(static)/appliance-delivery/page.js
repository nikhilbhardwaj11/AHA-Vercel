import Image from "next/image";
import applianceDeliveryBanner from "@/assets/images/applianceDeliveryBanner.webp";

const ApplianceDelivery = () => {
  return (
    <div className="columns">
      <div className="container-fuild max-w-full">
        <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7 mx-auto h-auto">
            <h1 className="text-4xl leading-[54px] font-bold text-center mlg:text-3xl md:text-2xl md:block">
              Appliance Delivery
            </h1>
          </section>
        </div>
      </div>

      <div className="px-5 container max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
        <Image
          src={applianceDeliveryBanner}
          alt="Appliance Installation"
          title="Appliance Installation"
          className="w-full h-auto"
        />
      </div>

      <div className="py-8 mt-8 lg:py-0 lg:mt-0">
        <div className="px-5 container max-w-1440 lg:p-[14px] grid grid-cols-2  gap-[40px] md:grid-cols-1">
          {/* Left Column - Delivery & Shipping Information */}
          <div className="bg-white p-6 shadow-md rounded-lg w-full">
            <h3 className="text-[18px] font-semibold mb-4">Delivery & Shipping Information</h3>
            <p className="text-gray-700 mb-4 text-[14px]">
              All orders for in-stock items & items priced $499 & above, placed before 1 PM (Monday through Friday), are eligible for Next Day Delivery...
            </p>
            <p className="text-gray-700 mb-4 text-[14px]">
              Expedited delivery is subject to slot availability. Contact us for next-day delivery slot availability...
            </p>
            <p className="text-gray-700 mb-4 text-[14px]">
              Customers must take delivery of all items within 30 days of arrival or “In-Stock date.” Items not delivered within this period may be subject to cancellation and refund.
            </p>

            {/* Additional Delivery Information */}
            <div className="mb-6">
              <h3 className="text-[18px] font-semibold mb-4">48-Hour Call</h3>
              <p className="text-gray-700 text-[14px]">
                You will be contacted by phone and email between 10:00 AM – 10:30 AM two days prior to delivery...
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-[18px] font-semibold mb-4">Delivery Time Window Courtesy Call</h3>
              <p className="text-gray-700 text-[14px]">
                You will receive a call, text, and email at 2:00 PM the day before your delivery...
              </p>
            </div>

            <div className="mb-6">
              <p className="text-black-700 font-semibold text-[14px]">
                MISSED YOUR VERIFICATION CALLS or NEED TO RESCHEDULE YOUR DELIVERY?
              </p>
              <p className="text-black-700 font-semibold text-[14px]">CALL (866) 304-4449 (Option 2 – Customer Service)</p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold mb-4 text-red-600">PLEASE BE ADVISED A REDELIVERY FEE OF $ 64.95 MAY BE CHARGED:</h3>
              <ul className="list-disc list-inside text-gray-700 text-[14px]">
                <li>For failure to be present during scheduled delivery</li>
                <li>An install/hook up is not completed during time of delivery because plumbing or electrical conditions are faulty and not up to code and the team will have to come out again to finish install.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Track Appointment and Pickup Information */}
          <div className="bg-white p-6 shadow-md rounded-lg w-full">
            <h3 className="text-[18px] font-semibold mb-4">Track Your Appointment</h3>
            <a
              href="https://airporthomeappliance.dispatchtrack.com/track/widget/d036439"
              className="w-[200px] px-[15px] py-[9px] text-[13px] bg-[#0C2340] font-semibold rounded-[35px] text-white text-center flex items-center justify-center"
            >
              Track Your Appointment
            </a>

            <div className="mb-6 mt-6">
              <h3 className="text-[18px] font-semibold mb-4">Installation Safety Protocols</h3>
              <p className="text-gray-700 text-[14px]">
                Our staff will contact you after purchase to confirm your order, schedule pick-up...
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-[18px] font-semibold mb-4">Warehouse & In-Store Pickup</h3>
              <p className="text-black-700 text-[14px]">
                Pickup is available at our Product Distribution Center:
              </p>
              <p className="text-black-700 font-semibold text-[14px] mb-4">
                <a href="/store/106" className="text-black underline">
                  3525 Arden Road, Suite 100, Hayward, CA 94545
                </a>
                <br />PARK AT Dock #56
              </p>
              <p className="text-gray-700 text-[14px]">
                Customer must pick up all items within 30 days of arrival or “In-Stock date”...
              </p>
            </div>

            <div className="mb-6">
              <p className="text-black-700 font-semibold text-[14px]">(Online orders must be picked up by the original purchaser)</p>
            </div>

            <div className="mb-6">
              <p className="text-black-700 font-semibold text-[14px]">Please bring:</p>
              <ul className="list-disc list-inside text-gray-700 text-[14px]">
                <li>A government-issued ID</li>
                <li>Credit Card matching the ID used for purchase</li>
                <li>Pick-up confirmation email</li>
              </ul>
              <p className="text-gray-700 mt-4 text-[14px]">
                NOTE: If unable to print your pickup notification, ensure it is ready on your mobile device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplianceDelivery;