import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/DevScrapList.css";
import DevList from "../../component/DevList";
import { useLocation, useNavigate } from "react-router-dom";

const DevScrapList = () => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [leavePopup, setLeavePopup] = useState(false);

  const location = useLocation();
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

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
                className={`body-rgular-16-25 mypage-com-menu-active`}
                onClick={() => navigate("/mypage-startup/devscrap")}
              >
                스크랩
              </a>
              <a
                className={`body-rgular-16-25`}
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
            <div className="dev-scrap-list-container">
              <div className="dev-scrap-list-number">
                <h3>스크랩한 개발자</h3>
                <span className="body-rgular-18-28">5개</span>
              </div>
              <DevList page={"MyPage"} />
              {/* <CompanyList page={"MyPage"} /> */}
              {/* <CompanyList page={"MyPage"} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevScrapList;
