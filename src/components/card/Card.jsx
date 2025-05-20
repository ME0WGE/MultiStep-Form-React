import "./card.css";
// import data from "../../data/data.json";

export default function Card({
  planTitle,
  planPrice,
  paymentFrequency,
  imgSrc,
  altText,
}) {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt={altText} />
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
