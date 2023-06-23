import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/suggest/MyDocument.css";
import "../../css/join/JoinDevBasic.css";

const JoinDevBasic = () => {
  const navigate = useNavigate();

  //지원서 등록 부분
  const [filterOpen, setFilterOpen] = useState([false, false]);
  const [careerFilter, setCareerFilter] = useState("경력");
  const [stackFilter, setStackFilter] = useState("기술 스택을 선택하세요.");
  const careerFilterList = [
    "1년 미만",
    "1년",
    "3년 이하",
    "5년 이하",
    "7년 이하",
    "10년 이하",
    "10년 이상",
  ];
  const position = [
    "프론트엔드",
    "백엔드",
    "IOS",
    "Android",
    "DevOps",
    "크로스플랫폼 앱",
    "인공지능 · 머신러닝",
    "데이터 엔지니어",
    "게임 클라이언트",
    "게임 서버",
    "풀스택",
    "VR앱 개발자",
    "네이티브 앱 개발자",
    "PM/PO",
    "마케터",
    "디자이너",
  ];
  const stackFilterList = [
    "React JS",
    "Vue JS",
    "Next JS",
    "React Native",
    "Node JS",
    "Spring",
    "Svelte",
  ];
  //지원서 등록 부분

  return (
    <div className="join-container">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: "50%" }}></div>
      </div>
      <div className="join-wrap">
        <div className="join-title-container">
          <h1>지원서 등록</h1>
          <span className="body-rgular-16-25">
            채용 공고에 지원 시 필요한 내용을 작성해 주세요.
          </span>
        </div>
        <div className="my-document-info-input">
          <span className="body-rgular-16-25 form-title">이름</span>
          <input
            className="walter-input"
            type="text"
            value={"홍길동"}
            disabled
          />
          <span className="body-rgular-16-25 form-title">이메일</span>
          <input
            className="walter-input"
            type="email"
            value={"adsr@afdsa.com"}
            disabled
          />
          <span className="body-rgular-16-25 form-title">연락처</span>
          <input
            className="walter-input"
            type="tel"
            placeholder="-를 빼고 입력해 주세요."
          />
          <span className="body-rgular-16-25 form-title">경력</span>
          <div
            className="document-filter cursor-pointer"
            onClick={() => {
              let copyData = [...filterOpen];
              copyData[0] = !copyData[0];
              setFilterOpen(copyData);
            }}
          >
            <span
              className={`body-rgular-16-25 ${
                careerFilter === "경력"
                  ? "filter-text-document"
                  : "filter-text-document-active"
              }`}
            >
              {careerFilter}
            </span>
            <img src="/img/chevron-down.svg" />
          </div>
          {filterOpen[0] ? (
            <div className="document-submenu">
              {careerFilterList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="submenu-list"
                    onClick={() => {
                      setCareerFilter(item);
                    }}
                  >
                    <span className="body-rgular-16-25 cursor-pointer">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <span className="body-rgular-16-25 form-title form-title-position">
            포지션
          </span>
          <div className="position-select-list">
            {position.map((item, index) => {
              return (
                <div className={`cursor-pointer position-select-item`}>
                  <span className="body-rgular-14-22">{item}</span>
                </div>
              );
            })}
          </div>
          <span className="body-rgular-16-25 form-title">관심 기술 스택</span>
          <div
            className="document-filter document-filter-stack cursor-pointer"
            onClick={() => {
              let copyData = [...filterOpen];
              copyData[1] = !copyData[1];
              setFilterOpen(copyData);
            }}
          >
            <span
              className={`body-rgular-16-25 ${
                stackFilter === "기술 스택을 선택하세요."
                  ? "filter-text-document"
                  : "filter-text-document-active"
              }`}
            >
              {stackFilter}
            </span>
            <img src="/img/chevron-down.svg" />
          </div>
          {filterOpen[1] ? (
            <div className="document-submenu document-submenu-stack">
              {stackFilterList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="submenu-list"
                    onClick={() => {
                      setStackFilter(item);
                    }}
                  >
                    <span className="body-rgular-16-25 cursor-pointer">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="join-next-step-btn">
          <button
            className={`walter-btn`}
            onClick={() => {
              navigate("/join/developer/step2");
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinDevBasic;
