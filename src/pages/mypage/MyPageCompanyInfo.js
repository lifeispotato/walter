import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/MyPageCompanyInfo.css";
import { useNavigate } from "react-router-dom";

const MyPageCompanyInfo = () => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [leavePopup, setLeavePopup] = useState(false);

  const [filterOpen, setFilterOpen] = useState([false, false]);
  const [loactionFilter, setLoactionFilter] = useState("경력");
  const loactionFilterList = [
    "서울",
    "세종",
    "강원",
    "인천",
    "경기",
    "충북",
    "충남",
    "경북",
    "대전",
    "대구",
    "전북",
    "경남",
    "울산",
    "광주",
    "부산",
    "전남",
    "제주",
  ];
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
                className={`body-rgular-16-25 mypage-com-menu-active`}
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
          <div className="mypage-com-content-detail">
            <div className="com-account-info-container">
              <div className="com-account-info-img">
                <img src="/img/profile-img-empty-big.svg" />
                <img
                  className="profile-edit-btn"
                  src="/img/profile-edit-btn.svg"
                />
              </div>
              <div className="com-account-info-name">
                <span className="body-rgular-18-28">홍길동님</span>
              </div>
              <div className="com-account-info-input-container">
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">아이디</span>
                  <input
                    className="walter-input"
                    type="text"
                    disabled
                    value="exam123123"
                  />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">기업명</span>
                  <input className="walter-input" type="text" value="홍길동" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">비밀번호</span>
                  <input className="walter-input" type="password" value="" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">이메일</span>
                  <input className="walter-input" type="email" value="홍길동" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">투자단계</span>
                  <input className="walter-input" type="text" value="홍길동" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">
                    누적 투자 금액
                  </span>
                  <input className="walter-input" type="text" value="5억" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">
                    투자 정보(투자사, 투자 시기)
                  </span>
                  <textarea className="walter-textarea" value="8명" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">직원 수</span>
                  <input className="walter-input" type="text" value="8명" />
                </div>
                <div className="join-input-container">
                  <span className="body-rgular-16-25 form-title">지역</span>
                  <div className="company-filter-container">
                    <div
                      className="join-company-filter cursor-pointer"
                      onClick={() => {
                        let copyData = [...filterOpen];
                        copyData[0] = !copyData[0];
                        setFilterOpen(copyData);
                      }}
                    >
                      <span
                        className={`body-rgular-16-25 ${
                          loactionFilter === "경력"
                            ? "filter-text-document"
                            : "filter-text-document-active"
                        }`}
                      >
                        {loactionFilter}
                      </span>
                      <img src="/img/chevron-down.svg" />
                    </div>
                    {filterOpen[0] ? (
                      <div className="join-company-submenu">
                        {loactionFilterList.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="submenu-list"
                              onClick={() => {
                                setLoactionFilter(item);
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
                  </div>
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">
                    서비스 소개 링크
                  </span>
                  <textarea className="walter-textarea" value="8명" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">
                    채용 페이지 링크
                  </span>
                  <textarea className="walter-textarea" value="8명" />
                </div>
                <div className="com-account-info-input">
                  <span className="body-rgular-16-25 form-title">
                    그 외 참고링크 (선택)
                  </span>
                  <textarea className="walter-textarea" value="8명" />
                </div>
                <div className="join-input-container">
                  <span className="body-rgular-16-25 form-title">
                    사업자등록증
                  </span>
                  <input
                    className="intro-upload-input"
                    type="file"
                    id="intro-file"
                  />
                  <label className="intro-upload-label" htmlFor="intro-file">
                    <img src="/img/file-upload.svg" />
                    <span className="body-rgular-16-25">파일 업로드</span>
                  </label>
                </div>
                <div className="com-account-edit-btn">
                  <button className="com-account-edit-btn-cancel">
                    <span className="body-rgular-16-25">취소하기</span>
                  </button>
                  <button className="com-account-edit-btn-complete">
                    <span className="body-rgular-16-25">수정완료</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCompanyInfo;
