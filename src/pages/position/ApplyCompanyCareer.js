import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/suggest/MyDocument.css";
import "../../css/position/ApplyCompanyBasic.css";

const ApplyCompanyCareer = () => {
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
    <div className="apply-container">
      <div className="apply-progress-bar">
        <img src="/img/join-progress-2.svg" />
      </div>
      <div className="apply-wrap">
        <div className="join-title-container">
          <h1>지원하기</h1>
          <div className="apply-company-name">
            <span className="body-rgular-16-25 apply-company-name-title">
              지원 기업
            </span>
            <span className="body-rgular-16-25">코드메이커</span>
            <span className="divider">ㅣ</span>
            <span className="body-rgular-16-25">프론트엔드 경력</span>
          </div>
        </div>
        <div className="my-document-info-input">
          <span className="body-rgular-16-25 form-title">학교명</span>
          <input
            className="walter-input"
            type="text"
            placeholder="학교명을 입력해 주세요."
          />
          <span className="body-rgular-16-25 form-title">학과명</span>
          <input
            className="walter-input"
            type="text"
            placeholder="학과명을 입력해 주세요."
          />
          <span className="body-rgular-16-25 form-title-choice">
            컴퓨터 관련 전공 여부
          </span>
          <div className="checkbox-container">
            <input type="checkbox" id="major-checkbox" />
            <label
              className="walter-checkbox checkbox-major"
              htmlFor="major-checkbox"
            >
              예
            </label>
          </div>
          <div className="doc-radio-container">
            <span className=" body-rgular-16-25 form-title">상태</span>
            <div className="radio-container">
              <input type="radio" name="education-state" id="enrolled" />
              <label className="body-rgular-14-22" htmlFor="enrolled">
                재학
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="education-state"
                id="leave-of-absence"
              />
              <label className="body-rgular-14-22" htmlFor="leave-of-absence">
                휴학
              </label>
            </div>
            <div className="radio-container">
              <input type="radio" name="education-state" id="graduated" />
              <label className="body-rgular-14-22" htmlFor="graduated">
                졸업
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="education-state"
                id="expected-graduation"
              />
              <label
                className="body-rgular-14-22"
                htmlFor="expected-graduation"
              >
                졸업예정
              </label>
            </div>
            <div className="radio-container">
              <input type="radio" name="education-state" id="withdrawn" />
              <label className="body-rgular-14-22" htmlFor="withdrawn">
                중퇴
              </label>
            </div>
          </div>
          <span className="body-rgular-16-25 form-title-choice">경력</span>
          <div className="doc-career-container">
            <span className="body-rgular-16-25 form-title">회사명</span>
            <input
              className="walter-input"
              type="text"
              value={"길동브라더스"}
            />
            <span className="body-rgular-16-25 form-title">포지션</span>
            <input className="walter-input" type="text" value={"프론트엔드"} />
            <div className="career-period">
              <div className="career-start-date-container">
                <span className="form-title">시작일</span>
                <div>
                  <input
                    className="career-start-date"
                    data-placeholder="YYYY-MM-DD"
                    type="date"
                  />
                </div>
              </div>
              <img className="date-line" src="/img/date-line.svg" />
              <div className="career-end-date-container">
                <span className="form-title">종료일</span>
                <div>
                  <input
                    className="career-end-date"
                    data-placeholder="YYYY-MM-DD"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="checkbox-container-career">
              <input type="checkbox" id="major-checkbox" />
              <label
                className="walter-checkbox checkbox-major"
                htmlFor="major-checkbox"
              >
                현재 재직중
              </label>
            </div>
          </div>
          <button className="career-add-btn">
            <span className="body-rgular-14-22">추가</span>
          </button>
        </div>
        <div className="join-next-step-btn">
          <button
            className={`walter-btn`}
            onClick={() => {
              navigate("/apply/step3");
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyCompanyCareer;
