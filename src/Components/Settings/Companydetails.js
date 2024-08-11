import React, { useState, useEffect } from "react";

const Companydetails = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Load stored data from localStorage when component mounts
  useEffect(() => {
    const storedFormData = localStorage.getItem("companyDetails");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Company name is required";
    if (!formData.email) {
      formErrors.email = "Company email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.address) formErrors.address = "Company address is required";
    return formErrors;
  };

  const handleContinue = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Save data to local storage only if there are no validation errors
      localStorage.setItem("companyDetails", JSON.stringify(formData));
      onContinue(); // Notify parent to move to the next step
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="company-details-section">
      <h3>Company Details</h3>

      <div className="input-field">
        <label htmlFor="name">Company Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter company name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="input-field">
        <label htmlFor="email">Company Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter company email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="input-field">
        <label htmlFor="address">Company Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter company address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="error-message">{errors.address}</span>}
      </div>

      <div className="settingbtns">
        <a href="#" className="back-btn" onClick={onBack}>
          Back
        </a>
        <button type="button" className="submit-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Companydetails;
