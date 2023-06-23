import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const [subMenu, setSubMenu] = useState(false);

  return (
    <div className="header-container">
      <div className="header-wrap">
        <img
          className="walter-logo cursor-pointer"
          src="\img\logo.svg"
          onClick={() => navigate("/position")}
        />
        {pathname &&
        (pathname.includes("/login") ||
          pathname.includes("/find-") ||
          pathname.includes("/reset-") ||
          pathname.includes("/join")) ? (
          <div className="header-category-wrap">
            <span
              className="login-btn cursor-pointer"
              onClick={() => navigate("/login")}
            >
              로그인
            </span>
            <button
              className="join-btn cursor-pointer"
              onClick={() => navigate("/join")}
            >
              회원가입
            </button>
          </div>
        ) : (
          <div className="header-category-wrap developer-header">
            <div className="header-category-list">
              <Link className="header-category cursor-pointer" to={"/position"}>
                포지션 찾기
              </Link>
              <Link className="header-category cursor-pointer" to={"/suggest"}>
                채용 제안
              </Link>
              <Link className="header-category cursor-pointer" to={"/program"}>
                채용 프로그램
              </Link>
              <Link className="header-category cursor-pointer" to={"/contents"}>
                콘텐츠
              </Link>
            </div>
            {/* <div className="header-category-list company-header">
            <div className="header-category-list">
              <a className="header-category cursor-pointer">개발자 찾기</a>
              <a className="header-category cursor-pointer">채용 공고 등록</a>
              <a className="header-category cursor-pointer">채용 프로그램</a>
              <a className="header-category cursor-pointer">콘텐츠</a>
            </div>
          </div> */}
            <div className="member-category">
              <span
                className="nickname cursor-pointer"
                onClick={() => setSubMenu(!subMenu)}
              >
                홍길동님
              </span>
              <img
                className="cursor-pointer"
                src="\img\chevron-down.svg"
                onClick={() => setSubMenu(!subMenu)}
              />
              {subMenu ? (
                <div className="member-submenu-container">
                  <ul>
                    <li
                      className="member-submenu cursor-pointer"
                      onClick={() => {
                        navigate("/mypage");
                        setSubMenu(false);
                      }}
                    >
                      마이페이지
                    </li>
                    <li
                      className="member-submenu cursor-pointer logout-btn"
                      onClick={() => {
                        navigate("/login");
                        setSubMenu(false);
                      }}
                    >
                      로그아웃
                    </li>
                  </ul>
                </div>
              ) : null}

              <img
                className="profile-img cursor-pointer"
                src="\img\profile-img-empty.svg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
