import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/mypage/MyPage.css";
import "../../css/mypage/AskDetail.css";
import { useNavigate } from "react-router-dom";

const AskDetail = () => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [leavePopup, setLeavePopup] = useState(false);

  return (
    <div className="mypage-container">
      <div className="mypage-wrap">
        <h1>마이페이지</h1>
        <div className="mypage-content-container">
          <div className="mypage-content-box">
            <img src="/img/mypage-profile-basic.svg" />
            <div className="mypage-member-name">
              <span className="body-rgular-18-28">홍길동님</span>
              <span className="body-rgular-16-25">example12@example.com</span>
            </div>
            <div className="mypage-com-menu">
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup")}
              >
                계정 정보
              </a>
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup/information")}
              >
                스타트업 정보
              </a>
              <a
                className={`body-rgular-16-25`}
                onClick={() => navigate("/mypage-startup/devscrap")}
              >
                스크랩
              </a>
              <a
                className={`body-rgular-16-25 mypage-com-menu-active`}
                onClick={() => navigate("/mypage/ask")}
              >
                문의하기
              </a>
            </div>
            <span
              className="withdraw-btn cursor-pointer"
              onClick={() => setLeavePopup(true)}
            >
              회원탈퇴
            </span>
          </div>
          <div className="mypage-content-detail">
            <div className="ask-list-container">
              <div className="ask-list-number">
                <h3>문의하기</h3>
                <span className="body-rgular-18-28">7개</span>
              </div>
              <div className="ask-detail-container">
                <div className="ask-detail-title">
                  <span className="body-rgular-16-25">매칭 진행 확인</span>
                  <span className="body-rgular-14-22">2023.05.24</span>
                </div>
                <div className="ask-detail-content">
                  <p className="body-rgular-16-25">
                    풀밭에 희망의 영원히 봄바람이다. 이상 얼마나 이상, 설산에서
                    고동을 영원히 커다란 피어나는 아름다우냐? 심장의 보내는
                    위하여 몸이 않는 때문이다. 일월과 청춘의 꽃 힘있다.
                    천자만홍이 보내는 바로 봄바람이다. 만천하의 밝은 자신과
                    소금이라 살았으며, 트고, 인간의 그들을 때문이다. 반짝이는
                    거친 것은 눈에 뼈 공자는 풀이 쓸쓸하랴? 청춘의 그들의
                    발휘하기 투명하되 품에 속잎나고, 듣는다. 이상 온갖 예가 귀는
                    보라.그들은 열락의 있음으로써 사막이다. 무엇을 간에 이상
                    원대하고, 그것을 하는 피부가 것이다. 얼마나 붙잡아 무엇을
                    놀이 이 그들은 방지하는 사막이다. 속에 바이며, 사라지지
                    아름다우냐? 위하여서 놀이 커다란 봄바람을 때까지 별과 것은
                    그들은 황금시대다.
                  </p>
                </div>
              </div>
              <div className="ask-answer-container">
                <span className="body-rgular-16-25">답변 내용</span>
                <span className="body-rgular-14-22">
                  문의내용 확인중 입니다.
                </span>
              </div>
              <div className="ask-detail-btn-container">
                <button className="ask-btn body-rgular-16-25">삭제하기</button>
                <button
                  className="ask-btn body-rgular-16-25"
                  onClick={() => navigate("/mypage/ask")}
                >
                  목록으로
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskDetail;
