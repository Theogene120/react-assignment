import { useState } from "react";

function LecturerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
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

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone number validation (numeric only)
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    }

    // Required fields
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.subject) newErrors.subject = "Subject is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Lecturer registered successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="border-t border-black mt-10">
        <p>Registration Forms</p>
        <p className="my-10  text-xl font-bold underline">Question 26</p>
        <div className="max-w-md ml-10 mt-10 p-6 border border-black rounded-lg">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            Lecturer Registration
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

            {/* Email */}
            <div>
            <label className="block text-black font-medium">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-black p-2 rounded"
            />
            {errors.email && (
                <p className="text-purple-400 text-sm">{errors.email}</p>
            )}
            </div>

            {/* Subject */}
            <div>
            <label className="block text-black font-medium">Subject</label>
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-black p-2 rounded"
            />
            {errors.subject && (
                <p className="text-purple-400 text-sm">{errors.subject}</p>
            )}
            </div>

            {/* Phone Number */}
            <div>
            <label className="block text-black font-medium">Phone Number</label>
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

export default LecturerRegistration;
