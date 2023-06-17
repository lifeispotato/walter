import React, { useEffect, useState } from "react";
import "../../css/login/FindId.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";

const FindId = () => {
  let reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const [findIdInfo, setFindIdInfo] = useState({
    email: null,
    AuthenticationNumber: null,
  });

  const [loginErrorMsg, setLoginErrorMsg] = useState(false);
  const [authenticationErrorMsg, setAuthenticationErrorMsg] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const AuthenticationNumberSend = () => {
    try {
      if (!findIdInfo.email) {
        setLoginErrorMsg(true);
        return;
      }
      if (!reg.test(findIdInfo.email)) {
        alert("올바른 이메일 형식이 아닙니다.");
        return;
      }
    } catch (error) {}
  };

  const findIdCheck = async () => {
    try {
      if (!findIdInfo.AuthenticationNumber && !findIdInfo.email) {
        setLoginErrorMsg(true);
        setAuthenticationErrorMsg(true);
        return;
      }
      if (!findIdInfo.AuthenticationNumber) {
        setAuthenticationErrorMsg(true);
        return;
      }
      if (!findIdInfo.email) {
        setLoginErrorMsg(true);
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="find-id-container">
      <div className="find-id-wrap">
        <h1>아이디 찾기</h1>
        <span className="find-id-msg">
          가입한 이메일 주소를 입력해 주세요.
          <br />
          이메일로 인증번호가 발송됩니다.
        </span>
        <div className="find-id-input-container">
          <div className="AuthenticationNumber-container">
            <input
              className={`walter-input ${loginErrorMsg ? "input-error" : null}`}
              type="email"
              required
              placeholder="이메일을 입력하세요."
              onChange={(e) => {
                console.log(123);
                setFindIdInfo((findIdInfo) => ({
                  ...findIdInfo,
                  email: e.target.value,
                }));
                setLoginErrorMsg(false);
              }}
            />
            <button
              className="AuthenticationNumber-send-btn"
              disable
              onClick={AuthenticationNumberSend}
            >
              발송
            </button>
            {loginErrorMsg ? (
              <span className="input-err-msg">이메일을 입력해주세요.</span>
            ) : null}
          </div>
          <div className="AuthenticationNumber-container">
            <input
              className={`walter-input find-id-input ${
                authenticationErrorMsg ? "input-error" : null
              }`}
              type="number"
              required
              placeholder="인증번호 입력하세요."
              onChange={(e) => {
                console.log(123);
                setFindIdInfo((findIdInfo) => ({
                  ...findIdInfo,
                  AuthenticationNumber: e.target.value,
                }));
                setAuthenticationErrorMsg(false);
              }}
            />
            {authenticationErrorMsg ? (
              <span className="input-err-msg input-err-msg-authentication">
                인증번호를 입력해주세요.
              </span>
            ) : null}
          </div>
        </div>
        <button
          className={`walter-btn ${
            findIdInfo.email && findIdInfo.AuthenticationNumber
              ? "walter-btn-active"
              : null
          }`}
          onClick={findIdCheck}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default FindId;
