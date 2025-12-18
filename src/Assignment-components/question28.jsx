import { useState } from "react";

function DriverRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    phone: "",
    vehicle: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.license) newErrors.license = "License number is required";
    if (!formData.vehicle) newErrors.vehicle = "Please select a vehicle type";

    // Phone number validation (numeric only)
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Driver registered successfully!");
      setFormData({
        name: "",
        license: "",
        phone: "",
        vehicle: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <p className="my-10  text-xl font-bold underline">Question 28</p>
      <div className="max-w-md ml-10 my-10 p-6 border border-black rounded-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Driver Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-black font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.name && (
            <p className="text-purple-400 text-sm">{errors.name}</p>
          )}
        </div>

        {/* License Number */}
        <div>
          <label className="block text-black font-medium">
            License Number
          </label>
          <input
            type="text"
            name="license"
            value={formData.license}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.license && (
            <p className="text-purple-400 text-sm">{errors.license}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-black font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.phone && (
            <p className="text-purple-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Vehicle Type Dropdown */}
        <div>
          <label className="block text-black font-medium">
            Vehicle Type
          </label>
          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          >
            <option value="">Select vehicle</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
          {errors.vehicle && (
            <p className="text-purple-400 text-sm">{errors.vehicle}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-400 text-black font-semibold py-2 rounded hover:opacity-90"
        >
          Register
        </button>
      </form>
    </div>
    </div>
    
  );
}

export default DriverRegistration;
