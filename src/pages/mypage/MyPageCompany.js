import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/MyPageCompany.css";
import AccountInfo from "./AccountInfo";
import ScrapList from "./ScrapList";
import Ask from "./Ask";
import LeavePopup from "./LeavePopup";
import MyPageCompanyInfo from "./MyPageCompanyInfo";
import DevScrapList from "./DevScrapList";
import { Navigate, useNavigate } from "react-router-dom";

const MyPageCompany = () => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [leavePopup, setLeavePopup] = useState(false);

  return (
    <div className="mypage-com-container">
      <div className="mypage-com-wrap">
        <h1>마이페이지</h1>
        <div className="mypage-com-content-container">
          <div className="mypage-com-content-box">
            <img src="/img/mypage-profile-basic.svg" />
            <div className="mypage-com-member-name">
              <span className="body-rgular-18-28">홍길동님</span>
              <span className="body-rgular-16-25">example12@example.com</span>
            </div>
            <div className="mypage-com-menu">
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 1 ? "mypage-com-menu-active" : ""
                }`}
                onClick={() => setCurrentMenu(1)}
              >
                계정 정보
              </a>
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 2 ? "mypage-com-menu-active" : ""
                }`}
                onClick={() => setCurrentMenu(2)}
              >
                스타트업 정보
              </a>
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 3 ? "mypage-com-menu-active" : ""
                }`}
                onClick={() => setCurrentMenu(3)}
              >
                스크랩
              </a>
              <a
                className={`body-rgular-16-25 ${
                  currentMenu === 4 ? "mypage-com-menu-active" : ""
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
          <div className="mypage-com-content-detail">
            {currentMenu === 1 ? (
              <MyPageCompanyInfo />
            ) : currentMenu === 2 ? (
              <ScrapList />
            ) : currentMenu === 3 ? (
              <DevScrapList />
            ) : currentMenu === 4 ? (
              <Ask />
            ) : null}
            {leavePopup ? <LeavePopup setLeavePopup={setLeavePopup} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCompany;
