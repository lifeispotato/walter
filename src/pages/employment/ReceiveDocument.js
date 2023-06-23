import React, { useEffect, useState } from "react";
import "../../css/employment/ReceiveDocument.css";
import "../../css/walter.css";
import EmploymentModal from "../position/EmploymentModal";
import { useNavigate } from "react-router-dom";

const ReceiveDocument = () => {
  const navigate = useNavigate();
  const [employmentModalOpen, setEmploymentModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [careerFilter, setCareerFilter] = useState("전체");
  const careerFilterList = ["지원중", "면접진행"];

  return (
    <div className="walter-container">
      <div className="receive-doc-container">
        <div className="receive-doc-filter-container">
          <span className="body-rgular-18-28 filter-title">필터</span>
          <div className="receive-doc-filter-wrap">
            <div>
              <div
                className="receive-doc-filter cursor-pointer"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <span className="body-rgular-16-25 filter-text">
                  {careerFilter}
                </span>
                <img src="/img/chevron-down.svg" />
              </div>
              {filterOpen ? (
                <div className="receive-doc-submenu">
                  {careerFilterList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="submenu-list"
                        onClick={() => {
                          setCareerFilter(item);
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
            {/* 클릭하면 필터 초기화 되게 api 보내기 */}
            <div className="filter-reset">
              <img src="/img/reset-ico.svg" />
              <span className="body-rgular-14-22 filter-reset-text">
                초기화
              </span>
            </div>
          </div>
        </div>
        <div className="receive-doc-info-container">
          <div className="receive-doc-wrap">
            <div className="receive-doc-position">
              <span
                className="body-rgular-18-28 cursor-pointer"
                onClick={() => setEmploymentModalOpen(true)}
              >
                채용 포지션
              </span>
              <span className="divider body-rgular-18-28">ㅣ</span>
              <span className="body-rgular-18-28">프론트 엔드</span>
            </div>
            <div className="receive-doc-career">
              <span className="body-rgular-16-25">경력</span>
              <span className="body-rgular-16-25">2023.05.21</span>
            </div>
            <div className="receive-doc-stack">
              <div className="item-grey-line">Next JS</div>
              <div className="item-grey-line">Java Script</div>
            </div>
            <div className="receive-doc-btn-wrap">
              <button className="body-rgular-16-25">삭제하기</button>
              <button
                className="body-rgular-16-25"
                onClick={() => navigate("/employment/receive")}
              >
                받은 지원서(3)
              </button>
            </div>
            <div className="item-yellow-bg receive-doc-state">지원중</div>
          </div>
        </div>
      </div>
      {employmentModalOpen ? (
        <EmploymentModal setEmploymentModalOpen={setEmploymentModalOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ReceiveDocument;
