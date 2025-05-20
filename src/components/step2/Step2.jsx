import Card from "../card/Card";
import Header from "../header/Header";
import "./step2.css";
import data from "../../data/data.json";

export default function Step2() {
  const headerH1 = "Select Your Plan";
  const headerSpan = "You have the option of monthly or yearly billing";

  return (
    <>
      <Header h1={headerH1} span={headerSpan} />

      <div className="plan-cards">
        {data.map((plan, index) => (
          <Card
            key={index}
            planTitle={plan.title}
            planPrice={plan.price.monthly}
            paymentFrequency={"mo"}
            imgSrc={plan.image}
            altText={`image of the ${plan.title} plan`}
          />
        ))}
      </div>
    </>
  );
}
