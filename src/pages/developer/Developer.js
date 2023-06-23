import React, { useEffect, useState } from "react";
import "../../css/developer/Developer.css";
import "../../css/walter.css";
import CompanyList from "../../component/CompanyList";
import DevList from "../../component/DevList";

const Developer = () => {
  const [filterOpen, setFilterOpen] = useState([false, false, false]);
  const [careerFilter, setCareerFilter] = useState("경력");
  const careerFilterList = [
    "1년 미만",
    "1년",
    "3년 이하",
    "5년 이하",
    "7년 이하",
    "10년 이하",
    "10년 이상",
  ];
  const stackFilterList = [
    "React JS",
    "Vue JS",
    "Next JS",
    "React Native",
    "Node JS",
    "Spring",
    "Svelte",
  ];
  const [stackFilter, setStackFilter] = useState("기술 스택");

  return (
    <div className="walter-container">
      <section className="title-container developer-title-container">
        <h1 className="title-h1">개발자 찾기</h1>
        <div className="developer-search-container">
          <input
            className="walter-input developer-search-input"
            placeholder="어떤 포지션을 찾으시나요?"
          />
          <div className="developer-search-btn">
            <img src="/img/search-ico.svg" />
            <span className="body-rgular-14-22">포지션검색</span>
          </div>
        </div>
      </section>
      <section className="body-container">
        <div className="developer-filter-container">
          <span className="body-rgular-18-28 filter-title">필터</span>
          <div className="developer-filter-wrap">
            <div>
              <div
                className="developer-filter cursor-pointer"
                onClick={() => {
                  let copyData = [...filterOpen];
                  copyData[0] = !copyData[0];
                  setFilterOpen(copyData);
                }}
              >
                <span className="body-rgular-16-25 filter-text">
                  {careerFilter}
                </span>
                <img src="/img/chevron-down.svg" />
              </div>
              {filterOpen[0] ? (
                <div className="developer-submenu">
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
            <div>
              <div
                className="developer-filter"
                onClick={() => {
                  let copyData = [...filterOpen];
                  copyData[2] = !copyData[2];
                  setFilterOpen(copyData);
                }}
              >
                <span className="body-rgular-16-25 filter-text">
                  {stackFilter}
                </span>
                <img src="/img/chevron-down.svg" />
              </div>
              {filterOpen[2] ? (
                <div className="developer-submenu">
                  {stackFilterList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="submenu-list"
                        onClick={() => {
                          setStackFilter(item);
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
        <DevList />
      </section>
    </div>
  );
};

export default Developer;
