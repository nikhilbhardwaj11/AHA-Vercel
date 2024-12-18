"use client";
import Cart from "@/components/Checkout/Cart";
import useCartDetails from "@/hooks/useCartDetails";

const CartPage = () => {
  const { getCartDetails, getTotalItemsCount } = useCartDetails();

  return (
    <Cart
      totalItems={getTotalItemsCount() || {}}
      cartItems={getCartDetails() || 0}
    />
  );
};

export default CartPage;
