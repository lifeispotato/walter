import React, { useEffect, useState } from "react";
import "../css/component/CompanyList.css";
import "../css/walter.css";
import EmploymentModal from "../pages/position/EmploymentModal";

const CompanyList = (props) => {
  const [videoFocus, setVideoFocus] = useState(true);
  const [presentationFocus, setPresentationFocus] = useState(false);
  const [employmentModalOpen, setEmploymentModalOpen] = useState(false);

  const [companyList, setCompanyList] = useState([
    {
      companyName: "코드메이커",
      location: "서울",
      employeeNum: 8,
      state:
        "" /*채용 상태 나타내는 칸 뭐라고 올지 몰라서 일단 비워둠 밑에 하드코딩해서 바꿔줘야 함*/,
      content:
        "코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다.",
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
    {
      location: "서울",
      employeeNum: 8,
      content:
        "코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다.",
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
  ]);

  return (
    <div className="walter-container">
      {companyList.map((item, index) => {
        return (
          <div className="company-info-container">
            <div className="company-profile-container">
              <div className="company-name-container">
                <img
                  className="company-profile-img"
                  src="/img/company-img.png"
                />
                <div className="company-name">
                  <div className="company-info-location-scale">
                    <img src="/img/gps-ico.svg" />
                    <span>{item.location}</span>
                    <img src="/img/people-ico.svg" />
                    <span>{item.employeeNum}</span>
                  </div>
                  <span className="body-rgular-18-28">{item.companyName}</span>
                </div>
              </div>
              <span className="body-rgular-16-25 company-info-content">
                {item.content}
              </span>
              <div className="company-name-divider"></div>
              <div className="company-position">
                <span
                  className="body-rgular-18-28 company-position-title cursor-pointer"
                  onClick={() => {
                    setEmploymentModalOpen(!employmentModalOpen);
                  }}
                >
                  채용 포지션
                </span>
                <span className="info-divider">ㅣ</span>
                <span className="body-rgular-18-28 company-position-content">
                  프론트 엔드
                </span>
                <div className="company-career-container">
                  <span className="body-rgular-16-25 company-career-title">
                    경력
                  </span>
                  <span className="body-rgular-16-25 company-career-content">
                    2023.05.21
                  </span>
                </div>
              </div>
              <div className="company-stack-container">
                <div className="company-stack">
                  <span className="body-rgular-14-22">Next JS</span>
                </div>
                <div className="company-stack">
                  <span className="body-rgular-14-22">JavaScript</span>
                </div>
              </div>
              <div className="company-btn-container">
                <div className="company-scrap-container">
                  <img src="/img/scrap-fill-ico.svg" />
                  <span className="body-rgular-16-25">스크랩 완료</span>
                </div>
                <div className="company-apply-container">
                  <span className="body-rgular-16-25">지원하기</span>
                </div>
              </div>
              <div className="company-hiring-state">
                <span className="body-rgular-14-22 hiring-state-text">
                  채용중
                </span>
              </div>
            </div>
            <div className="company-video-container">
              <div className="company-video-title-container">
                <div
                  className={`cursor-pointer ${
                    item.videoFocus ? "company-category-active" : ""
                  }`}
                  onClick={() => {
                    let copyData = [...companyList];
                    copyData[index].videoFocus = true;
                    copyData[index].presentationFocus = false;
                    setCompanyList(copyData);
                    // setVideoFocus(true);
                    // setPresentationFocus(false);
                  }}
                >
                  <span className="body-rgular-16-25">스타트업 소개영상</span>
                </div>
                <div
                  className={`cursor-pointer ${
                    item.presentationFocus ? "company-category-active" : ""
                  }`}
                  onClick={() => {
                    let copyData = [...companyList];
                    copyData[index].videoFocus = false;
                    copyData[index].presentationFocus = true;
                    setCompanyList(copyData);
                    // setVideoFocus(false);
                    // setPresentationFocus(true);
                  }}
                >
                  <span className="body-rgular-16-25">채용설명회</span>
                </div>
              </div>
              <div className="company-video-content-container">
                {item.videoFocus ? 1 : item.presentationFocus ? 2 : null}
              </div>
            </div>
          </div>
        );
      })}
      {employmentModalOpen ? (
        <EmploymentModal setEmploymentModalOpen={setEmploymentModalOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CompanyList;
