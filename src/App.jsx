import { useState } from "react";
import "./App.css";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      // case 1:
      //   return <Step1 onNext={nextStep} />;
      // case 2:
      //   return <Step2 onNext={nextStep} onPrev={prevStep} />;
      case 1:
        return <Step3 onNext={nextStep} onPrev={prevStep} />;
      // case 4:
      //   return <Step4 onNext={nextStep} onPrev={prevStep} />;
      // case 5:
      //   return <Step5 onNext={nextStep} onPrev={prevStep} />;

      default:
        return <Step1 onNext={nextStep} />;
    }
  };

  return <>{renderStep()}</>;
}

export default App;
