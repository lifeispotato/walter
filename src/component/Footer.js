import React, { useState } from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-logo-container">
          <img className="footer-logo cursor-pointer" src="/img/logo.svg" />
          <Link className="footer-menu" to={"/terms"}>
            이용약관
          </Link>
          <Link className="footer-menu" to={"/privacy-policy"}>
            개인정보처리방침
          </Link>
          <Link className="footer-menu" to={"/notice"}>
            공지사항
          </Link>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-company-info">
          <span>(주)월터</span>
          <span className="info-divider">ㅣ</span>
          <span>주소 서울특별시 강서구 양천로 424, 6층 609호</span>
          <br />
          <span>사업자등록번호 538-76-00500</span>
          <span className="info-divider">ㅣ</span>
          <span>대표자명 김용연</span>
          <br />
          <span>개인정보책임관리자 김용연</span>
          <br />
          <span>Email duszld604@gmail.com</span>
          <span className="info-divider">ㅣ</span>
          <span>TEL 010-4318-8684</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
