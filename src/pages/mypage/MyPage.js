import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/MyPage.css";
import AccountInfo from "./AccountInfo";
import ScrapList from "./ScrapList";
import Ask from "./Ask";
import LeavePopup from "./LeavePopup";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
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
            <div className="mypage-menu">
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 1 ? "mypage-menu-active" : ""
                }`}
                onClick={() => setCurrentMenu(1)}
              >
                계정 정보
              </a>
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 2 ? "mypage-menu-active" : ""
                }`}
                onClick={() => setCurrentMenu(2)}
              >
                스크랩
              </a>
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 3 ? "mypage-menu-active" : ""
                }`}
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
            {currentMenu === 1 ? (
              <AccountInfo />
            ) : currentMenu === 2 ? (
              <ScrapList />
            ) : currentMenu === 3 ? (
              <Ask />
            ) : null}
            {leavePopup ? <LeavePopup setLeavePopup={setLeavePopup} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
