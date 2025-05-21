import "./card.css";

export default function Card({
  planTitle,
  planPrice,
  paymentFrequency,
  imgSrc,
  altText,
  isSelected,
  onSelect,
}) {
  const imageSource = new URL(`../../assets/img/${imgSrc}`, import.meta.url)
    .href;

  return (
    <div className={`card${isSelected ? " selected" : ""}`} onClick={onSelect}>
      <img src={imageSource} alt={altText} />
      <div className="card-content">
        <h3>{planTitle}</h3>
        <span>
          ${planPrice} / {paymentFrequency}
        </span>
      </div>
    </div>
  );
}
