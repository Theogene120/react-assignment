import { useState } from "react";

function ModuleRegistration() {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    description: "",
    credits: "",
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
    if (!formData.moduleName) newErrors.moduleName = "Module name is required";
    if (!formData.moduleCode) newErrors.moduleCode = "Module code is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    // Credits validation (required + numeric only)
    if (!formData.credits) {
      newErrors.credits = "Credits are required";
    } else if (!/^\d+$/.test(formData.credits)) {
      newErrors.credits = "Credits must be a numeric value";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Module registered successfully!");
      setFormData({
        moduleName: "",
        moduleCode: "",
        description: "",
        credits: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <p className="my-10  text-xl font-bold underline">Question 30</p>
      <div className="max-w-md ml-10 my-20 p-6 border border-black rounded-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Module Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Module Name */}
        <div>
          <label className="block text-black font-medium">Module Name</label>
          <input
            type="text"
            name="moduleName"
            value={formData.moduleName}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.moduleName && (
            <p className="text-purple-400 text-sm">{errors.moduleName}</p>
          )}
        </div>

        {/* Module Code */}
        <div>
          <label className="block text-black font-medium">Module Code</label>
          <input
            type="text"
            name="moduleCode"
            value={formData.moduleCode}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.moduleCode && (
            <p className="text-purple-400 text-sm">{errors.moduleCode}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-black font-medium">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
            rows="3"
          />
          {errors.description && (
            <p className="text-purple-400 text-sm">{errors.description}</p>
          )}
        </div>

        {/* Credits */}
        <div>
          <label className="block text-black font-medium">Credits</label>
          <input
            type="text"
            name="credits"
            value={formData.credits}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.credits && (
            <p className="text-purple-400 text-sm">{errors.credits}</p>
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

export default ModuleRegistration;
