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
import { Textarea } from "../ui/textarea";

export function EmailStoreModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" px-[18px] h-[44px] hover:bg-inherit rounded-10 text-blue1 border-blue1 bg-white border">
          Email Store
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[610px] rounded-[20px] py-[46px] px-[66px]">
        <DialogHeader>
          <DialogTitle className=" text-[30px] font-medium text-blue1 leading-[44px] text-start pb-[10px]">
            Contact Store
          </DialogTitle>
          <DialogDescription className="m-0">
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
              <div className="flex space-x-[10px]">
                <Input
                  placeholder="Phone Number*"
                  className="h-11 rounded-[10px] border-gray15"
                />
              </div>
              <div className="flex space-x-[10px]">
                <Textarea
                  placeholder="Message Here"
                  className="rounded-[10px] border-gray15"
                />
              </div>
              <div className="flex space-x-4 justify-end">
                <Button className=" w-full max-w-[142px] px-[18px] h-[44px] hover:bg-inherit rounded-10 text-blue1 border-blue1 hover:bg-blue1 hover:text-white bg-white border ">
                  Send
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
