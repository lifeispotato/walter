import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/suggest/MyDocument.css";
import "../../css/position/ApplyCompanyIntroduce.css";

const ApplyCompanyIntroduce = () => {
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
      <div className="apply-progress-bar apply-progress-bar-intro">
        <img src="/img/join-progress-3.svg" />
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
          <div className="apply-step3-title">
            <span className="body-rgular-16-25 form-title">지원 파일</span>
            <span className="body-rgular-14-22">
              링크 또는 파일 중 1개 이상 작성
            </span>
          </div>
          <span className="body-rgular-16-25">링크</span>
          <div className="intro-link-container">
            <input
              className={`walter-input`}
              type="email"
              required
              placeholder="링크를 이곳에 입력해 주세요."
            />
            <button className="intro-link-add-btn" disable>
              추가
            </button>
          </div>
          <span className="body-rgular-16-25">파일 업로드</span>
          <input className="intro-upload-input" type="file" id="intro-file" />
          <label className="intro-upload-label" htmlFor="intro-file">
            <img src="/img/file-upload.svg" />
            <span className="body-rgular-16-25">파일 업로드</span>
          </label>
          <span className="body-rgular-16-25 form-title">자기소개</span>
          <textarea
            placeholder="스타트업의 지원 동기와 자기소개를 작성해 주세요."
            className="walter-textarea intro-textarea"
          ></textarea>
        </div>
        <div className="join-next-step-btn">
          <button
            className={`walter-btn`}
            onClick={() => {
              navigate("/join/developer/step2");
            }}
          >
            지원 완료하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyCompanyIntroduce;
