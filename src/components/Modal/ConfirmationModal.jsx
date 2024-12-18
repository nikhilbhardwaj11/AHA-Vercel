"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import DeleteIcon from "@/assets/images/delete-icon.svg";
import DynamicImage from "../DynamicImages/DynamicImage";

export function ConfirmationModal({ message, onConfirm, onCancel }) {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button onClick={handleOpen} className="p-0 bg-transparent border-0">
          <DynamicImage src={DeleteIcon} alt="delete-icon" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-6 pt-[15px] bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-[26px] font-semibold mb-4">
            Confirmation
          </DialogTitle>
        </DialogHeader>
        <div className="text-center mb-4 p-2">
          <p className="text-xl">{message}</p>
        </div>
        <DialogFooter className="flex-row justify-around gap-4 grid grid-cols-2">
          <Button
            className="bg-red3 text-white w-full rounded-[8px]"
            onClick={() => {
              onConfirm();
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button
            className="bg-[#B2B2B3] text-white w-full rounded-[8px]"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
