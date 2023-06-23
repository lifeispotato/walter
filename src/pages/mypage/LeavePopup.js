import React, { useEffect, useState } from "react";
import "../../css/mypage/LeavePopup.css";

const LeavePopup = (props) => {
  return (
    <div className="leave-container">
      <div className="leave-wrap">
        <h1>회원탈퇴</h1>
        <span className="body-rgular-16-25">
          정말로 탈퇴하시나요?
          <br />
          탈퇴 사유를 선택해 주세요.
        </span>
        <div className="leave-reason-container">
          <div className="radio-container">
            <input type="radio" name="leave-reason" id="service" />
            <label className="body-rgular-16-25" htmlFor="service">
              서비스가 마음에 들지 않아요.
            </label>
          </div>
          <div className="radio-container">
            <input type="radio" name="leave-reason" id="error" />
            <label className="body-rgular-16-25" htmlFor="error">
              오류가 너무 많아요.
            </label>
          </div>
          <div className="radio-container">
            <input type="radio" name="leave-reason" id="difficulty" />
            <label className="body-rgular-16-25" htmlFor="difficulty">
              사용하기 어려워요.
            </label>
          </div>
          <div className="radio-container">
            <input type="radio" name="leave-reason" id="etc" />
            <label className="body-rgular-16-25" htmlFor="etc">
              기타
            </label>
          </div>
          <textarea
            className="walter-textarea"
            type="text"
            placeholder="탈퇴 사유를 입력해 주세요."
          />
        </div>
        <div className="leave-explanation">
          <ul>
            <li>
              탈퇴 시 회원님의 지원 서류를 포함하여 회원님의 계정에 저장된 모든
              정보가
              <br />
              영구적으로 삭제되며, 다시는 복구할 수 없습니다.
            </li>
            <li>
              기업에 대한 채용 수수료 정산과 부정 이용 방지를 위해, 기업에 대한
              지원 내역은
              <br />
              관련 법령에 의거하여 탈퇴 후 최장 3년간 저장됩니다.
            </li>
            <li>
              탈퇴 시점 이전까지의 기업에 대한 지원 내역은 기업 고객에게
              공개됩니다.
            </li>
          </ul>
        </div>
        <div className="leave-btn-container">
          <button className="leave-btn-cancel body-rgular-16-25">취소</button>
          <button className="leave-btn-check body-rgular-16-25">확인</button>
        </div>
        <img
          className="msg-modal-close cursor-pointer"
          src="/img/delete-btn.svg"
          onClick={() => {
            props.setLeavePopup(false);
          }}
        />
      </div>
    </div>
  );
};

export default LeavePopup;
