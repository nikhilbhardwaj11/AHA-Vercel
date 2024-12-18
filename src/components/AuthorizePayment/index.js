import { useEffect } from "react";
import { AcceptHosted } from "react-acceptjs";

const AuthorizePayment = ({ formToken }) => {

  useEffect(() => {
    // Automatically submit the form when formToken is available
    if (formToken) {
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.click(); // Programmatically trigger button click
      }
    }
  }, [formToken]);

  return (
    <div>
      {/* Automatically trigger the redirect when the formToken is available */}
      {formToken && <form>
        <AcceptHosted formToken={formToken} integration="redirect">
         {/* The hidden submit button to trigger form submission */}
         <button type="submit" style={{ display: "none" }}></button>
        </AcceptHosted>
      </form>}
    </div>
  );
};

export default AuthorizePayment;
