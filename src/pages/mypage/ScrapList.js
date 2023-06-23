import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/ScrapList.css";
import CompanyList from "../../component/CompanyList";

const ScrapList = () => {
  return (
    <div className="scrap-list-container">
      <div className="scrap-list-number">
        <h3>스크랩한 스타트업 공고</h3>
        <span className="body-rgular-18-28">5개</span>
      </div>
      <CompanyList page={"MyPage"} />
    </div>
  );
};

export default ScrapList;
