import { useToast } from "@/components/ui/use-toast";
import { useRemoveFromCartMutation } from "@/redux/apiSlices/userCartApi";

const useRemoveFromCart = () => {
  const { toast } = useToast();

  const [
    removeFromCartApi,
    { isLoading: isRemoveFromCartLoading, isSuccess: isRemoveFromCartSuccess },
  ] = useRemoveFromCartMutation();

  const removeFromCart = async (payload) => {
    try {
      const response = await removeFromCartApi(payload).unwrap();
      if (response.success) {
        toast({
          title: response?.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to remove item from cart",
      });
      console.error("Failed to remove item from cart:", error);
    }
  };

  return {
    removeFromCart,
    isRemoveFromCartLoading,
    isRemoveFromCartSuccess,
  };
};

export default useRemoveFromCart;
