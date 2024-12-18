export const validationRules = {
  required: (fieldName) => ({
    required: `${fieldName} is required`,
  }),

  alphabetOnlyIfExists: {
    validate: (value) =>
      value === "" ||
      /^[A-Za-z]+$/.test(value) ||
      "This field must contain only alphabets",
  },

  requiredAlphabetOnly: (fieldName) => ({
    required: `${fieldName} is required`,
    pattern: {
      value: /^[A-Za-z]+$/, // Regex for alphabets only
      message: `${fieldName} should contain only alphabets`, // Custom error message
    },
  }),

  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },

  phoneNumber: {
    required: "Please enter phone number",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Phone number must contain exactly 10 digits",
    },
  },

  address: {
    required: "Please enter street address",
    pattern: {
      value: /^[A-Za-z0-9\s]+$/,
      message: "Street address must be alphanumeric",
    },
  },

  zipCode: {
    required: "Please enter zip code",
    pattern: {
      value: /^[0-9]{5}(?:-[0-9]{4})?$/, // Matches both 5-digit and 9-digit zip codes
      message: "Please enter a valid zip code", // Error message for invalid zip code
    },
  },
};
