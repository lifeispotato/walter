import React, { useEffect, useState } from "react";
import "../../css/employment/Employment.css";
import "../../css/walter.css";
import Announcement from "./Announcement";
import ReceiveDocument from "./ReceiveDocument";

const Employment = () => {
  const [navbar, setNavbar] = useState(1);

  return (
    <div className="walter-container">
      <section className="title-container-310 employment-title-container">
        <h1 className="title-h1">채용 제안</h1>
      </section>
      <div className="employment-navbar">
        <div className="employment-detail-navbar">
          <a
            onClick={() => setNavbar(1)}
            className={navbar === 1 ? "navbar-container-active" : ""}
          >
            <span
              className={`body-rgular-18-28 ${
                navbar === 1 ? "navbar-active" : ""
              }`}
            >
              공고등록
            </span>
          </a>
          <a
            onClick={() => setNavbar(2)}
            className={navbar === 2 ? "navbar-container-active" : ""}
          >
            <span
              className={`body-rgular-18-28 ${
                navbar === 2 ? "navbar-active" : ""
              }`}
            >
              받은 지원서
            </span>
          </a>
        </div>
      </div>
      {navbar === 1 ? <Announcement /> : <ReceiveDocument />}
    </div>
  );
};

export default Employment;
