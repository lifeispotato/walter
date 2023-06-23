import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/AskWriting.css";
import { useNavigate } from "react-router-dom";

const AskWriting = () => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [leavePopup, setLeavePopup] = useState(false);

  return (
    <div className="mypage-container">
      <div className="mypage-wrap">
        <h1>마이페이지</h1>
        <div className="mypage-content-container">
          <div className="mypage-content-box">
            <img src="/img/mypage-profile-basic.svg" />
            <div className="mypage-member-name">
              <span className="body-rgular-18-28">홍길동님</span>
              <span className="body-rgular-16-25">example12@example.com</span>
            </div>
            <div className="mypage-com-menu">
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup")}
              >
                계정 정보
              </a>
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup/information")}
              >
                스타트업 정보
              </a>
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup/devscrap")}
              >
                스크랩
              </a>
              <a
                className={`body-rgular-16-25 mypage-com-menu-active`}
                onClick={() => navigate("/mypage/ask")}
              >
                문의하기
              </a>
            </div>
            <span
              className="withdraw-btn cursor-pointer"
              onClick={() => setLeavePopup(true)}
            >
              회원탈퇴
            </span>
          </div>
          <div className="mypage-content-detail">
            <div className="ask-writing-container">
              <h3>문의내용 작성</h3>
              <div className="ask-writing-wrap">
                <div className="ask-writing-title">
                  <span className="form-title body-rgular-16-25">제목</span>
                  <input
                    className="walter-input"
                    type="text"
                    placeholder="제목을 입력해 주세요."
                  />
                </div>
                <div className="ask-writing-content">
                  <span className="form-title body-rgular-16-25">내용</span>
                  <textarea
                    className="walter-textarea"
                    type="text"
                    placeholder="내용을 입력해 주세요."
                  />
                </div>
              </div>
              <div className="ask-detail-btn-container">
                <button className="ask-btn body-rgular-16-25">삭제하기</button>
                <button
                  className="ask-btn body-rgular-16-25"
                  onClick={() => navigate("/mypage/ask")}
                >
                  목록으로
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskWriting;
