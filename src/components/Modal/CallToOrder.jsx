import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import CallIcon from "@/icons/CallIcon";

export function CallToOrder() {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => console.log("open modal")}
          className={
            "bg-red3 w-full h-[50px] rounded-10 text-white border-none text-sm hover:bg-primary/90 hover:text-white"
          }
        >
          CALL TO ORDER
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-[729px] rounded-[20px] p-0 "
        classNameBtn="top-[42px] right-[57px]"
      >
        <DialogHeader>
          <DialogTitle className=" border-b border-b-gray21 text-[25px] py-[30px] px-4 leading-[37px] font-semibold text-blue2">
            Hey there!{" "}
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-10 flex-row">
              <div className=" text-xl px-9">
                Call us to get the order details
              </div>
              <div className="flex text-6xl justify-center">
                <CallIcon width={52} height={52} fill="#787878" />
                &nbsp;<a href="tel:+18663044449" className="">(866) 304-4449</a>
              </div>
              <div className="flex-row text-xl space-y-3 pb-4">
                <div>Hours</div>
                <div>MON - FRI 10 AM - 7 PM PT</div>
                <div> SAT - SUN 10 AM - 6 PM PT</div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
