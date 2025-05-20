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

  return (
    <>
      {/* Display Plans */}
      <div className="card">
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
