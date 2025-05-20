import "./addon.css";

export default function AddOn({
  label,
  h3,
  span,
  inputId,
  inputName,
  inputValue,
  price,
  frequency,
}) {
  return (
    <>
      <div className="addon-form-container">
        <form>
          <input
            type="checkbox"
            id={inputId}
            name={inputName}
            value={inputValue}
          />
          <label htmlFor={label}>
            <h3>{h3}</h3>
            <span> {span} </span>
          </label>
        </form>
        <div className="price-addons">
          <span>
            +${price}
            {frequency}
          </span>
        </div>
      </div>
    </>
  );
}
