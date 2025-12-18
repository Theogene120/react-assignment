import { useState } from "react";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dob: "",
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
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Student ID validation (alphanumeric only)
    if (!/^[a-zA-Z0-9]+$/.test(formData.studentId)) {
      newErrors.studentId =
        "Student ID must contain only letters and numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Student registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        studentId: "",
        dob: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md ml-10 my-20 p-6 border border-black rounded-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Student Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-black font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.firstName && (
            <p className="text-purple-400 text-sm">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-black font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.lastName && (
            <p className="text-purple-400 text-sm">{errors.lastName}</p>
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

        {/* Student ID */}
        <div>
          <label className="block text-black font-medium">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.studentId && (
            <p className="text-purple-400 text-sm">{errors.studentId}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-black font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.dob && (
            <p className="text-purple-400 text-sm">{errors.dob}</p>
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
  );
}

export default StudentRegistration;
