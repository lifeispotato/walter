import React, { useEffect, useState } from "react";
import "../../css/employment/ReceiveDocCheck.css";
import "../../css/walter.css";
import DevList from "../../component/DevList";

const ReceiveDocCheck = () => {
  return (
    <div className="walter-container">
      <section className="employment-receive-container">
        <div className="employment-receive-title-container">
          <div className="employment-receive-title">
            <div className="employment-receive-title-pos">
              <span className="body-rgular-18-28">채용 포지션</span>
              <span className="divider body-rgular-18-28">ㅣ</span>
              <span className="body-rgular-18-28">프론트 엔드</span>
            </div>
            <div className="employment-receive-title-date">
              <span>경력</span>
              <span>2023.05.21</span>
            </div>
          </div>
          <div className="employment-receive-stack">
            <div className="item-grey-line">Next JS</div>
            <div className="item-grey-line">JavaScript</div>
          </div>
        </div>
      </section>
      <div className="employment-receive-info">
        <DevList />
      </div>
    </div>
  );
};

export default ReceiveDocCheck;
