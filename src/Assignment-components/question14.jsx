import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div>
      <p className="my-5 text-xl font-bold underline">Question 14</p>
      <div className="m-10 p-5 border border-gray-400 w-80">
      <h2 className="font-bold mb-4">Step {step}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {step === 1 && (
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-black p-2"
          />
        )}

        {step === 2 && (
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border border-black p-2"
          />
        )}

        {step === 3 && (
          <input
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border border-black p-2"
          />
        )}

        <div className="flex gap-2 mt-3">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="border border-black p-2"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="border border-black p-2"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="border border-black p-2 bg-gray-200"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </div>
    
  );
}
