// components/PayPalButton.js
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AT_uS1S5rjJv3OwKK3m-4TKw_Nnp9ROxkQsCMyNEEe0E1ZrXrHUcjYn9FXE5noBVoWIENZ5mdmf14WjE",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.00", // Replace with the actual amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            // Handle successful transaction here
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
