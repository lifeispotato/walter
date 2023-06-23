import React, { useEffect, useState } from "react";
import "../../css/program/Program.css";
import "../../css/walter.css";
import ProgramList from "./ProgramList";

const Program = () => {
  const [navbar, setNavbar] = useState(1);

  return (
    <div className="walter-container">
      <section className="title-container-310 program-title-container">
        <h1 className="title-h1">채용 프로그램</h1>
      </section>
      <div className="program-navbar">
        <div className="program-detail-navbar">
          <a
            onClick={() => setNavbar(1)}
            className={navbar === 1 ? "navbar-container-active" : ""}
          >
            <span
              className={`body-rgular-18-28 ${
                navbar === 1 ? "navbar-active" : ""
              }`}
            >
              진행중인 프로그램
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
              종료된 프로그램
            </span>
          </a>
        </div>
      </div>
      <ProgramList />
    </div>
  );
};

export default Program;
