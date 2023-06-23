import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/Ask.css";
import { useNavigate } from "react-router-dom";

const Ask = () => {
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
            <div className="ask-list-container">
              <div className="ask-list-number">
                <h3>문의하기</h3>
                <span className="body-rgular-18-28">7개</span>
              </div>
              <div className="ask-list-table">
                <table>
                  <thead>
                    <tr>
                      <th className="ask-table-title body-rgular-16-25">
                        제목
                      </th>
                      <th className="ask-table-date body-rgular-16-25">
                        작성일
                      </th>
                      <th className="ask-table-state body-rgular-16-25">
                        답변여부
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="cursor-pointer"
                      onClick={() => navigate("/mypage/ask/1")}
                    >
                      <td className="ask-table-title body-rgular-16-25">
                        <span>매칭 진행 여부 확인 문의합니다.</span>
                      </td>
                      <td className="ask-table-date body-rgular-16-25">
                        <span>2023.05.24</span>
                      </td>
                      <td className="ask-table-state">
                        <div className="item-green">답변완료</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                <img src="/img/chevron-left.svg" />
                <div className="pagination-number">
                  <a>1</a>
                  <a>2</a>
                </div>
                <img src="/img/chevron-right.svg" />
              </div>
              <div className="ask-btn-container">
                <button
                  className="ask-btn body-rgular-16-25"
                  onClick={() => navigate("/mypage/ask/writing")}
                >
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
