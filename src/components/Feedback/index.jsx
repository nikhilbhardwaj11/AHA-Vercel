import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeedbackIcon from "@/assets/images/feedback-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import Feedback from "@/assets/images/feedback.png";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feedbackOptions = ["Website Feedback", "Store Feedback", "Associate Feedback"];
const ratingOptions = ["Terrible", "Poor", "Average", "Good", "Excellent"];

const FeedbackStep0 = ({ onContinue }) => (
  <div>
    <h4 className="text-[14px] leading-[20px] mb-[22px]">
      We appreciate your feedback. Your opinions will help us provide you the best shopping experience - in store and online.
    </h4>
    <h4 className="text-[14px] leading-[20px] mb-[17px] font-semibold">
      What type of feedback would you like to provide?
    </h4>
    <div className="mb-[46px] flex gap-[4px] flex-wrap gap-y-2">
      {feedbackOptions.map(option => (
        <Button
          key={option}
          variant="outline"
          className="text-[#424242] text-[12px] leading-[18px] px-4 py-[9px] rounded-[4px] border border-[#DBDBDB]"
        >
          {option}
        </Button>
      ))}
    </div>
    <Button onClick={onContinue} className="w-[126px] rounded-[4px] h-[46px] bg-[#0B223C]">
      Continue
    </Button>
  </div>
);

const FeedbackStep1 = ({ onSendFeedback }) => (
  <div>
    <h4 className="text-[13px] leading-[19px] text-[#252525] mb-[22px]">
      We appreciate your feedback. Your opinions will help us provide you the best shopping experience - in store and online.
    </h4>
    <div className="mb-[26px]">
      <h4 className="text-[13px] leading-[19px] text-[#252525] mb-[12px] font-semibold">
        * Rate your overall experience with this page.
      </h4>
      <div className="flex gap-[12px] flex-wrap gap-y-2">
        {ratingOptions.map(rating => (
          <Button
            key={rating}
            variant="outline"
            className="text-[#424242] text-[12px] leading-[18px] px-4 py-[9px] rounded-[4px] border border-[#DBDBDB] h-[36px]"
          >
            {rating}
          </Button>
        ))}
      </div>
    </div>
    <FeedbackDropdown label="Please select your feedback topic" placeholder="Technical Issue" />
    <TextareaSection label="Please share your feedback." />
    <FeedbackDropdown label="What is your primary purpose for today's visit?" placeholder="Make a purchase" />
    <FeedbackDropdown label="Were you able to complete your primary purpose for today's visit?" placeholder="Yes" options={["Yes", "No"]} />
    <Button onClick={onSendFeedback} className="w-[126px] rounded-[4px] h-[46px] bg-[#0B223C]">
      Send Feedback
    </Button>
  </div>
);

const FeedbackStep2 = ({ onOk }) => (
  <div className="flex flex-col justify-start items-center gap-[22px]">
    <Image src={Feedback} alt="Feedback" width={80} height={80} />
    <div className="text-center">
      <h4 className="font-semibold text-[15px] leading-[22px] text-[#252525] mb-[10px]">Thank you for your feedback!</h4>
      <p className="max-w-[400px] text-[12px] leading-[17px] text-[#252525]">
        We appreciate your feedback. Your opinions will help us provide you the best shopping experience - in store and online.
      </p>
    </div>
    <Button onClick={onOk} className="w-[126px] rounded-[4px] h-[46px] bg-[#0B223C]">Ok</Button>
  </div>
);

const FeedbackDropdown = ({ label, placeholder, options = ["Technical Issue"] }) => (
  <div className="mb-[26px]">
    <h4 className="text-[13px] leading-[19px] text-[#252525] mb-[12px] font-semibold">{label}</h4>
    <Select>
      <SelectTrigger className="w-[180px] rounded-[10px] h-11 mb-[27px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {options.map(option => (
            <SelectItem key={option} value={option}>{option}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

const TextareaSection = ({ label }) => (
  <div className="mb-[26px]">
    <h4 className="text-[13px] leading-[19px] text-[#252525] mb-[12px] font-semibold">{label}</h4>
    <Textarea />
  </div>
);

const FeedBack = () => {
  const [isShowFeedback, setIsShowFeedback] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsShowFeedback(0)
  }, [setIsShowFeedback]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="smd:mt-3 py-[11px] px-[19px] border border-blue2 hover:bg-inherit text-blue2  bg-transparent h-[54px] text-[15px] inline-flex items-center gap-3 rounded-[6px]"
          onClick={() => {
            setIsShowFeedback(0)
            setIsDialogOpen(true)
          }}
        >
          <Image src={FeedbackIcon} alt="icon" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[518px] rounded-[16px] gap-0">
        <DialogHeader className="mb-[16px]">
          <Image src={Logo} alt="icon" className="max-w-[116px]" />
        </DialogHeader>
        {isShowFeedback === 0 && <FeedbackStep0 onContinue={() => setIsShowFeedback(1)} />}
        {isShowFeedback === 1 && <FeedbackStep1 onSendFeedback={() => setIsShowFeedback(2)} />}
        {isShowFeedback === 2 && <FeedbackStep2 onOk={() =>{
         setIsDialogOpen(false)
         setIsShowFeedback(0)
        }} />}
      </DialogContent>
    </Dialog>
  );
};

export default FeedBack;
