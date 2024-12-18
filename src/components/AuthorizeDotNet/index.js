import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAcceptJs } from 'react-acceptjs';
import { setStoreAuthorizeDotNet } from "@/redux/slices/storeAuthorizeDotNetSlice"; // Adjust path if necessary

const authData = {
  apiLoginID: process.env.NEXT_PUBLIC_API_LOGIN_ID, // Replace with your API Login ID
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY, // Replace with your Public Client Key
};

const AuthorizeDotNet = () => {
  const dispatch = useDispatch();
  const { dispatchData, loading, error } = useAcceptJs({ authData });

  const [cardData, setCardData] = useState({
    cardNumber: '',
    month: '',
    year: '',
    cardCode: '',
  });

  const [validationError, setValidationError] = useState('');
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let sanitizedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (name === 'month') {
      // Ensure the value stays within the range 01–12
      if (sanitizedValue.length > 2) {
        sanitizedValue = sanitizedValue.slice(0, 2); // Limit to 2 digits
      }
      if (parseInt(sanitizedValue, 10) > 12) {
        sanitizedValue = '12'; // Cap the value at 12
      }
    }

    // Update local state
    const updatedCardData = { ...cardData, [name]: sanitizedValue };
    setCardData(updatedCardData);
  
    // Dispatch updated state to Redux
    dispatch(setStoreAuthorizeDotNet(updatedCardData )); // Dispatch only the updated field
    setValidationError(''); // Clear validation errors
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Dispatch tokenization request or other actions
      const response = await dispatchData({ cardData });

      if (response?.messages?.resultCode === 'Ok') {
        const token = response?.opaqueData?.dataValue;
      } else {
       // console.log('Error:', response?.messages?.message);
      } 
  };

  const validateCardNumber = () => {
    const { cardNumber } = cardData;
  
    // Simple Luhn algorithm check or length validation
    const isValid = cardNumber.length === 16 && luhnCheck(cardNumber);
  
    if (!isValid) {
      if(cardNumber.length === 0){
        setValidationError('Enter card number')
      } else{
        setValidationError('Invalid card number')
      }      
    }
  };

  const validateMonth = () => {
    const { month } = cardData;
  
    // Validate month length: must be exactly 2 characters
    if (month.length !== 2) {
      setValidationError('Invalid month. Please enter a two-digit value (e.g., 01 for January).');
      return false;
    }
  
    // Validate month range: must be between 01 and 12
    const monthInt = parseInt(month, 10);
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
      setValidationError('Invalid month. Please enter a value between 01 and 12.');
      return false;
    }
  
    // If validation passes
    setValidationError(''); // Clear any existing error
    validateCardNumber()
    return true;
  };
  

  const validateCardCode = () => {
    const { cardCode } = cardData;
  
    // Check if the card code is numeric and within the valid length (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cardCode)) {
      setValidationError('Invalid card code. Please enter a 3 or 4 digit number.');
      return false;
    }
  
    // Clear error if validation passes
    setValidationError('');
    validateCardNumber()
    return true;
  };

  const validateYear = () => {
    const { year } = cardData;

    // Validate year: must be between the current year and 2050
    const currentYear = new Date().getFullYear();
    const yearInt = parseInt(year, 10);
    if (isNaN(yearInt) || yearInt < currentYear || yearInt > 2050) {
      setValidationError(`Invalid year. Please enter a value between ${currentYear} and 2050.`);
      return false;
    }
  
    // If both validations pass
    setValidationError(''); // Clear any existing error
    validateCardNumber()
    return true;
  };
  
  const luhnCheck = (num) => {
    let sum = 0;
    let shouldDouble = false;
  
    // Loop through the card number digits backwards
    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num[i]);
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="cardNumber">Credit Card Number<span className="text-red-500">*</span></label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="flex h-10 w-full rounded-[5px] border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          value={cardData.cardNumber}
          onChange={handleInputChange}
          onBlur={validateCardNumber} // Validate on losing focus
          required
          maxLength={16}
        />
      </div>

      <div className="flex gap-4 items-end space-y-2">
        <div className="flex-1">
          <label htmlFor="month">Month (MM)<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="month"
            name="month"
            className="flex h-10 w-full rounded-[5px] border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            value={cardData.month}
            onChange={handleInputChange}
            onBlur={validateMonth} // Validate on losing focus
            required
            maxLength={2}
            placeholder="MM"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="year">Year (YYYY)<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="year"
            name="year"
            className="flex h-10 w-full rounded-[5px] border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            value={cardData.year}
            onChange={handleInputChange}
            onBlur={validateYear} // Validate on losing focus
            required
            maxLength={4}
            placeholder="YYYY"
          />
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="cardCode">Card Verification Number (CVV)<span className="text-red-500">*</span></label>
        <input
          type="text"
          id="cardCode"
          name="cardCode"
          className="flex h-10 w-full rounded-[5px] border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          value={cardData.cardCode}
          onChange={handleInputChange}
          onBlur={validateCardCode} // Validate on losing focus
          required
          maxLength={4}
        />
      </div>
      {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
      
      {/* <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        Submit
      </button> */}
    </form>
  );
};

export default AuthorizeDotNet;