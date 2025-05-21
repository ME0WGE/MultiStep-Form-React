import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./step1.css";

export default function Step1({ onNext }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      onNext();
    }
  };

  return (
    <>
      <div className="step1">
        <div className="menu-container">
          <Sidebar activeStep={1} />
        </div>
        <div className="step1-container">
          <Header
            h1="Personal Info"
            span="Please provide your name, email address, and phone number."
          />

          <form className="step1-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name is: {formData.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Vingt-Six"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email is: {formData.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. vingt_six@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Your phone number is: {formData.phone}
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="step1-buttons">
              <button type="submit" className="next-step">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
