import React, { useEffect, useState } from "react";
import "../../css/suggest/MyDocument.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";
import { toast } from "react-toastify";

const MyDocumentCareer = () => {
  const [filterOpen, setFilterOpen] = useState([false, false]);
  const [careerFilter, setCareerFilter] = useState("경력");
  const [stackFilter, setStackFilter] = useState("기술 스택을 선택하세요.");
  const [confirmMsg, setConfirmMsg] = useState("");

  //팝업 state
  const [isOpen, setIsOpen] = useState(false);
  const [cancelCheck, setCancelCheck] = useState(false);
  const [saveCheck, setSaveCheck] = useState(false);

  const careerFilterList = [
    "1년 미만",
    "1년",
    "3년 이하",
    "5년 이하",
    "7년 이하",
    "10년 이하",
    "10년 이상",
  ];
  const position = [
    "프론트엔드",
    "백엔드",
    "IOS",
    "Android",
    "DevOps",
    "크로스플랫폼 앱",
    "인공지능 · 머신러닝",
    "데이터 엔지니어",
    "게임 클라이언트",
    "게임 서버",
    "풀스택",
    "VR앱 개발자",
    "네이티브 앱 개발자",
    "PM/PO",
    "마케터",
    "디자이너",
  ];
  const stackFilterList = [
    "React JS",
    "Vue JS",
    "Next JS",
    "React Native",
    "Node JS",
    "Spring",
    "Svelte",
  ];

  const cancelDocument = () => {
    setCancelCheck(false);
    setConfirmMsg(
      <span>
        수정을 취소하시나요?
        <br />
        취소된 내용은 복구가 불가합니다.
      </span>
    );
    setIsOpen(true);
  };

  useEffect(() => {
    if (!cancelCheck) {
      return;
    }
    if (cancelCheck) {
      cancelMyDocument();
    }
  }, [cancelCheck]);

  const cancelMyDocument = () => {
    //페이지 리랜더링 필요함
  };

  const saveDocument = () => {
    setSaveCheck(false);
    // 빈값 체크하는 거 넣어야 함
    setConfirmMsg(<span>수정된 내용을 저장하시나요?</span>);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!saveCheck) {
      return;
    }
    if (saveCheck) {
      saveMyDocument();
    }
  }, [saveCheck]);

  const saveMyDocument = async () => {
    try {
      toast("수정이 완료되었습니다.");
    } catch (error) {}
  };

  return (
    <div>
      <div className="my-document-info-container">
        <div className="my-document-info">
          <h1>지원 관리</h1>
          <span className="body-rgular-16-25">
            채용 공고에 지원 시 필요한 기본 내용을 작성해 주세요.
          </span>
          <div className="my-document-info-input">
            <span className="body-rgular-16-25 form-title">학교명</span>
            <input className="walter-input" type="text" value={"건국대학교"} />
            <span className="body-rgular-16-25 form-title">학교명</span>
            <input
              className="walter-input"
              type="text"
              value={"스마트운행체공학과"}
            />
            <span className="body-rgular-16-25 form-title-choice">
              컴퓨터 관련 전공 여부
            </span>
            <div className="checkbox-container">
              <input type="checkbox" id="major-checkbox" />
              <label
                className="walter-checkbox checkbox-major"
                htmlFor="major-checkbox"
              >
                예
              </label>
            </div>
            <div className="doc-radio-container">
              <span className=" body-rgular-16-25 form-title">상태</span>
              <div className="radio-container">
                <input type="radio" name="education-state" id="enrolled" />
                <label className="body-rgular-14-22" htmlFor="enrolled">
                  재학
                </label>
              </div>
              <div className="radio-container">
                <input
                  type="radio"
                  name="education-state"
                  id="leave-of-absence"
                />
                <label className="body-rgular-14-22" htmlFor="leave-of-absence">
                  휴학
                </label>
              </div>
              <div className="radio-container">
                <input type="radio" name="education-state" id="graduated" />
                <label className="body-rgular-14-22" htmlFor="graduated">
                  졸업
                </label>
              </div>
              <div className="radio-container">
                <input
                  type="radio"
                  name="education-state"
                  id="expected-graduation"
                />
                <label
                  className="body-rgular-14-22"
                  htmlFor="expected-graduation"
                >
                  졸업예정
                </label>
              </div>
              <div className="radio-container">
                <input type="radio" name="education-state" id="withdrawn" />
                <label className="body-rgular-14-22" htmlFor="withdrawn">
                  중퇴
                </label>
              </div>
            </div>
            <span className="body-rgular-16-25 form-title-choice">경력</span>
            <div className="doc-career-container">
              <span className="body-rgular-16-25 form-title">회사명</span>
              <input
                className="walter-input"
                type="text"
                value={"길동브라더스"}
              />
              <span className="body-rgular-16-25 form-title">포지션</span>
              <input
                className="walter-input"
                type="text"
                value={"프론트엔드"}
              />
              <div className="career-period">
                <div className="career-start-date-container">
                  <span className="form-title">시작일</span>
                  <div>
                    <input
                      className="career-start-date"
                      data-placeholder="YYYY-MM-DD"
                      type="date"
                    />
                  </div>
                </div>
                <img className="date-line" src="/img/date-line.svg" />
                <div className="career-end-date-container">
                  <span className="form-title">종료일</span>
                  <div>
                    <input
                      className="career-end-date"
                      data-placeholder="YYYY-MM-DD"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="checkbox-container-career">
                <input type="checkbox" id="major-checkbox" />
                <label
                  className="walter-checkbox checkbox-major"
                  htmlFor="major-checkbox"
                >
                  현재 재직중
                </label>
              </div>
            </div>
            <button className="career-add-btn">
              <span className="body-rgular-14-22">추가</span>
            </button>
          </div>
          <div className="my-document-btn-container">
            <button className="document-cancel-btn" onClick={cancelDocument}>
              취소하기
            </button>
            <button className="document-save-btn" onClick={saveDocument}>
              수정완료
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <Popup
          msg={confirmMsg}
          type={"confirm"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setCancelCheck={setCancelCheck}
          setSaveCheck={setSaveCheck}
        />
      ) : null}
    </div>
  );
};

export default MyDocumentCareer;
