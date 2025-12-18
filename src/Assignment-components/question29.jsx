import { useState } from "react";

function BookRegistration() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    year: "",
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
    if (!formData.title) newErrors.title = "Book title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.isbn) newErrors.isbn = "ISBN is required";

    // Published year validation (four-digit number)
    if (!/^\d{4}$/.test(formData.year)) {
      newErrors.year = "Published year must be a 4-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Book registered successfully!");
      setFormData({
        title: "",
        author: "",
        isbn: "",
        year: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <p className="my-10  text-xl font-bold underline">Question 29</p>
      <div className="max-w-md ml-10 my-20 p-6 border border-black rounded-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Book Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Book Title */}
        <div>
          <label className="block text-black font-medium">Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.title && (
            <p className="text-purple-400 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block text-black font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.author && (
            <p className="text-purple-400 text-sm">{errors.author}</p>
          )}
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-black font-medium">ISBN</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            className="w-full border border-black p-2 rounded"
          />
          {errors.isbn && (
            <p className="text-purple-400 text-sm">{errors.isbn}</p>
          )}
        </div>

        {/* Published Year */}
        <div>
          <label className="block text-black font-medium">
            Published Year
          </label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g. 2024"
            className="w-full border border-black p-2 rounded"
          />
          {errors.year && (
            <p className="text-purple-400 text-sm">{errors.year}</p>
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

export default BookRegistration;
