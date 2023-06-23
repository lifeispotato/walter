import React, { useEffect, useState } from "react";
import "../../css/employment/Announcement.css";
import "../../css/walter.css";

const Announcement = () => {
  const [filterOpen, setFilterOpen] = useState([false, false]);
  const [careerFilter, setCareerFilter] = useState("경력");
  const [stackFilter, setStackFilter] = useState("기술 스택을 선택하세요.");
  const [confirmMsg, setConfirmMsg] = useState("");

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

  return (
    <div className="walter-container">
      <div className="announcement-container">
        <div className="announcement-wrap">
          <div className="announcement-registration-title">
            <h1>새 공고 등록</h1>
            <span className="body-rgular-16-25">
              채용 공고 등록 시 필요한 기본 내용을 작성해 주세요.
            </span>
          </div>
          <div className="announcement-registration-input">
            <span className="body-rgular-16-25 form-title">
              공고명 (30자 이내)
            </span>
            <input className="walter-input" type="text" value={"홍길동"} />
            <span className="body-rgular-18-28">기술 스택</span>
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
            <div className="announcement-textarea-container">
              <span className="body-rgular-18-28">주요업무</span>
              <span className="body-rgular-16-25 form-title">주요업무</span>
              <textarea
                className="walter-textarea"
                placeholder="주요업무에 대해 작성해 주세요."
              ></textarea>
            </div>
            <div className="announcement-textarea-container">
              <span className="body-rgular-18-28">자격요건</span>
              <span className="body-rgular-16-25 form-title">자격요건</span>
              <textarea
                className="walter-textarea"
                placeholder="자격요건에 대해 작성해 주세요."
              ></textarea>
            </div>
            <div className="announcement-textarea-container">
              <span className="body-rgular-18-28">우대사항</span>
              <span className="body-rgular-16-25 form-title">우대사항</span>
              <textarea
                className="walter-textarea"
                placeholder="우대사항에 대해 작성해 주세요."
              ></textarea>
            </div>
          </div>
          <div className="announcement-btn">
            <button className="announcement-cancel-btn">
              <span className="body-rgular-16-25">취소하기</span>
            </button>
            <button className="announcement-registration-btn">
              <span className="body-rgular-16-25">공고등록</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
