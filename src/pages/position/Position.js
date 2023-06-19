import React, { useEffect, useState } from "react";
import "../../css/position/Position.css";
import "../../css/walter.css";
import CompanyList from "../../component/CompanyList";

const Position = () => {
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
  const locationFilterList = [
    "서울",
    "경기",
    "인천",
    "부산",
    "광주",
    "울산",
    "충북",
    "충남",
    "경남",
    "경북",
    "경북",
    "제주",
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
  const [locationFilter, setLocationFilter] = useState("위치");
  const [stackFilter, setStackFilter] = useState("기술 스택");

  return (
    <div className="walter-container">
      <section className="title-container position-title-container">
        <h1 className="title-h1">포지션 찾기</h1>
        <div className="position-search-container">
          <input
            className="walter-input position-search-input"
            placeholder="어떤 포지션을 찾으시나요?"
          />
          <div className="position-search-btn">
            <img src="/img/search-ico.svg" />
            <span className="body-rgular-14-22">포지션검색</span>
          </div>
        </div>
      </section>
      <section className="body-container">
        <div className="position-filter-container">
          <span className="body-rgular-18-28 filter-title">필터</span>
          <div className="position-filter-wrap">
            <div>
              <div
                className="position-filter cursor-pointer"
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
                <div className="position-submenu">
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
                className="position-filter"
                onClick={() => {
                  let copyData = [...filterOpen];
                  copyData[1] = !copyData[1];
                  setFilterOpen(copyData);
                }}
              >
                <span className="body-rgular-16-25 filter-text">
                  {locationFilter}
                </span>
                <img src="/img/chevron-down.svg" />
              </div>
              {filterOpen[1] ? (
                <div className="position-submenu">
                  {locationFilterList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="submenu-list"
                        onClick={() => {
                          setLocationFilter(item);
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
                className="position-filter"
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
                <div className="position-submenu">
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
        <CompanyList />
      </section>
    </div>
  );
};

export default Position;
