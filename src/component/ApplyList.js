import React, { useEffect, useState } from "react";
import "../css/component/ApplyList.css";
import "../css/walter.css";
import EmploymentModal from "../pages/position/EmploymentModal";
import EmploymentMsg from "../pages/suggest/EmploymentMsg";
import EmploymentDocument from "../pages/suggest/EmploymentDocument";

const ApplyList = (props) => {
  const [employmentModalOpen, setEmploymentModalOpen] = useState(false);
  const [msgModalOpen, setMsgModalOpen] = useState(false);
  const [docModalOpen, setDocModalOpen] = useState(false);

  const [applyList, setApplyList] = useState([
    {
      applyName: "코드메이커",
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
      applyName: "코드메이커",
      location: "서울",
      employeeNum: 8,
      content:
        "코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을 개발합니다.",
      position: "프론트엔드",
      stack: "Next JS",
      videoFocus: true,
      presentationFocus: false,
    },
    {
      applyName: "코드메이커",
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
      <div className="apply-list-container">
        {applyList.map((item, index) => {
          return (
            <div className="apply-info-container">
              <div className="apply-profile-container">
                <div className="apply-name-container">
                  <img
                    className="apply-profile-img"
                    src="/img/company-img.png"
                  />
                  <div className="apply-name">
                    <div className="apply-info-location-scale">
                      <img src="/img/gps-ico.svg" />
                      <span>{item.location}</span>
                      <img src="/img/people-ico.svg" />
                      <span>{item.employeeNum}</span>
                    </div>
                    <span className="body-rgular-18-28">{item.applyName}</span>
                  </div>
                </div>
                <div className="apply-name-divider"></div>
                <div className="apply-position">
                  <span
                    className="body-rgular-18-28 apply-position-title cursor-pointer"
                    onClick={() => {
                      setEmploymentModalOpen(!employmentModalOpen);
                    }}
                  >
                    채용 포지션
                  </span>
                  <span className="info-divider">ㅣ</span>
                  <span className="body-rgular-18-28 apply-position-content">
                    프론트 엔드
                  </span>
                  <div className="apply-career-container">
                    <span className="body-rgular-16-25 apply-career-title">
                      경력
                    </span>
                    <span className="body-rgular-16-25 apply-career-content">
                      2023.05.21
                    </span>
                  </div>
                </div>
                <div className="apply-stack-container">
                  <div className="apply-stack">
                    <span className="body-rgular-14-22">Next JS</span>
                  </div>
                  <div className="apply-stack">
                    <span className="body-rgular-14-22">JavaScript</span>
                  </div>
                </div>
                <div
                  className="apply-btn-container cursor-pointer"
                  onClick={() => {
                    setDocModalOpen(true);
                  }}
                >
                  <div className="apply-introduction-container">
                    <span className="body-rgular-16-25">지원서 확인</span>
                  </div>
                  <div
                    className="apply-msg-container cursor-pointer"
                    onClick={() => {
                      setMsgModalOpen(true);
                    }}
                  >
                    <span className="body-rgular-16-25">메세지 확인</span>
                  </div>
                </div>
                <div className="apply-hiring-state">
                  <span className="body-rgular-14-22 hiring-state-text">
                    채용중
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {employmentModalOpen ? (
        <EmploymentModal setEmploymentModalOpen={setEmploymentModalOpen} />
      ) : (
        ""
      )}
      {msgModalOpen ? (
        <EmploymentMsg setMsgModalOpen={setMsgModalOpen} />
      ) : null}
      {docModalOpen ? (
        <EmploymentDocument setDocModalOpen={setDocModalOpen} />
      ) : null}
    </div>
  );
};

export default ApplyList;
