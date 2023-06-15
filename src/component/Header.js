import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <div className="header-container">
      <div className="header-wrap">
        <img className="walter-logo cursor-pointer" src="\img\logo.svg" />
        {/* <div className="header-category-wrap">
          <span className="login-btn">로그인</span>
          <button className="join-btn">회원가입</button>
        </div> */}
        <div className="header-category-wrap developer-header">
          <div className="header-category-list">
            <a className="header-category cursor-pointer">포지션 찾기</a>
            <a className="header-category cursor-pointer">채용 제안</a>
            <a className="header-category cursor-pointer">채용 프로그램</a>
            <a className="header-category cursor-pointer">콘텐츠</a>
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
            <span className="nickname cursor-pointer">홍길동님</span>
            <img
              className="cursor-pointer"
              src="\img\chevron-down.svg"
              onClick={() => setSubMenu(!subMenu)}
            />
            {subMenu ? (
              <div className="member-submenu-container">
                <ul>
                  <li className="member-submenu cursor-pointer">마이페이지</li>
                  <li className="member-submenu cursor-pointer logout-btn">
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
      </div>
    </div>
  );
};

export default Header;
