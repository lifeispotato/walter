import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/join/Join.css";

const Join = () => {
  const navigate = useNavigate();
  const [joinType, setJoinType] = useState(null);

  return (
    <div className="join-container">
      <div className="join-wrap">
        <div className="join-title-container">
          <h1>회원가입</h1>
          <span className="body-rgular-16-25">
            어떤 유형의 회원으로 가입하시나요?
          </span>
        </div>
        <div className="join-type-container">
          <div
            className={`join-type-dev ${
              joinType === 1 ? "join-type-active" : ""
            }`}
            onClick={() => setJoinType(1)}
          >
            <img
              src={
                joinType === 1
                  ? "/img/join-check-active.svg"
                  : "/img/join-check.svg"
              }
            />
            <div className="join-type-content">
              <span className="body-rgular-16-25">개발자로 가입할래요.</span>
              <span className="body-rgular-16-25">
                채용 공고를 확인하고 지원할 수 있어요.
              </span>
            </div>
          </div>
          <div
            className={`join-type-company ${
              joinType === 2 ? "join-type-active" : ""
            }`}
            onClick={() => setJoinType(2)}
          >
            <img
              src={
                joinType === 2
                  ? "/img/join-check-active.svg"
                  : "/img/join-check.svg"
              }
            />
            <div className="join-type-content">
              <span className="body-rgular-16-25">
                스타트업으로 가입할래요.
              </span>
              <span className="body-rgular-16-25">
                채용 공고를 올리고 개발자를 채용할 수 있어요.
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            className={`walter-btn ${joinType ? "walter-btn-active" : ""}`}
            onClick={() => {
              if (joinType === 1) {
                navigate("/join/developer");
                return;
              }
              if (joinType === 2) {
                navigate("/join/startup");
                return;
              }
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
