import Card from "../card/Card";
import Header from "../header/Header";
import "./step2.css";
import data from "../../data/data.json";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

export default function Step2() {
  const headerH1 = "Select Your Plan";
  const headerSpan = "You have the option of monthly or yearly billing";

  const [billing, setBilling] = useState("monthly");
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="step2">
      <div className="menu-container">
        <Sidebar activeStep={2} />
      </div>
      <div className="step2-container">
        <Header h1={headerH1} span={headerSpan} />

        <div className="plan-cards">
          {data.map((plan, index) => (
            <Card
              key={index}
              planTitle={plan.title}
              planPrice={
                billing === "monthly" ? plan.price.monthly : plan.price.yearly
              }
              paymentFrequency={billing === "monthly" ? "mo" : "yr"}
              imgSrc={plan.image}
              altText={`image of the ${plan.title} plan`}
              isSelected={selectedIndex === index}
              onSelect={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            />
          ))}
        </div>

        <div className="billing-switch">
          <span className={billing === "monthly" ? "active" : ""}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={billing === "yearly"}
              onChange={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
            />
            <span className="slider"></span>
          </label>
          <span className={billing === "yearly" ? "active" : ""}>Yearly</span>
        </div>

        <div className="step2-buttons">
          <button className="go-back">Go Back</button>
          <button className="next-step">Next Step</button>
        </div>
      </div>
    </div>
  );
}
