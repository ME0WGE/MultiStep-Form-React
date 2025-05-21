import { useState } from "react";
import "./card.css";

export default function Card({
  planTitle,
  planPrice,
  paymentFrequency,
  imgSrc,
  altText,
}) {
  const imageSource = new URL(`../../assets/img/${imgSrc}`, import.meta.url)
    .href;

  const [isChosen, setIsChosen] = useState(true);

  const handleClick = () => {
    const card = document.querySelectorAll(".card");

    for (let i = 0; i < card.length; i++) {
      const element = card[i];

      if (isChosen === true) {
        element.style.background = "grey";
        setIsChosen(false);
        console.log(isChosen);
      } else {
        element.style.background = "white";
        setIsChosen(true);
        console.log(isChosen);
      }
    }

    // if (isChosen === true) {
    //   card.style.background = "grey";
    //   setIsChosen(false);
    //   console.log(isChosen);
    // } else {
    //   card.style.background = "white";
    //   setIsChosen(true);
    //   console.log(isChosen);
    // }
    // setIsChosen(false);
    // console.log(isChosen);
  };

  return (
    <>
      {/* Display Plans */}
      <div className="card" onClick={handleClick}>
        <img src={imageSource} alt={altText} />
        <div className="card-content">
          <h3> {planTitle} </h3>
          <span>
            ${planPrice} {"/"} {paymentFrequency}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
