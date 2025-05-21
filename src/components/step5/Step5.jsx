import Sidebar from "../sidebar/Sidebar";
import "./step5.css";

export default function Step5() {
  const imageSource = new URL(`../../assets/img/thankyou.svg`, import.meta.url)
    .href;

  return (
    <>
      <div className="step5">
        <div className="menu-container">
          <Sidebar activeStep={0} />
        </div>
        <div className="success">
          <img src={imageSource} alt="success" aria-hidden />
          <h2>Thank you!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
}
