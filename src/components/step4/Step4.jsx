import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./step4.css";
import data from "../../data/data.json";

export default function Step4({
  onNext,
  onPrev,
  selectedPlan,
  billing,
  selectedAddons,
  setCurrentStep
}) {
  const headerH1 = "Finishing up";
  const headerSpan = "Double-check everything looks OK before confirming.";

  const planData = data[selectedPlan];
  const planPrice =
    billing === "monthly" ? planData.price.monthly : planData.price.yearly;

  const addonPrices = {
    onlineService: billing === "monthly" ? 1 : 10,
    largerStorage: billing === "monthly" ? 2 : 20,
    customizableProfile: billing === "monthly" ? 2 : 20,
  };

  const calculateTotal = () => {
    let total = planPrice;
    Object.entries(selectedAddons).forEach(([addon, isSelected]) => {
      if (isSelected) {
        total += addonPrices[addon];
      }
    });
    return total;
  };

  const handleChange = () => {
    setCurrentStep(3);
  };

  return (
    <div className="step4">
      <div className="menu-container">
        <Sidebar activeStep={4} />
      </div>
      <div className="step4-container">
        <Header h1={headerH1} span={headerSpan} />

        <div className="summary">
          <div className="plan-summary">
            <div className="plan-details">
              <h3>
                {planData.title} ({billing === "monthly" ? "Monthly" : "Yearly"}
                )
              </h3>
              <button className="change-btn" onClick={handleChange}>
                Change
              </button>
            </div>
            <span className="plan-price">
              ${planPrice}/{billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>

          {Object.entries(selectedAddons).map(
            ([addon, isSelected]) =>
              isSelected && (
                <div key={addon} className="addon-item">
                  <span className="addon-name">
                    {addon === "onlineService"
                      ? "Online Service"
                      : addon === "largerStorage"
                      ? "Larger Storage"
                      : "Customizable Profile"}
                  </span>
                  <span className="addon-price">
                    +${addonPrices[addon]}/{billing === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              )
          )}

          <div className="total">
            <span className="total-label">
              Total (per {billing === "monthly" ? "month" : "year"})
            </span>
            <span className="total-price">
              ${calculateTotal()}/{billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        </div>

        <div className="step4-buttons">
          <button className="go-back" onClick={onPrev}>
            Go Back
          </button>
          <button className="confirm" onClick={onNext}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
