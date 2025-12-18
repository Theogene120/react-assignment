import { useState } from "react";

export default function OtherForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      <p className="my-5 text-xl font-bold underline">Question 13</p>
      <form
      onSubmit={handleSubmit}
      className="m-10 p-5 border border-gray-400 w-72 flex flex-col gap-3"
    >
      <h2 className="font-bold">Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-black p-2"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">{errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border border-black p-2"
      />
      {errors.password && (
        <p className="text-red-600 text-sm">{errors.password}</p>
      )}

      <button
        type="submit"
        className="border border-black p-2 bg-gray-200"
      >
        Login
      </button>
    </form>
    </div>
    
  );
}
