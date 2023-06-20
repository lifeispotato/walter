import React, { useEffect, useState } from "react";
import "../../css/suggest/MyDocument.css";
import "../../css/walter.css";
import MyDocumentBasic from "./MyDocumentBasic";
import MyDocumentCareer from "./MyDocumentCareer";

const MyDocument = () => {
  const [boxList, setBoxList] = useState(1);

  return (
    <div className="my-document-container">
      <div className="my-document-box">
        <span className="my-document-box-title">내 지원서</span>
        <div className="my-document-divider"></div>
        <a
          className={`my-document-box-list body-rgular-16-25 ${
            boxList === 1 ? "box-list-active" : ""
          }`}
          onClick={() => {
            setBoxList(1);
          }}
        >
          기본 정보 관리
        </a>
        <a
          className={`my-document-box-list body-rgular-16-25 ${
            boxList === 2 ? "box-list-active" : ""
          }`}
          onClick={() => {
            setBoxList(2);
          }}
        >
          경력 관리
        </a>
      </div>
      {boxList === 1 ? <MyDocumentBasic /> : <MyDocumentCareer />}
    </div>
  );
};

export default MyDocument;
