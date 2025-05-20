import "./header.css";

export default function Header({ h1, span }) {
  return (
    <>
      <div className="header-header">
        <h1> {h1} </h1>
        <span> {span} </span>
      </div>
    </>
  );
}
