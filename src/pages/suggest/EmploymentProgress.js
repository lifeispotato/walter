import React, { useEffect, useState } from "react";
import "../../css/suggest/EmploymentProgress.css";
import "../../css/walter.css";
import ApplyList from "../../component/ApplyList";

const EmploymentProgress = () => {
  const [filterOpen, setFilterOpen] = useState([false, false, false]);
  const [stateFilter, setStateFilter] = useState("진행상태");
  const stateFilterList = ["지원중", "면접진행"];

  return (
    <div className="walter-container">
      <div className="progress-filter-container">
        <span className="body-rgular-18-28 filter-title">필터</span>
        <div className="progress-filter-wrap">
          <div>
            <div
              className="progress-filter cursor-pointer"
              onClick={() => {
                let copyData = [...filterOpen];
                copyData[0] = !copyData[0];
                setFilterOpen(copyData);
              }}
            >
              <span className="body-rgular-16-25 filter-text">
                {stateFilter}
              </span>
              <img src="/img/chevron-down.svg" />
            </div>
            {filterOpen[0] ? (
              <div className="progress-submenu">
                {stateFilterList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="submenu-list"
                      onClick={() => {
                        setStateFilter(item);
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
            <span className="body-rgular-14-22 filter-reset-text">초기화</span>
          </div>
        </div>
      </div>
      <ApplyList />
    </div>
  );
};

export default EmploymentProgress;
