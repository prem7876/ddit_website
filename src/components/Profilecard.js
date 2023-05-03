import React from "react";
import "../styles/Profilecard.css";

function Profilecard() {
  return (
    <div className="contact-card">
      <div className="cards">
        <div className="imgBg">
          <img src="karan.jpg" alt="" />
        </div>
        <div className="info">
          <div className="naam">
            <h3>
              Karan Kharadi<span>Programmer</span>
            </h3>
            <ul className="social">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
