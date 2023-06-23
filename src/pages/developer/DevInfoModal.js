import React, { useEffect, useState } from "react";
import "../../css/developer/DevInfoModal.css";
import "../../css/walter.css";
import { useNavigate } from "react-router-dom";

const DevInfoModal = (props) => {
  const [navActive, setNavActive] = useState(1);

  return (
    <div className="dev-info-modal">
      <div className="dev-info-wrap">
        <div className="dev-info-top">
          <div className="dev-name-wrap">
            <h1>홍길동</h1>
            <span className="body-rgular-16-25">경력 1년</span>
          </div>
          <div className="dev-pos-stack-wrap">
            <div className="dev-pos-wrap">
              <span className="body-rgular-18-28">포지션</span>
              <span className="body-rgular-18-28 divider">ㅣ</span>
              <span className="body-rgular-18-28">프론트엔드</span>
            </div>
            <div className="dev-stack-wrap">
              <div className="item-grey-line">Java</div>
              <div className="item-grey-line">Java Script</div>
              <div className="item-grey-line">Html5</div>
            </div>
          </div>
        </div>
        <div className="dev-modal-navbar">
          <a
            className={`body-rgular-18-28 ${
              navActive === 1 ? "dev-modal-active" : ""
            }`}
            onClick={() => setNavActive(1)}
          >
            기본사항
          </a>
          <a
            className={`body-rgular-18-28 ${
              navActive === 2 ? "dev-modal-active" : ""
            }`}
            onClick={() => setNavActive(2)}
          >
            학력
          </a>
          <a
            className={`body-rgular-18-28 ${
              navActive === 3 ? "dev-modal-active" : ""
            }`}
            onClick={() => setNavActive(3)}
          >
            경력
          </a>
        </div>
        <div className="dev-modal-detail">
          <h3>기본사항</h3>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">이름</span>
            <span className="body-rgular-16-25">홍길동</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">연락처</span>
            <span className="body-rgular-16-25">010-1234-1234</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">이메일</span>
            <span className="body-rgular-16-25">example12@example.com</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">경력</span>
            <span className="body-rgular-16-25">1년</span>
          </div>
          <div className="dev-modal-detail-info dev-modal-detail-pos-stack">
            <span className="body-rgular-16-25">포지션</span>
            <div className="modal-pos-container">
              <div className="item-yellow">프론트엔드</div>
            </div>
          </div>
          <div className="dev-modal-detail-info last-item dev-modal-detail-pos-stack">
            <span className="body-rgular-16-25">관심 기술 스택</span>
            <div className="modal-stack-container">
              <div className="item-yellow">Java</div>
              <div className="item-yellow">Java Script</div>
              <div className="item-yellow">C++</div>
            </div>
          </div>
          <div className="dev-modal-devider"></div>
          <h3>학력</h3>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">학교명</span>
            <span className="body-rgular-16-25">00대학교</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">학과명</span>
            <span className="body-rgular-16-25">소프트웨어과</span>
          </div>
          <div className="dev-modal-detail-info last-item">
            <span className="body-rgular-16-25">상태</span>
            <span className="body-rgular-16-25">졸업</span>
          </div>
          <div className="dev-modal-devider"></div>
          <h3>경력</h3>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">회사명</span>
            <span className="body-rgular-16-25">길동브라더스</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">포지션</span>
            <span className="body-rgular-16-25">프론트엔드</span>
          </div>
          <div className="dev-modal-detail-info">
            <span className="body-rgular-16-25">시작일</span>
            <span className="body-rgular-16-25">2020-05-01</span>
          </div>
          <div className="dev-modal-detail-info last-item">
            <span className="body-rgular-16-25">종료일</span>
            <span className="body-rgular-16-25">2020-05-01</span>
          </div>
        </div>
        <div
          className="close-dev-modal cursor-pointer"
          onClick={() => {
            props.setDevModalOpen(false);
          }}
        >
          <img src="/img/delete-btn.svg" />
        </div>
      </div>
    </div>
  );
};

export default DevInfoModal;
