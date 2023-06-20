import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import "../../css/company/Company.css";
import "../../css/walter.css";

const Company = () => {
  const [navbar, setNavbar] = useState(1);
  return (
    <div className="walter-container">
      <section className="company-header-container">
        <div className="company-header">
          <img
            className="company-detail-profile-img"
            src="/img/company-img.png"
          />
        </div>
      </section>
      <section className="company-body-container">
        <div className="company-content-container">
          <div className="company-summary-container">
            <div className="company-summary-title">
              <h2>코드메이커</h2>
              <div className="company-summary-location">
                <img src="/img/gps-ico.svg" />
                <span className="body-rgular-16-25">서울</span>
                <img src="/img/people-ico.svg" />
                <span className="body-rgular-16-25">8명</span>
              </div>
            </div>
            <span className="body-rgular-16-25 company-summary-introduction">
              코드메이커는 미래를 위한 플랫폼을 개발합니다. 코드메이커는 미래를
              위한 플랫폼을 개발합니다. 코드메이커는 미래를 위한 플랫폼을
              개발합니다.
            </span>
            <div className="company-summary-scale">
              <div>
                <div className="company-summary-scale-wrap">
                  <span className="company-summary-scale-content body-rgular-18-28">
                    Seed
                  </span>
                  <span className="company-summary-scale-title body-rgular-18-28">
                    투자 단계
                  </span>
                </div>
                <img
                  className="company-summary-divider"
                  src="/img/company-summary-divider.svg"
                />
                <div className="company-summary-scale-wrap">
                  <span className="company-summary-scale-content body-rgular-18-28">
                    5억
                  </span>
                  <span className="company-summary-scale-title body-rgular-18-28">
                    누적 투자 유치액
                  </span>
                </div>
                <img
                  className="company-summary-divider"
                  src="/img/company-summary-divider.svg"
                />
                <div className="company-summary-scale-wrap">
                  <span className="company-summary-scale-content body-rgular-18-28">
                    8명
                  </span>
                  <span className="company-summary-scale-title body-rgular-18-28">
                    구성원 수
                  </span>
                </div>
                <img
                  className="company-summary-divider"
                  src="/img/company-summary-divider.svg"
                />
                <div className="company-summary-scale-wrap">
                  <span className="company-summary-scale-content body-rgular-18-28">
                    2명
                  </span>
                  <span className="company-summary-scale-title body-rgular-18-28">
                    개발자 수
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="company-detail-container">
            <div className="company-detail-navbar">
              <Link
                onClick={() => setNavbar(1)}
                className={navbar === 1 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 1 ? "navbar-active" : ""
                  }`}
                >
                  스타트업 소개
                </span>
              </Link>
              <Link
                onClick={() => setNavbar(2)}
                className={navbar === 2 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 2 ? "navbar-active" : ""
                  }`}
                >
                  투자현황
                </span>
              </Link>
              <Link
                onClick={() => setNavbar(3)}
                className={navbar === 3 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 3 ? "navbar-active" : ""
                  }`}
                >
                  근무환경
                </span>
              </Link>
              <Link
                onClick={() => setNavbar(4)}
                className={navbar === 4 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 4 ? "navbar-active" : ""
                  }`}
                >
                  팀 소개
                </span>
              </Link>
              <Link
                onClick={() => setNavbar(5)}
                className={navbar === 5 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 5 ? "navbar-active" : ""
                  }`}
                >
                  근무 위치
                </span>
              </Link>
              <Link
                onClick={() => setNavbar(6)}
                className={navbar === 6 ? "navbar-container-active" : ""}
              >
                <span
                  className={`body-rgular-18-28 ${
                    navbar === 6 ? "navbar-active" : ""
                  }`}
                >
                  채용설명회
                </span>
              </Link>
            </div>
            <div className="company-detail-startup">
              <span className="company-detail-title">스타트업 소개</span>
              <p className="company-detail-content body-rgular-16-25">
                얼음이 실현에 과실이 이상을 가치를 사랑의 청춘이 사라지지
                힘있다. 거선의 못할 그들의 현저하게 교향악이다. 미묘한 두손을 곧
                있는 운다. 살았으며, 생명을 같지 하였으며, 그들에게 교향악이다.
                없으면, 안고, 수 쓸쓸하랴? 살 그들에게 가슴에 옷을 끓는 역사를
                풍부하게 봄날의 따뜻한 끓는다. 그들을 인생을 내려온 같은
                설산에서 사막이다. 생명을 눈에 용기가 인간의 얼음에 풀이
                쓸쓸하랴? 인생에 불러 귀는 공자는 그들은 인생을 앞이
                이것이다.눈이 하였으며, 못할 철환하였는가? 위하여서, 피부가 있을
                부패뿐이다. 미묘한 옷을 노래하며 고동을 이상의 봄바람이다.
                황금시대를 찾아 품으며, 따뜻한 같이, 무한한 약동하다. 때에, 곳이
                보이는 심장은 옷을 듣는다.{" "}
              </p>
              <iframe
                width="585px"
                height="299px"
                src="https://www.youtube.com/embed/cZ9dpuJzHjU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="company-detail-invest">
              <span className="company-detail-title">투자 현황</span>
              <p className="company-detail-content body-rgular-16-25">
                얼음이 실현에 과실이 이상을 가치를 사랑의 청춘이 사라지지
                힘있다. 거선의 못할 그들의 현저하게 교향악이다. 미묘한 두손을 곧
                있는 운다. 살았으며, 생명을 같지 하였으며, 그들에게 교향악이다.
                없으면, 안고, 수 쓸쓸하랴? 살 그들에게 가슴에 옷을 끓는 역사를
                풍부하게 봄날의 따뜻한 끓는다. 그들을 인생을 내려온 같은
                설산에서 사막이다. 생명을 눈에 용기가 인간의 얼음에 풀이
                쓸쓸하랴? 인생에 불러 귀는 공자는 그들은 인생을 앞이
                이것이다.눈이 하였으며, 못할 철환하였는가? 위하여서, 피부가 있을
                부패뿐이다. 미묘한 옷을 노래하며 고동을 이상의 봄바람이다.
                황금시대를 찾아 품으며, 따뜻한 같이, 무한한 약동하다. 때에, 곳이
                보이는 심장은 옷을 듣는다.{" "}
              </p>
            </div>
            <div className="company-detail-environment">
              <span className="company-detail-title">근무환경</span>
              <span className="company-detail-environment-title">근무환경</span>
              <ul>
                <li>
                  기본적으로는 자율 출퇴근 및 자율 재택 정책을 따르고 있습니다.
                </li>
                <li>
                  다만, 같이 일하는 동료를 배려하기 위해 일주일간의 근무
                  스케줄을 공용 캘린더에 미리 넣어두고 있습니다
                </li>
              </ul>
              <span className="company-detail-environment-title">복리후생</span>
              <ul>
                <li>
                  보험
                  <span className="divider">ㅣ</span>
                  국민연금, 고용보험
                </li>
                <li>
                  보험
                  <span className="divider">ㅣ</span>
                  국민연금, 고용보험
                </li>
              </ul>
            </div>
            <div className="company-detail-team">
              <span className="company-detail-title">팀 소개</span>
              <p className="company-detail-content body-rgular-16-25">
                얼음이 실현에 과실이 이상을 가치를 사랑의 청춘이 사라지지
                힘있다. 거선의 못할 그들의 현저하게 교향악이다. 미묘한 두손을 곧
                있는 운다. 살았으며, 생명을 같지 하였으며, 그들에게 교향악이다.
                없으면, 안고, 수 쓸쓸하랴? 살 그들에게 가슴에 옷을 끓는 역사를
                풍부하게 봄날의 따뜻한 끓는다. 그들을 인생을 내려온 같은
                설산에서 사막이다. 생명을 눈에 용기가 인간의 얼음에 풀이
                쓸쓸하랴? 인생에 불러 귀는 공자는 그들은 인생을 앞이
                이것이다.눈이 하였으며, 못할 철환하였는가? 위하여서, 피부가 있을
                부패뿐이다. 미묘한 옷을 노래하며 고동을 이상의 봄바람이다.
                황금시대를 찾아 품으며, 따뜻한 같이, 무한한 약동하다. 때에, 곳이
                보이는 심장은 옷을 듣는다.{" "}
              </p>
            </div>
            <div className="company-detail-location" id="location">
              <span className="company-detail-title">근무 위치</span>
              <p className="company-detail-content body-rgular-16-25">
                서울특별시 강서구 아무동 55길 55-17 3층
              </p>
            </div>
            <div className="company-detail-presentation">
              <span className="company-detail-title company-detail-title-presentation">
                채용설명회
              </span>
              <div className="company-detail-presentation-info">
                <img src="/img/no-contents-ico.svg" />
                <span className="no-presentation">
                  아직 채용설명회가 없습니다!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="company-box-container">
          <div className="company-position-box">
            <div className="box-employment-position">
              <div>
                <span className="body-rgular-18-28">채용 포지션</span>
                <span className="divider">ㅣ</span>
                <span className="body-rgular-18-28">프론트엔드</span>
              </div>
              <span className="body-rgular-16-25">경력</span>
            </div>
            <div className="box-employment-date">
              <span className="body-rgular-16-25">2023.05.25</span>
            </div>
            <div className="box-employment-stack">
              <div>
                <span className="body-rgular-14-22">Next JS</span>
              </div>
            </div>
            <div className="company-box-scrap">
              <img src="/img/scrap-empty-ico.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
