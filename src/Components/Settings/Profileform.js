import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/Images/Icons/user.svg";
import tick from '../../assets/Images/Setting-icons/setting-nav/1.svg';
import cross from '../../assets/Images/Icons/Crossvector.svg';

const Profileform = ({ onBack, onContinue }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedProfilePhoto = localStorage.getItem("profilePhoto");
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    if (storedProfilePhoto) {
      setProfilePhoto(storedProfilePhoto);
    }

    if (storedFormData) {
      setFormData(storedFormData);
    }

    return () => {
      // No need for banner timeout cleanup now
    };
  }, []);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB");
        return;
      }
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width < 400 || img.height < 400) {
          alert("Image dimensions should be at least 400x400px");
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setProfilePhoto(base64String);
          fileInputRef.current.value = "";
          setErrors({ ...errors, profilePhoto: "" });
        };
        reader.readAsDataURL(file);
      };
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    fileInputRef.current.value = "";
    localStorage.removeItem("profilePhoto"); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[@$!%*?&]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const validateForm = () => {
    let formErrors = {};
    if (!profilePhoto) formErrors.profilePhoto = "Profile photo is required";
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    const passwordError = validatePassword(formData.password);
    if (passwordError) formErrors.password = passwordError;
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("profilePhoto", profilePhoto); 
      localStorage.setItem("formData", JSON.stringify(formData));
      setErrors({});
      // Just continue without showing the banner
      onContinue(); // Notify parent to move to the next step
    } else {
      setErrors(formErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="setting-form">
      <form onSubmit={handleSubmit}>
        <h1>Profile Photo</h1>
        <div className="profile-photo-section">
          <div className="profile-photo">
            <div className="img">
              <img src={profilePhoto || user} alt="Profile" />
            </div>
            <div className="imgbtns">
              <label className="upload-btn">
                Upload Photo
                <input
                  type="file"
                  onChange={handlePhotoUpload}
                  ref={fileInputRef}
                  accept="image/*"
                />
              </label>
              <button
                type="button"
                className="remove-link"
                onClick={handleRemovePhoto}
              >
                Remove
              </button>
              {errors.profilePhoto && (
                <span className="error">{errors.profilePhoto}</span>
              )}
            </div>
          </div>
          <div className="image-requirements">
            <h4>Image requirements:</h4>
            <ul>
              <li>1. Min. 400 x 400px</li>
              <li>2. Max. 2MB</li>
              <li>3. Your face or company logo</li>
            </ul>
          </div>
        </div>

        <div className="user-details-section">
          <h3>User Details</h3>
          <div className="input-group first">
            <div className="input-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label>Enter Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="input-field">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="settingbtns">
            <a href="#" className="back-btn" onClick={onBack}>Back</a>
            <button type="submit" className="submit-btn">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profileform;
