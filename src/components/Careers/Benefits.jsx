import Image from "next/image";
import BenefitsSmallCards1 from "@/assets/images/static/benefits-small-card-icon-1.png";
import BenefitsSmallCards2 from "@/assets/images/static/benefits-small-card-icon-2.png";
import BenefitsSmallCards3 from "@/assets/images/static/benefits-small-card-icon-3.png";
import BenefitsSmallCards4 from "@/assets/images/static/benefits-small-card-icon-4.png";
import BenefitsSmallCards5 from "@/assets/images/static/benefits-small-card-icon-5.png";
import BenefitsSmallCards6 from "@/assets/images/static/benefits-small-card-icon-6.png";
import BenefitsSmallCards7 from "@/assets/images/static/benefits-small-card-icon-7.png";
import BenefitsSmallCards8 from "@/assets/images/static/benefits-small-card-icon-8.png";
import BenefitsSmallCards9 from "@/assets/images/static/benefits-small-card-icon-9.png";
import BenefitsSmallCards10 from "@/assets/images/static/benefits-small-card-icon-10.png";
import BenefitsSmallCards11 from "@/assets/images/static/benefits-small-card-icon-11.png";
import BenefitsSmallCards12 from "@/assets/images/static/benefits-small-card-icon-12.png";
import BenefitsSmallCards13 from "@/assets/images/static/benefits-small-card-icon-13.png";
import BenefitsBigCardsIcon1 from "@/assets/images/static/big-card-icon-1.png";
import BenefitsBigCardsIcon2 from "@/assets/images/static/big-card-icon-2.png";
import BenefitsBigCardsIcon3 from "@/assets/images/static/big-card-icon-3.png";
import BenefitsBigCardsIcon4 from "@/assets/images/static/big-card-icon-4.png";
import BenefitsBigCardsIcon5 from "@/assets/images/static/big-card-icon-5.png";

const SmallCard = ({ src, heading }) => {
  return (
    <div className=" flex items-center px-4 py-5 gap-3   bg-[#D0E8FE70] ">
      <Image src={src} alt="img" width={40} height={40} />
      <p className=" text-[16px] leading-[25px]">{heading}</p>
    </div>
  );
};

const BigCard = ({ src, heading, subHeading }) => {
  return (
    <div className="flex gap-[30px] mob:flex-col mob:gap-5">
      <Image src={src} alt="icon" className="w-[79px] h-[79px] mob:w-[55px] mob:h-[55px]" />
      <div>
        <h2 className="text-[20px] text-[#161C2D] font-semibold mb-[15px]">{heading}</h2>
        <p className=" text-[17px] leading-[29px] text-[#161C2D] five-line-dot">{subHeading}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className=" pt-[70px] mob:pt-10 ">
      <h2 className=" text-[36px] mb-[8px] leading-[54px] font-bold text-center mob:text-[30px] mob:leading-9">
        What benefits are waiting for you?
      </h2>
      <h6 className=" text-[18px] mb-[83px] leading-[28px] text-center lg:mb-12">
        Visioncraft offers a variety of hand-picked benefits that you can take
        advantage of!
      </h6>
      <div className=" max-w-[1200px] pb-[100px]  mx-auto my-0 grid grid-cols-200  gap-x-[30px] gap-y-[28px] mob:pb-[60px]">
        <SmallCard src={BenefitsSmallCards1} heading="Flexible working hours" />
        <SmallCard src={BenefitsSmallCards2} heading="Sport compensation" />
        <SmallCard src={BenefitsSmallCards3} heading="Health care Insurance" />
        <SmallCard src={BenefitsSmallCards4} heading="Marriage bonus" />
        <SmallCard src={BenefitsSmallCards5} heading="Fun team events" />
        <SmallCard
          src={BenefitsSmallCards6}
          heading="Perfessional grow budget"
        />
        <SmallCard src={BenefitsSmallCards7} heading="30 days paid vacation" />
        <SmallCard src={BenefitsSmallCards8} heading="Competitive salary" />
        <SmallCard
          src={BenefitsSmallCards9}
          heading="Compensation for eyeglasses"
        />
        <SmallCard
          src={BenefitsSmallCards10}
          heading="Allowance for first-graders"
        />
        <SmallCard src={BenefitsSmallCards11} heading="Childbirth allowance" />
        <SmallCard
          src={BenefitsSmallCards12}
          heading="Employee referral bonus"
        />
        <SmallCard src={BenefitsSmallCards13} heading="Birthdays celebration" />
      </div>
      <div className=" bg-[#F4F7FA] py-[60px] px-5">
        <div className=" max-w-[1520px] mx-auto my-0 grid gap-[50px] grid-cols-352 lg:gap-9">
          <BigCard
            src={BenefitsBigCardsIcon1}
            heading="PAID TIME OFF & VACATION
"
            subHeading="Paid time off & vacation options that support a healthy work/life balance. That is why we offer a generous paid time off program that is made flexible based on your personal needs.
"
          />
          <BigCard
            src={BenefitsBigCardsIcon2}
            heading="COMPREHENSIVE TRAINING

"
            subHeading="We want to put our employees in the best position possible to succeed. That’s why as an employee at Airport Home Appliance, we will provide on-the-job training and mentoring programs to help keep your career on track.
"
          />
          <BigCard
            src={BenefitsBigCardsIcon3}
            heading="HEALTH / DENTAL / VISION INSURANCE

"
            subHeading="We're invested in our associates' futures and one way we demonstrate that is by providing all regular full- and part-time associates’ access to benefits to help them stay healthy - physically, mentally, and financially.
"
          />
          <BigCard
            src={BenefitsBigCardsIcon4}
            heading="EMPLOYEE DISCOUNTS
"
            subHeading="As an employee of Airport Home Appliance, you will be eligible to receive a very generous discount on all the products we carry.

"
          />
          <BigCard
            src={BenefitsBigCardsIcon5}
            heading="401K Plan
"
            subHeading="Airport Home Appliance provides a retirement savings plan that allows you to save for your future while taking advantage of tax savings.
"
          />
          <BigCard
            src={BenefitsBigCardsIcon3}
            heading="HEALTH / DENTAL / VISION INSURANCE

"
            subHeading="We're invested in our associates' futures and one way we demonstrate that is by providing all regular full- and part-time associates’ access to benefits to help them stay healthy - physically, mentally, and financially.
"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
