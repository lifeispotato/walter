import React, { useEffect, useState } from "react";
import "../../css/contents/Contents.css";
import "../../css/walter.css";

const Contents = () => {
  const [navbar, setNavbar] = useState(1);
  const [totalCount, setTotalCount] = useState(25);

  return (
    <div className="walter-container">
      <section className="title-container-310 contents-title-container">
        <h1 className="title-h1">콘텐츠</h1>
      </section>
      <div className="contents-list-container">
        <div className="list-count-container">
          <span className="body-rgular-16-25">전체 게시글</span>
          <span className="divider">ㅣ</span>
          <span className="body-rgular-16-25">{totalCount}개</span>
        </div>
        <div className="contents-container">
          <div className="contents-wrap">
            <div className="contents-thumbnail">
              <img src="/img/program-basic-img.png" />
            </div>
            <div className="contents-info">
              <div className="contents-info-title ellipsis2">
                <h3>
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                </h3>
              </div>
              <div>
                <span className="contents-info-summary body-rgular-16-25 ellipsis2">
                  선착순 100명의 개발자를 위한 성공적인 이직 프로그램으로 각
                  포지션과 경력에 맞춘 매칭을 진행합니다. 선착순 100명의
                  개발자를 위한 성공적인 이직 프로그램으로 각 포지션과 경력에
                  맞춘 매칭을 진행합니다.
                </span>
              </div>

              <span className="body-rgular-16-25 contents-date">
                2023.06.10
              </span>
            </div>
          </div>
          <div className="contents-wrap">
            <div className="contents-thumbnail">
              <img src="/img/program-basic-img.png" />
            </div>
            <div className="contents-info">
              <div className="contents-info-title ellipsis2">
                <h3>
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                </h3>
              </div>
              <div>
                <span className="contents-info-summary body-rgular-16-25 ellipsis2">
                  선착순 100명의 개발자를 위한 성공적인 이직 프로그램으로 각
                  포지션과 경력에 맞춘 매칭을 진행합니다. 선착순 100명의
                  개발자를 위한 성공적인 이직 프로그램으로 각 포지션과 경력에
                  맞춘 매칭을 진행합니다.
                </span>
              </div>

              <span className="body-rgular-16-25 contents-date">
                2023.06.10
              </span>
            </div>
          </div>
          <div className="contents-wrap">
            <div className="contents-thumbnail">
              <img src="/img/program-basic-img.png" />
            </div>
            <div className="contents-info">
              <div className="contents-info-title ellipsis2">
                <h3>
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                </h3>
              </div>
              <div>
                <span className="contents-info-summary body-rgular-16-25 ellipsis2">
                  선착순 100명의 개발자를 위한 성공적인 이직 프로그램으로 각
                  포지션과 경력에 맞춘 매칭을 진행합니다. 선착순 100명의
                  개발자를 위한 성공적인 이직 프로그램으로 각 포지션과 경력에
                  맞춘 매칭을 진행합니다.
                </span>
              </div>

              <span className="body-rgular-16-25 contents-date">
                2023.06.10
              </span>
            </div>
          </div>
          <div className="contents-wrap">
            <div className="contents-thumbnail">
              <img src="/img/program-basic-img.png" />
            </div>
            <div className="contents-info">
              <div className="contents-info-title ellipsis2">
                <h3>
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                  이직하기 좋은 타이밍은 언제일까? 좋은 타이밍은 언제일까?
                </h3>
              </div>
              <div>
                <span className="contents-info-summary body-rgular-16-25 ellipsis2">
                  선착순 100명의 개발자를 위한 성공적인 이직 프로그램으로 각
                  포지션과 경력에 맞춘 매칭을 진행합니다. 선착순 100명의
                  개발자를 위한 성공적인 이직 프로그램으로 각 포지션과 경력에
                  맞춘 매칭을 진행합니다.
                </span>
              </div>

              <span className="body-rgular-16-25 contents-date">
                2023.06.10
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
