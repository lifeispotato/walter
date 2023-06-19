import React, { useEffect, useState } from "react";
import "../../css/login/ResetPasswordComplete.css";
import "../../css/walter.css";

const ResetPasswordComplete = () => {
  const [IdInfo, setIdInfo] = useState(null);

  return (
    <div className="reset-complete-container">
      <div className="find-id-wrap">
        <h1>비밀번호 재설정 완료</h1>
        <span className="body-rgular-16-25 find-complete-msg">
          회원님의 비밀번호가 정상적으로 변경되었습니다.
        </span>

        <button className="walter-btn walter-btn-active">로그인 하기</button>
      </div>
    </div>
  );
};

export default ResetPasswordComplete;
