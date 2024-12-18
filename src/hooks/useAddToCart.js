import { useToast } from "@/components/ui/use-toast";
import { useAddToCartMutation } from "@/redux/apiSlices/userCartApi";

const useAddToCart = () => {
  const { toast } = useToast();

  const [
    addToCartApi,
    { isLoading: isAddToCartLoading, isSuccess: isAddToCartSuccess },
  ] = useAddToCartMutation();

  const addToCart = async (payload) => {
    try {
      const response = await addToCartApi(payload).unwrap();
      if (response.success) {
        // toast({
        //   title: response?.message,
        // });
      }
    } 
    catch (error) {
      // toast({
      //   variant: "destructive",
      //   title: "Failed to add item to cart",
      // });
      // console.error("Failed to add item to cart:", error);
    }
  };

  return {
    addToCart,
    isAddToCartLoading,
    isAddToCartSuccess,
  };
};

export default useAddToCart;
