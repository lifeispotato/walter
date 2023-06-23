import React, { useEffect, useState } from "react";
import "../css/component/DevList.css";
import "../css/walter.css";
import DevInfoModal from "../pages/developer/DevInfoModal";

const DevList = (props) => {
  const [devModalOpen, setDevModalOpen] = useState(false);

  const [companyList, setCompanyList] = useState([
    {
      devName: "고길동",
      state:
        "" /*채용 상태 나타내는 칸 뭐라고 올지 몰라서 일단 비워둠 밑에 하드코딩해서 바꿔줘야 함*/,
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
    {
      devName: "홍길동",
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
    {
      devName: "홍길동",
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
  ]);

  return (
    <div className="walter-container walter-dev-list">
      {companyList.map((item, index) => {
        return (
          <div
            className={
              props.page === "MyPage"
                ? "dev-info-container-mypage"
                : "dev-info-container"
            }
          >
            <div
              className={
                props.page === "MyPage"
                  ? "dev-profile-container-mypage"
                  : "dev-profile-container"
              }
            >
              <div className="dev-name-container">
                <img className="dev-profile-img" src="/img/dev-profile.png" />
                <div className="dev-name">
                  <div className="dev-info-career">
                    <span className="body-rgular-16-25">경력 1년</span>
                  </div>
                  <span className="body-rgular-18-28">{item.devName}</span>
                </div>
              </div>
              <div className="dev-name-divider"></div>
              <div className="dev-position">
                <span className="body-rgular-18-28 dev-position-title cursor-pointer">
                  포지션
                </span>
                <span className="info-divider">ㅣ</span>
                <span className="body-rgular-18-28 dev-position-content">
                  프론트 엔드
                </span>
              </div>
              <div className="dev-stack-container">
                <div className="dev-stack">
                  <span className="body-rgular-14-22">Next JS</span>
                </div>
                <div className="dev-stack">
                  <span className="body-rgular-14-22">JavaScript</span>
                </div>
              </div>
              <div className="dev-btn-container">
                <div className="dev-scrap-container cursor-pointer">
                  <img src="/img/scrap-fill-ico.svg" />
                  <span className="body-rgular-16-25">스크랩 완료</span>
                </div>
                <div
                  className="dev-apply-container cursor-pointer"
                  onClick={() => {
                    setDevModalOpen(true);
                  }}
                >
                  <span className="body-rgular-16-25">상세보기</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {devModalOpen ? <DevInfoModal setDevModalOpen={setDevModalOpen} /> : ""}
    </div>
  );
};

export default DevList;
