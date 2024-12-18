// components/BasicModal.js

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ReserveNowModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="  px-[18px] h-[44px] rounded-10 bg-blue1 border-blue1 text-white border">
          Reserve Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[610px] rounded-[20px] py-[46px] px-[66px]">
        <DialogHeader>
          <DialogTitle className=" text-[30px] font-medium text-blue1 leading-[44px] text-start pb-[10px]">
            Reserve Now
          </DialogTitle>
          <DialogDescription className="m-0">
            <p className=" font-medium text-[14px] leading-[21px] text-blue1 text-left pb-6">
              By reserving this product, this item will be placed on hold for
              48-hours at its respective store location. Failure to pickup
              within 48-hours will result in loss of reservation. Payment will
              be made upon pickup*
            </p>
            <div className="space-y-4">
              <div className="flex space-x-[10px]">
                <Input
                  placeholder="First Name*"
                  className="h-11 rounded-[10px] border-gray15"
                />
                <Input
                  placeholder="Last Name*"
                  className="h-11 rounded-[10px] border-gray15"
                />
              </div>
              <Input
                placeholder="Email*"
                className="h-11 rounded-[10px] border-gray15"
              />
              <Input
                placeholder="Street Line Address*"
                className="h-11 rounded-[10px] border-gray15"
              />
              <div className="flex space-x-[10px]">
                <Input
                  placeholder="State/Province*"
                  className="h-11 rounded-[10px] border-gray15"
                />
                <Input
                  placeholder="City*"
                  className="h-11 rounded-[10px] border-gray15"
                />
              </div>
              <div className="flex space-x-[10px]">
                <Input
                  placeholder="Zip/Postal Code*"
                  className="h-11 rounded-[10px] border-gray15"
                />
                <Input
                  placeholder="Phone Number*"
                  className="h-11 rounded-[10px] border-gray15"
                />
              </div>
              <div className="flex space-x-4 justify-end">
                <Button className=" w-full max-w-[172px] px-[18px] h-[44px] hover:bg-inherit rounded-10 text-blue1 border-blue1 bg-white border ">
                  Reserve Now
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
