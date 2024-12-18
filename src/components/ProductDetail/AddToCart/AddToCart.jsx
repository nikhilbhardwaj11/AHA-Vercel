import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import ReviewCoverageOptions from "../ReviewCoverageOptions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CallToOrder } from "@/components/Modal/CallToOrder";
import useCartDetails from "@/hooks/useCartDetails";
import { useToast } from "@/components/ui/use-toast";
import useAddToCart from "@/hooks/useAddToCart";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

const AddToCart = ({
  productId,
  productData,
  btnClassName,
  btnVariant,
  deliveryPayload = {},
  addOnsPayload = {},
  isInstallationService,
  isWarranty,
}) => {
  const { toast } = useToast();
  const { webPriceInactive, status } = productData;
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { getCountByProductId } = useCartDetails();
  const currentQuantityOfProduct = getCountByProductId({ productId });
  const { addToCart, isAddToCartLoading, isAddToCartSuccess } = useAddToCart();

  const handleSheetOpenChange = async (value) => {
    if (
      value &&
      (status === "A" || status === "B" || status === "S") &&
      currentQuantityOfProduct >= 3
    ) {
      toast({
        variant: "destructive",
        title: "Max quantity reached for this product",
      });
    } else if (!isInstallationService && !isWarranty) {
      const addToCartPayload = {
        products: [
          {
            productId: Number(productId),
            quantity: currentQuantityOfProduct + 1,
            ...deliveryPayload,
          },
        ],
      };
      await addToCart(addToCartPayload);
      toast({
        title: "Product added to cart successfully",
      });
    } else {
      setIsSheetOpen(value);
    }
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
      {!webPriceInactive ? (
        <SheetTrigger asChild>
          <Button
            variant={btnVariant}
            className={cn(
              btnClassName ||
                "bg-red3 w-full h-[50px] rounded-10 text-white text-sm lg:h-[46px] lg:rounded-[9px]"
            )}
          >
            {isAddToCartLoading ? "ADDING TO CART... " : "ADD TO CART"}
          </Button>
        </SheetTrigger>
      ) : (
        <CallToOrder />
      )}
      {isAddToCartLoading && <Loader />}
      <SheetContent className="w-[500px] p-0 rounded-20">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <ReviewCoverageOptions
          productData={productData}
          productId={productId}
          sheetClose={() => setIsSheetOpen(false)}
          deliveryPayload={deliveryPayload}
          addOnsPayload={addOnsPayload}
          isInstallationService={isInstallationService}
          isWarranty={isWarranty}
        />
      </SheetContent>
    </Sheet>
  );
};

export default AddToCart;
