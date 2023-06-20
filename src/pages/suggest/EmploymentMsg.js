import React, { useEffect, useState } from "react";
import "../../css/suggest/EmploymentMsg.css";

const EmploymentMsg = (props) => {
  return (
    <div className="Employment-msg-container">
      <div className="Employment-msg-wrap">
        <h1>채용 메세지</h1>
        <div className="msg-company-info">
          <span className="body-rgular-16-25">제안기업</span>
          <span className="body-rgular-16-25">코드메이커</span>
          <span className="divider body-rgular-16-25">ㅣ</span>
          <span className="body-rgular-16-25">프론트엔드 경력</span>
        </div>
        <div className="msg-company-detail-container">
          <div className="msg-company-detail">
            <span className="msg-detail-title">담당자명</span>
            <span>홍길동</span>
          </div>
          <div className="msg-company-detail">
            <span className="msg-detail-title">연락처</span>
            <span>010-9876-5432</span>
          </div>
          <div className="msg-company-detail">
            <span className="msg-detail-title">이메일</span>
            <span>codemaker@codemaker.com</span>
          </div>
          <div className="msg-company-detail-divider"></div>
          <div className="msg-company-detail">
            <span className="msg-detail-title">파일</span>
            <span>[코드메이커]면접안내서.hwp</span>
          </div>
          <div className="msg-company-detail-divider"></div>
          <div className="msg-company-detail">
            <span className="msg-detail-title">채용 제안 메세지</span>
            <p>
              안녕하세요, 코드메이커의 채용담당자 홍길동입니다. 귀하의 지원서를
              확인하여 채용 제안드립니다. 첨부된 면접안내서를 확인 부탁드립니다.
              정확한 면접 일시와 장소는 개별적인 연락으로 전달드립니다.
              감사합니다.
            </p>
          </div>
        </div>
        <img
          className="msg-modal-close cursor-pointer"
          src="/img/delete-btn.svg"
          onClick={() => {
            props.setMsgModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default EmploymentMsg;
