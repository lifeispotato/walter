import React, { useEffect, useState } from "react";
import "../../css/position/EmploymentModal.css";

const EmploymentModal = (props) => {
  return (
    <div className="employment-popup-container">
      <div className="employment-popup-wrap">
        <h1 className="employment-popup-title">채용공고</h1>
        <div className="popup-company-name">
          <span className="body-rgular-16-25 popup-company-name-title">
            기업
          </span>
          <span className="body-rgular-16-25">코드메이커</span>
          <span className="divider">ㅣ</span>
          <span className="body-rgular-16-25">프론트엔드 경력</span>
        </div>
        <div className="popup-comany-content-container">
          <div className="popup-comany-content-wrap">
            <h2 className="comany-content-title">공고명</h2>
            <span className="body-rgular-16-25">
              코드메이커 프론트엔드 개발자 채용
            </span>
          </div>
          <div className="employment-popup-divider"></div>
          <div className="popup-comany-content-wrap">
            <h2 className="comany-content-title">기술스택</h2>
            <div className="comany-popup-stack-wrap">
              <div>
                <span className="body-rgular-16-25 popup-stack-title">
                  포지션
                </span>
                <span className="body-rgular-16-25">프론트엔드</span>
              </div>
              <div>
                <span className="body-rgular-16-25 popup-stack-title">
                  경력
                </span>
                <span className="body-rgular-16-25">경력</span>
              </div>
              <div>
                <span className="body-rgular-16-25 popup-stack-title">
                  관심 기술 스택
                </span>
                <div className="interest-stack-container">
                  <div>
                    <span className="body-rgular-14-22">Next JS</span>
                  </div>
                  <div>
                    <span className="body-rgular-14-22">Java</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="employment-popup-divider"></div>
          <div className="popup-comany-content-wrap">
            <h2 className="comany-content-title">주요업무</h2>
            <span className="body-rgular-16-25">
              · 주로 Javascript를 사용합니다.
              <br />· 동료들(다른 프로그래머, 디자이너를 비롯한 모든 직군)과
              협업하여, 고객 혹은 조직의 문제를 정의하고 적합한 해결책을
              찾아내어 실행합니다.
            </span>
          </div>
          <div className="employment-popup-divider"></div>
          <div className="popup-comany-content-wrap">
            <h2 className="comany-content-title">자격요건</h2>
            <span className="body-rgular-16-25">
              · 1년 이상의 경력이 있는 자<br />· 모바일 어플리케이션 구현 경험이
              있는 자
            </span>
          </div>
          <div className="employment-popup-divider"></div>
          <div className="popup-comany-content-wrap">
            <h2 className="comany-content-title">우대사항</h2>
            <span className="body-rgular-16-25">
              · 주로 Javascript를 사용합니다.
              <br />· 동료들(다른 프로그래머, 디자이너를 비롯한 모든 직군)과
              협업하여, 고객 혹은 조직의 문제를 정의하고 적합한 해결책을
              찾아내어 실행합니다.
            </span>
          </div>
          <div className="employment-popup-divider"></div>
        </div>
        <div className="employment-popup-btn-container">
          <div className="employment-scrap-container">
            <img src="/img/scrap-fill-ico.svg" />
            <span className="body-rgular-16-25">스크랩 완료</span>
          </div>
          <div className="employment-apply-container">
            <span className="body-rgular-16-25">지원하기</span>
          </div>
        </div>
        <div
          className="close-employment-popup cursor-pointer"
          onClick={() => {
            props.setEmploymentModalOpen(false);
          }}
        >
          <img src="/img/delete-btn.svg" />
        </div>
      </div>
    </div>
  );
};

export default EmploymentModal;
