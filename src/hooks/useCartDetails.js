import { useSelector } from "react-redux";

const useCartDetails = () => {
  const cartItems = useSelector((state) => state.userCart?.cartItems);
  const cartTotal = useSelector((state) => state.userCart?.total);

  // GET TOTAL UNIQUE ITEMS COUNT
  const getTotalUniqueItemsCount = () => cartItems?.length || 0;

  // GET TOTAL ITEMS COUNT
  const getTotalItemsCount = () =>
    cartItems &&
    cartItems.length > 0 &&
    cartItems?.reduce((acc, item) => acc + item.quantity, 0);

  // GET UPDATED CART DETAILS
  const getCartDetails = () => cartItems || [];

  // GET COUNT OF PRODUCT ADDED IN CART BY PRODUCT ID
  const getCountByProductId = ({ productId }) => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    const quantity =
      cartItems.find((item) => item.productId === Number(productId))
        ?.quantity || 0;

    return quantity;
  };

  // GET CART TOTAL SUMMARY, TAX AND DELIVERY
  const getCartTotal = () => cartTotal || {};

  //GET USER CURRENT ADDRESS ID
  const getAddressId =
    useSelector((state) => state?.userCart?.addressId) || null;

  return {
    getTotalUniqueItemsCount,
    getCartDetails,
    getCountByProductId,
    getCartTotal,
    getTotalItemsCount,
    getAddressId,
  };
};

export default useCartDetails;
