import React, { useEffect, useState } from "react";
import "../../css/login/PasswordReset.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";

const PasswordReset = () => {
  const reg =
    /^(?!((?:[A-Z]+)|(?:[a-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;

  const [currentPwInfo, setCurrentPwInfo] = useState("1q2w3e4r");
  const [currentPwCheck, setCurrentPwCheck] = useState(false);
  const [newPwInfo, setNewPwInfo] = useState(null);
  const [matchPw, setMatchPw] = useState(false);

  const [alertMsg, setAlertMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //에러메세지 관리
  const [currentPwError, setCurrentPwError] = useState(false);
  const [newPwError, setNewPwError] = useState(false);
  const [newPwCheckError, setNewPwCheckError] = useState(false);

  const [findPasswordInfo, setFindPasswordInfo] = useState(null);

  const resetPasswordCheck = async () => {
    try {
      if (!reg.test(newPwInfo)) {
        setAlertMsg("올바른 비밀번호 형식이 아닙니다.");
        setIsOpen(true);
        return;
      }
      if (currentPwInfo === newPwInfo) {
        setAlertMsg(
          <span>
            현재 비밀번호와 같은 비밀번호는
            <br />
            사용할 수 없습니다
          </span>
        );
        setIsOpen(true);
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-wrap">
        <h1>비밀번호 재설정</h1>
        <span className="body-rgular-16-25 password-reset-msg">
          비밀번호는 8자 이상 16자 이하의 문자, 숫자, 특수기호중
          <br />
          2가지 이상을 조합하여 만들어야 합니다.
        </span>
        <div className="reset-password-input-container">
          <input
            className={`walter-input ${currentPwError ? "input-error" : null}`}
            type="password"
            required
            placeholder="현재 비밀번호를 입력해 주세요."
            onChange={(e) => {
              if (!e.target.value) {
                setCurrentPwCheck(false);
                return;
              }
              if (e.target.value !== currentPwInfo) {
                setCurrentPwError(true);
                return;
              }
              if (e.target.value === currentPwInfo) {
                setCurrentPwError(false);
                setCurrentPwCheck(true);
                return;
              }
            }}
            onFocus={() => setCurrentPwError(false)}
          />
          {currentPwError ? (
            <span className="input-err-msg">
              현재 비밀번호가 옳바르지 않습니다.
            </span>
          ) : null}
        </div>
        <div className="reset-password-input-container">
          <input
            className={`walter-input ${newPwError ? "input-error" : null}`}
            type="password"
            required
            placeholder="새 비밀번호를 입력해 주세요."
            onChange={(e) => {
              setNewPwInfo(e.target.value);
            }}
          />
          {newPwError ? (
            <span className="input-err-msg reset-password-err-msg">
              현재 비밀번호가 옳바르지 않습니다.
            </span>
          ) : null}
        </div>
        <div className="reset-password-input-container">
          <input
            className={`walter-input reset-password-input ${
              newPwCheckError ? "input-error" : null
            }`}
            type="password"
            required
            placeholder="새 비밀번호를 한 번 더 입력해 주세요."
            onChange={(e) => {
              if (newPwInfo !== e.target.value) {
                setNewPwCheckError(true);
                setMatchPw(false);
              }
              if (newPwInfo === e.target.value) {
                setNewPwCheckError(false);
                setMatchPw(true);
              }
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                setNewPwCheckError(false);
                return;
              }
            }}
          />
          {newPwCheckError ? (
            <span className="input-err-msg reset-password-err-msg">
              비밀번호가 일치하지 않습니다.
            </span>
          ) : null}
        </div>
        <button
          className={`walter-btn ${
            currentPwCheck && matchPw ? "walter-btn-active" : ""
          }`}
          onClick={resetPasswordCheck}
        >
          비밀번호 재설정하기
        </button>
      </div>
      {isOpen ? (
        <Popup
          msg={alertMsg}
          type={"alert"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </div>
  );
};

export default PasswordReset;
