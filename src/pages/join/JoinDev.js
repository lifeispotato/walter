import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/join/JoinDev.css";
import TermsModal from "./TermsModal";

const JoinDev = () => {
  const navigate = useNavigate();
  const [idErrorMsg, setIdErrorMsg] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div className="join-container">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: "30%" }}></div>
      </div>
      <div className="join-wrap">
        <div className="join-title-container">
          <h1>회원가입</h1>
          <span className="body-rgular-16-25">
            아래의 정보를 모두 입력해 주세요.
          </span>
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">아이디</span>
          <div className="join-input-wrap">
            <input
              className={`walter-input ${idErrorMsg ? "input-error" : null}`}
              type="text"
              required
              placeholder="6자 이상 12자 이내 영문 숫자 가능"
            />
            <button className="id-duplication-btn" disable>
              확인
            </button>
            {idErrorMsg ? (
              <span className="input-err-msg">아이디를 입력해주세요.</span>
            ) : null}
          </div>
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">이름</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="text"
            required
            placeholder="ex) 홍길동"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">비밀번호</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="password"
            required
            placeholder="8자이상 16자 이내 문자/영문/특수기호 사용 가능"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">이메일</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="email"
            required
            placeholder="ex) example@example.com"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-consent-container">
          <div className="join-consent-wrap">
            <div className="join-consent">
              <input type="checkbox" id="major-checkbox" required />
              <label
                className="walter-checkbox body-rgular-14-22"
                htmlFor="major-checkbox"
              >
                개인정보 제 3자 제공 동의(필수)
              </label>
            </div>
            <a className="body-rgular-14-22">전체보기</a>
          </div>
          <div className="join-consent-wrap">
            <div className="join-consent">
              <input type="checkbox" id="major-checkbox" required />
              <label
                className="walter-checkbox body-rgular-14-22"
                htmlFor="major-checkbox"
              >
                개인정보처리방침 동의(필수)
              </label>
            </div>
            <a className="body-rgular-14-22">전체보기</a>
          </div>
          <div className="join-consent-wrap">
            <div className="join-consent">
              <input type="checkbox" id="major-checkbox" required />
              <label
                className="walter-checkbox body-rgular-14-22"
                htmlFor="major-checkbox"
              >
                이용약관 동의(필수)
              </label>
            </div>
            <a className="body-rgular-14-22" onClick={() => setTermsOpen(true)}>
              전체보기
            </a>
          </div>
        </div>
        <div className="join-next-step-btn">
          <button
            className={`walter-btn`}
            onClick={() => navigate("/join/developer/step1")}
          >
            다음
          </button>
        </div>
      </div>
      {termsOpen ? <TermsModal setTermsOpen={setTermsOpen} /> : ""}
    </div>
  );
};

export default JoinDev;
