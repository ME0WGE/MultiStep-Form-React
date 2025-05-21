import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./step3.css";

export default function Step3({ onNext, onPrev }) {
  const headerH1 = "Pick add-ons";
  const headerSpan = "Add-ons help enhance your gaming experience.";

  const [selectedAddons, setSelectedAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  });

  const handleAddonChange = (addon) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addon]: !prev[addon]
    }));
  };

  return (
    <div className="step3">
      <div className="menu-container">
        <Sidebar activeStep={3} />
      </div>

      <div className="step3-container">
        <Header h1={headerH1} span={headerSpan} />

        <div className="addon-options">
          <div 
            className={`addon-option ${selectedAddons.onlineService ? 'selected' : ''}`}
            onClick={() => handleAddonChange('onlineService')}
          >
            <input 
              type="checkbox" 
              checked={selectedAddons.onlineService} 
              onChange={() => handleAddonChange('onlineService')}
            />
            <div className="addon-content">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <span className="addon-price">+$10/yr</span>
          </div>

          <div 
            className={`addon-option ${selectedAddons.largerStorage ? 'selected' : ''}`}
            onClick={() => handleAddonChange('largerStorage')}
          >
            <input 
              type="checkbox" 
              checked={selectedAddons.largerStorage} 
              onChange={() => handleAddonChange('largerStorage')}
            />
            <div className="addon-content">
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span className="addon-price">+$20/yr</span>
          </div>

          <div 
            className={`addon-option ${selectedAddons.customizableProfile ? 'selected' : ''}`}
            onClick={() => handleAddonChange('customizableProfile')}
          >
            <input 
              type="checkbox" 
              checked={selectedAddons.customizableProfile} 
              onChange={() => handleAddonChange('customizableProfile')}
            />
            <div className="addon-content">
              <h3>Customizable Profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <span className="addon-price">+$20/yr</span>
          </div>
        </div>

        <div className="step3-buttons">
          <button className="go-back" onClick={onPrev}>Go Back</button>
          <button className="next-step" onClick={onNext}>Next Step</button>
        </div>
      </div>
    </div>
  );
}
