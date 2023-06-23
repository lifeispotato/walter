import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/contents/ContentsDetail.css";

const ContentsDetail = () => {
  const [navbar, setNavbar] = useState(1);

  return (
    <div className="walter-container">
      <section
        className="title-container-310 contents-detail-title-container"
        style={{ background: "url('/img/contents-detail-default-img.png')" }}
      >
        <h2 className="title-h1">이직하기 좋은 타이밍은 언제일까?</h2>
        <span className="body-rgular-16-25">2023.06.10</span>
      </section>
      <div className="contents-detail-content-container">
        <h2>여기는 채용 프로그램 내용 부분</h2>
      </div>
      <div className="contents-detail-pagination">
        <div className="contents-article-move-container">
          <div className="contents-article-move">
            <div className="contents-detail-pagination-title">
              <span className="body-rgular-16-25">이전글</span>
              <img src="/img/chevron-up.svg" />
            </div>
            <span className="body-rgular-16-25">
              이전글 제목이 이곳에 들어갑니다.
            </span>
          </div>
          <div className="move-devider"></div>
          <div className="contents-article-move">
            <div className="contents-detail-pagination-title">
              <span className="body-rgular-16-25">이전글</span>
              <img src="/img/chevron-up.svg" />
            </div>
            <span className="body-rgular-16-25">
              이전글 제목이 이곳에 들어갑니다.
            </span>
          </div>
        </div>
      </div>
      <div className="go-contents-list ">
        <div className="go-contents-list-btn cursor-pointer">
          <span className="body-rgular-16-25">목록으로</span>
        </div>
      </div>
    </div>
  );
};

export default ContentsDetail;
