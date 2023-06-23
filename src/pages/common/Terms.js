import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/common/Terms.css";

const Terms = () => {
  return (
    <div className="terms-content-container">
      <div className="terms-content-wrap">
        <h1>이용약관</h1>
        <div className="terms-content">
          <div className="terms-content-detail">
            <span>제1조 목적</span>
            <p>
              본 이용약관은 “월터”(이하 "사이트")의 서비스의 이용조건과 운영에
              관한 제반 사항 규정을 목적으로 합니다.
            </p>
          </div>
          <div className="terms-content-detail">
            <span>제2조 용어의 정의</span>
            <p>
              본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
              <br />
              <br />
              ① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을
              한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는
              이용자를 말합니다.
              <br />
              ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는
              계약을 말합니다.
              <br />
              ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을
              위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
              <br />
              ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의
              권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
              <br />
              ⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를
              말합니다.
              <br />
              ⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.
              <br />
            </p>
          </div>
          <div className="terms-content-detail">
            <span>제3조 약관 외 준칙</span>
            <p>
              운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본
              약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
