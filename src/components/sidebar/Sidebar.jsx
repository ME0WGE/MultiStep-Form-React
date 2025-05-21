import "./sidebar.css";

const steps = [
  { label: "YOUR INFO" },
  { label: "SELECT PLAN" },
  { label: "ADD-ONS" },
  { label: "SUMMARY" },
];

export default function Sidebar({ activeStep = 1 }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-bg" />
      <nav className="sidebar-steps">
        {steps.map((step, index) => (
          <div className="sidebar-step" key={step.label}>
            <div
              className={
                "sidebar-step-circle" +
                (activeStep === index + 1 ? " active" : "")
              }
            >
              {index + 1}
            </div>
            <div className="sidebar-step-labels">
              <span className="sidebar-step-number">STEP {index + 1}</span>
              <span className="sidebar-step-title">{step.label}</span>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
