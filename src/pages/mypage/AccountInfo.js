import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/AccountInfo.css";

const AccountInfo = () => {
  return (
    <div className="account-info-container">
      <div className="account-info-img">
        <img src="/img/profile-img-empty-big.svg" />
        <img className="profile-edit-btn" src="/img/profile-edit-btn.svg" />
      </div>
      <div className="account-info-name">
        <span className="body-rgular-18-28">홍길동님</span>
      </div>
      <div className="account-info-input-container">
        <div className="account-info-input">
          <span className="body-rgular-16-25 form-title">아이디</span>
          <input
            className="walter-input"
            type="text"
            disabled
            value="exam123123"
          />
        </div>
        <div className="account-info-input">
          <span className="body-rgular-16-25 form-title">이름</span>
          <input className="walter-input" type="text" value="홍길동" />
        </div>
        <div className="account-info-input">
          <span className="body-rgular-16-25 form-title">비밀번호</span>
          <input className="walter-input" type="password" value="" />
        </div>
        <div className="account-info-input">
          <span className="body-rgular-16-25 form-title">이메일</span>
          <input className="walter-input" type="email" value="홍길동" />
        </div>
        <div className="account-edit-btn">
          <button className="account-edit-btn-cancel">
            <span className="body-rgular-16-25">취소하기</span>
          </button>
          <button className="account-edit-btn-complete">
            <span className="body-rgular-16-25">수정완료</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
