import React, { useEffect, useState } from "react";
import "../../css/suggest/EmploymentDocument.css";

const EmploymentDocument = (props) => {
  return (
    <div className="Employment-doc-container">
      <div className="Employment-doc-wrap">
        <h1>지원서</h1>
        <div className="doc-company-info">
          <span className="body-rgular-16-25">지원 기업</span>
          <span className="body-rgular-16-25">코드메이커</span>
          <span className="divider body-rgular-16-25">ㅣ</span>
          <span className="body-rgular-16-25">프론트엔드 경력</span>
        </div>
        <div className="doc-company-detail-container">
          <div className="doc-company-detail-wrap">
            <h2>기본사항</h2>
            <div className="doc-company-detail">
              <span className="doc-detail-title">이름</span>
              <span>홍길동</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">연락처</span>
              <span>010-9876-5432</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">이메일</span>
              <span>codemaker@codemaker.com</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">경력</span>
              <span>1년</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title form-title doc-detail-title-block">
                포지션
              </span>
              <div className="item-yellow">프론트엔드</div>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title form-title doc-detail-title-block">
                관심 기술 스택
              </span>
              <div className="item-yellow">Java</div>
              <div className="item-yellow">JavaScript</div>
              <div className="item-yellow">Hhml5</div>
            </div>
            <div className="doc-company-detail-divider"></div>
          </div>
          <div className="doc-company-detail-wrap">
            <h2>학력</h2>
            <div className="doc-company-detail">
              <span className="doc-detail-title">학교명</span>
              <span>건국대학교</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">학과명</span>
              <span>010-9876-5432</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">상태</span>
              <span>졸업</span>
            </div>
            <div className="doc-company-detail-divider"></div>
          </div>
          <div className="doc-company-detail-wrap">
            <h2>경력</h2>
            <div className="doc-company-detail">
              <span className="doc-detail-title">회사명</span>
              <span>길동브라더스</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">포지션</span>
              <span>프론트엔드</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">시작일</span>
              <span>2020-05-01</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">종료일</span>
              <span>2020-05-01</span>
            </div>
            <div className="doc-company-detail-divider"></div>
          </div>
          <div className="doc-company-detail-wrap">
            <h2>자기소개</h2>
            <div className="doc-company-detail">
              <span className="doc-detail-title">링크</span>
              <span>길동브라더스</span>
            </div>
            <div className="doc-company-detail">
              <span className="doc-detail-title">파일</span>
              <span>프론트엔드</span>
            </div>
            <div className="doc-company-detail-divider"></div>
          </div>
          <div className="doc-company-detail-wrap">
            <span className="doc-detail-title">자기소개</span>
            <p>
              이 날카로우나 얼마나 밝은 사랑의 천고에 이상은 교향악이다. 수
              이것은 인간의 얼마나 되는 품고 피다. 피가 든 할지라도 뿐이다.
              천고에 속에 눈이 위하여서. 있으며, 황금시대를 피가 말이다. 기관과
              이는 밥을 것이다. 방지하는 실현에 싶이 눈에 구할 같이 얼음과 보라.
              풍부하게 같지 없으면 우리의 인류의 맺어, 방황하여도, 이것이다.
              일월과 하여도 불어 청춘은 있는 끓는 같이 이 뜨고, 끓는다. 내려온
              그들은 거선의 피부가 몸이 이상은 청춘은 품었기 보배를 힘있다.
            </p>
          </div>
        </div>
        <img
          className="doc-modal-close cursor-pointer"
          src="/img/delete-btn.svg"
          onClick={() => {
            props.setDocModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default EmploymentDocument;
