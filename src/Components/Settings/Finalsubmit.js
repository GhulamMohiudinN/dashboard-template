import React, { useEffect, useState } from "react";
import Banner from "./Datasaved"; 

const Finalsubmit = ({ onBack }) => {
  const [data, setData] = useState({
    selectedTeam: "",
    companyDetails: {},
    profileData: {},
    profilePhoto: "", 
    password: "", 
  });
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const selectedTeam = localStorage.getItem("selectedTeam");
    const companyDetails = JSON.parse(localStorage.getItem("companyDetails")) || {};
    const profileData = JSON.parse(localStorage.getItem("formData")) || {};
    const profilePhoto = localStorage.getItem("profilePhoto") || "";
    const password = localStorage.getItem("password") || "";

    setData({
      selectedTeam: selectedTeam || "",
      companyDetails,
      profileData,
      profilePhoto,
      password,
    });
  }, []);

  const handleSubmit = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      selectedTeam: data.selectedTeam,
      companyDetails: data.companyDetails,
      profileData: data.profileData,
      profilePhoto: data.profilePhoto,
      password: data.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.removeItem("selectedTeam");
    localStorage.removeItem("companyDetails");
    localStorage.removeItem("formData");
    localStorage.removeItem("profilePhoto");
    localStorage.removeItem("password");

    setData({
      selectedTeam: "",
      companyDetails: {},
      profileData: {},
      profilePhoto: "",
      password: "",
    });

    setBannerVisible(true);
  };

  const handleCloseBanner = () => {
    setBannerVisible(false);
    // Optionally, redirect to another page or perform other actions
    // For example, redirect to a different page:
    window.location.href = '/settings';
  };

  return (
    <>
      {!bannerVisible && (
        <div className="final-submit">
          <h1>Review Your Information</h1>

          <div className="review-section">
            <h2>Selected Team</h2>
            <p>{data.selectedTeam || "Not selected"}</p>
          </div>

          <div className="review-section">
            <h2>Company Details</h2>
            <p>
              <strong>Name:</strong> {data.companyDetails.name || "Not provided"}
            </p>
            <p>
              <strong>Email:</strong> {data.companyDetails.email || "Not provided"}
            </p>
            <p>
              <strong>Address:</strong> {data.companyDetails.address || "Not provided"}
            </p>
          </div>

          <div className="review-section">
            <h2>Profile Details</h2>
            <p>
              <strong>First Name:</strong> {data.profileData.firstName || "Not provided"}
            </p>
            <p>
              <strong>Last Name:</strong> {data.profileData.lastName || "Not provided"}
            </p>
            <p>
              <strong>Email:</strong> {data.profileData.email || "Not provided"}
            </p>
          </div>

          <div className="settingbtns">
            <a href="#" className="back-btn" onClick={onBack}>
              Back
            </a>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {bannerVisible && <Banner onClose={handleCloseBanner} />}
    </>
  );
};

export default Finalsubmit;
