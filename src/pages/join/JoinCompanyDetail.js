import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/join/JoinCompanyDetail.css";
import TermsModal from "./TermsModal";

const JoinCompanyDetail = () => {
  const navigate = useNavigate();
  const [idErrorMsg, setIdErrorMsg] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState([false, false]);
  const [loactionFilter, setLoactionFilter] = useState("경력");
  const loactionFilterList = [
    "서울",
    "세종",
    "강원",
    "인천",
    "경기",
    "충북",
    "충남",
    "경북",
    "대전",
    "대구",
    "전북",
    "경남",
    "울산",
    "광주",
    "부산",
    "전남",
    "제주",
  ];

  return (
    <div className="join-container">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: "90%" }}></div>
      </div>
      <div className="join-wrap">
        <div className="join-conpany-title-container">
          <h1>스타트업 회원가입 신청</h1>
          <span className="body-rgular-16-25">
            스타트업은 아래의 조건에 부합해야 가입이 완료됩니다.
          </span>
          <span className="body-rgular-16-25">
            · 개발중인 서비스가 존재하는 스타트업
            <br />· Seed~Series A 단계의 투자 사실이 확인된 스타트업
            <br />· 실력 있는 개발자에게 급여를 약속할 수 있는 스타트업
          </span>
        </div>
        <div className="join-input-container"></div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">투자 단계</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="text"
            required
            placeholder="ex) Seed"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">누적 투자 금액</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="text"
            required
            placeholder="ex) 5억"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">
            투자 정보(투자사, 투자 시기)
          </span>
          <textarea
            className={`walter-textarea join-company-textarea ${
              idErrorMsg ? "input-error" : null
            }`}
            type="text"
            required
            placeholder="투자사와 투자 시기에 대한 정보를 입력해 주세요."
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">직원 수</span>
          <input
            className={`walter-input ${idErrorMsg ? "input-error" : null}`}
            type="text"
            required
            placeholder="ex) 10명"
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">지역</span>
          <div className="company-filter-container">
            <div
              className="join-company-filter cursor-pointer"
              onClick={() => {
                let copyData = [...filterOpen];
                copyData[0] = !copyData[0];
                setFilterOpen(copyData);
              }}
            >
              <span
                className={`body-rgular-16-25 ${
                  loactionFilter === "경력"
                    ? "filter-text-document"
                    : "filter-text-document-active"
                }`}
              >
                {loactionFilter}
              </span>
              <img src="/img/chevron-down.svg" />
            </div>
            {filterOpen[0] ? (
              <div className="join-company-submenu">
                {loactionFilterList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="submenu-list"
                      onClick={() => {
                        setLoactionFilter(item);
                      }}
                    >
                      <span className="body-rgular-16-25 cursor-pointer">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">기업/서비스 소개</span>
          <span className="body-rgular-16-25">서비스 소개 링크</span>
          <textarea
            className={`walter-textarea join-company-textarea ${
              idErrorMsg ? "input-error" : null
            }`}
            type="text"
            required
            placeholder="대표 소개 링크를 입력해 주세요."
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25">채용 페이지 링크</span>
          <textarea
            className={`walter-textarea join-company-textarea ${
              idErrorMsg ? "input-error" : null
            }`}
            type="text"
            required
            placeholder="채용 페이지 링크를 입력해 주세요."
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25">그 외 참고링크 (선택)</span>
          <textarea
            className={`walter-textarea join-company-textarea ${
              idErrorMsg ? "input-error" : null
            }`}
            type="text"
            required
            placeholder="SNS, 보도기사 등의 링크가 있다면 첨부해 주세요."
          />
          {idErrorMsg ? (
            <span className="input-err-msg">아이디를 입력해주세요.</span>
          ) : null}
        </div>
        <div className="join-input-container">
          <span className="body-rgular-16-25 form-title">사업자등록증</span>
          <input className="intro-upload-input" type="file" id="intro-file" />
          <label className="intro-upload-label" htmlFor="intro-file">
            <img src="/img/file-upload.svg" />
            <span className="body-rgular-16-25">파일 업로드</span>
          </label>
        </div>
        <div className="join-next-step-btn">
          <button
            className={`walter-btn`}
            onClick={() => navigate("/join/startup/step2")}
          >
            회원가입 완료하기
          </button>
        </div>
      </div>
      {termsOpen ? <TermsModal setTermsOpen={setTermsOpen} /> : ""}
    </div>
  );
};

export default JoinCompanyDetail;
