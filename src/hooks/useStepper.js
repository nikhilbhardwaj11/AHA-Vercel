import { useState } from "react";

const useStepper = (steps, initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps - 1));

  const prevStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  const goToStep = (step) => setCurrentStep(step);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (submitCallback) => (e) => {
    e.preventDefault();
    submitCallback(formValues);
  };

  const isLastStep = currentStep === steps - 1;

  return {
    formValues,
    currentStep,
    steps,
    nextStep,
    prevStep,
    goToStep,
    handleInputChange,
    handleSubmit,
    isLastStep,
  };
};

export default useStepper;
