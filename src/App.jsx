import { useState } from "react";
import "./App.css";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import Step4 from "./components/step4/Step4";
import Step5 from "./components/step5/Step5";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billing, setBilling] = useState("monthly");
  const [selectedAddons, setSelectedAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={nextStep} />;
      case 2:
        return (
          <Step2
            onNext={nextStep}
            onPrev={prevStep}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            billing={billing}
            setBilling={setBilling}
          />
        );
      case 3:
        return (
          <Step3
            onNext={nextStep}
            onPrev={prevStep}
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
            billing={billing}
          />
        );
      case 4:
        return (
          <Step4
            onNext={nextStep}
            onPrev={prevStep}
            selectedPlan={selectedPlan}
            billing={billing}
            selectedAddons={selectedAddons}
            setCurrentStep={setCurrentStep}
          />
        );
      case 5:
        return <Step5 />;
      default:
        return <Step1 onNext={nextStep} />;
    }
  };

  return <>{renderStep()}</>;
}

export default App;
