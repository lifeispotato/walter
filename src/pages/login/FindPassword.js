import React, { useEffect, useState } from "react";
import "../../css/login/FindPassword.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";

const FindPassword = () => {
  let reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const [alertMsg, setAlertMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [findPasswordInfo, setFindPasswordInfo] = useState(null);
  const [loginErrorMsg, setLoginErrorMsg] = useState(false);

  const findPasswordCheck = async () => {
    try {
      if (!findPasswordInfo) {
        setLoginErrorMsg(true);
        return;
      }
      if (!reg.test(findPasswordInfo)) {
        setAlertMsg("올바른 이메일 형식이 아닙니다.");
        setIsOpen(true);
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="find-password-container">
      <div className="find-password-wrap">
        <h1>비밀번호 찾기</h1>
        <span className="find-password-msg">
          가입한 이메일 주소를 입력해 주세요.
          <br />
          이메일로 임시 비밀번호가 발송됩니다.
        </span>
        <div className="find-password-input-container">
          <input
            className={`walter-input find-password-input ${
              loginErrorMsg ? "input-error" : null
            }`}
            type="email"
            required
            placeholder="이메일을 입력하세요."
            onChange={(e) => {
              setFindPasswordInfo(e.target.value);
              setLoginErrorMsg(false);
            }}
          />
          {loginErrorMsg ? (
            <span className="input-err-msg find-password-err-msg">
              이메일을 입력해주세요.
            </span>
          ) : null}
        </div>
        <button
          className={`walter-btn ${
            findPasswordInfo ? "walter-btn-active" : null
          }`}
          onClick={findPasswordCheck}
        >
          이메일 전송하기
        </button>
      </div>
      {isOpen ? (
        <Popup
          msg={<span>{alertMsg}</span>}
          type={"alert"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </div>
  );
};

export default FindPassword;
