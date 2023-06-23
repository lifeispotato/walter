import React, { useEffect, useState } from "react";
import "../../css/program/ProgramDetail.css";
import "../../css/walter.css";

const ProgramDetail = () => {
  const [navbar, setNavbar] = useState(1);

  return (
    <div className="walter-container">
      <section
        className="title-container-310 program-detail-title-container"
        style={{ background: "url('/img/program-detail-default-img.png')" }}
      >
        <div className="item-blue">D-20</div>
        <h2 className="title-h1">2023년 스타트업 개발자 매칭 프로그램</h2>
      </section>
      <div className="program-detail-content-container">
        <h2>여기는 채용 프로그램 내용 부분</h2>
      </div>
      <div className="program-detail-pagination">
        <div className="program-article-move-container">
          <div className="program-article-move">
            <div className="program-detail-pagination-title">
              <span className="body-rgular-16-25">이전글</span>
              <img src="/img/chevron-up.svg" />
            </div>
            <span className="body-rgular-16-25">
              이전글 제목이 이곳에 들어갑니다.
            </span>
          </div>
          <div className="move-devider"></div>
          <div className="program-article-move">
            <div className="program-detail-pagination-title">
              <span className="body-rgular-16-25">이전글</span>
              <img src="/img/chevron-up.svg" />
            </div>
            <span className="body-rgular-16-25">
              이전글 제목이 이곳에 들어갑니다.
            </span>
          </div>
        </div>
      </div>
      <div className="go-program-list ">
        <div className="go-program-list-btn cursor-pointer">
          <span className="body-rgular-16-25">목록으로</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
