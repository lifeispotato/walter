import React, { useEffect, useState } from "react";
import "../../css/login/Login.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: null,
    password: null,
  });

  const [isOpen, setIsOpen] = useState(false);

  const reg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const login = async () => {
    try {
      if (!loginInfo.id) {
        alert("아이디를 입력해주세요.");
        return;
      }
      if (!loginInfo.password) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (!reg.test(loginInfo.password)) {
        setIsOpen(true);
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <div className="login-wrap">
        <h1>로그인</h1>
        <div className="login-input-container">
          <input
            className="walter-input"
            type="text"
            required
            placeholder="아이디를 입력하세요."
            onChange={(e) => {
              console.log(123);
              setLoginInfo((loginInfo) => ({
                ...loginInfo,
                id: e.target.value,
              }));
            }}
          />
          <input
            className="walter-input"
            type="password"
            required
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => {
              console.log(123);
              setLoginInfo((loginInfo) => ({
                ...loginInfo,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <div className="find-id-pwd">
          <span className="cursor-pointer">아이디찾기</span>
          <span className="divider">ㅣ</span>
          <span className="cursor-pointer">비밀번호찾기</span>
        </div>
        <button
          className={`walter-btn ${
            loginInfo.id && loginInfo.password ? "walter-btn-active" : null
          }`}
          onClick={login}
        >
          로그인
        </button>
        <div className="go-join cursor-pointer">
          <span>아직 회원이 아닌가요?</span>
          <u>회원가입하기</u>
        </div>
      </div>

      {/* 1이면 기업계정
      2면 개발자계정 */}
      {isOpen ? (
        <Popup
          memberType={1}
          type={"confirm"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </div>
  );
};

export default Login;
