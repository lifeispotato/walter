import React, { useEffect, useState } from "react";
import "../../css/suggest/Suggest.css";
import "../../css/walter.css";
import MyDocument from "./MyDocument";

const Suggest = () => {
  const [navbar, setNavbar] = useState(1);

  return (
    <div className="walter-container">
      <section className="title-container-310 suggest-title-container">
        <h1 className="title-h1">채용 제안</h1>
      </section>
      <div className="suggest-navbar">
        <div className="suggest-detail-navbar">
          <a
            onClick={() => setNavbar(1)}
            className={navbar === 1 ? "navbar-container-active" : ""}
          >
            <span
              className={`body-rgular-18-28 ${
                navbar === 1 ? "navbar-active" : ""
              }`}
            >
              내 지원서
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
              채용 현황
            </span>
          </a>
        </div>
      </div>
      <MyDocument />
    </div>
  );
};

export default Suggest;
