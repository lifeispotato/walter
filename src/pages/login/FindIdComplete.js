import React, { useEffect, useState } from "react";
import "../../css/login/FindIdComplete.css";
import "../../css/walter.css";

const FindIdComplete = () => {
  const [IdInfo, setIdInfo] = useState(null);

  return (
    <div className="find-id-container">
      <div className="find-id-wrap">
        <h1>아이디 찾기</h1>
        <span className="body-rgular-16-25 find-complete-msg">
          회원님의 아이디는 아래와 같습니다.
        </span>
        <div className="id-container">
          <span className="body-rgular-16-25">example1234</span>
        </div>

        <button className="walter-btn walter-btn-active">로그인 하기</button>
      </div>
    </div>
  );
};

export default FindIdComplete;
