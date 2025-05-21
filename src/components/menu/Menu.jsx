import "./menu.css";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
  return (
    <>
      <div className="container">
        {/* bg-image */}
        <div className="menu-content">
          {/* STEP 1 */}
          <div className="menu-element">
            <FontAwesomeIcon icon={fa1} />
            <div className="el-header">
              <h4>STEP 1</h4>
              <span>YOUR INFO</span>
            </div>
          </div>
          {/* STEP 2 */}
          <div className="menu-element">
            <FontAwesomeIcon icon={fa2} />
            <div className="el-header">
              <h4>STEP 2</h4>
              <span>SELECT PLAN</span>
            </div>
          </div>
          {/* STEP 3 */}
          <div className="menu-element">
            <FontAwesomeIcon icon={fa3} />
            <div className="el-header">
              <h4>STEP 3</h4>
              <span>ADD-ONS</span>
            </div>
          </div>
          {/* STEP 4 */}
          <div className="menu-element">
            <FontAwesomeIcon icon={fa4} />
            <div className="el-header">
              <h4>STEP 4</h4>
              <span>SUMMARY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
