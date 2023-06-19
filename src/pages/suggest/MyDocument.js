import React, { useEffect, useState } from "react";
import "../../css/suggest/MyDocument.css";
import "../../css/walter.css";
import Popup from "../../component/Popup";
import { toast } from "react-toastify";

const MyDocument = () => {
  const [boxList, setBoxList] = useState(1);
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
    <div className="my-document-container">
      <div className="my-document-box">
        <span className="my-document-box-title">내 지원서</span>
        <div className="my-document-divider"></div>
        <a
          className={`my-document-box-list body-rgular-16-25 ${
            boxList === 1 ? "box-list-active" : ""
          }`}
          onClick={() => {
            setBoxList(1);
          }}
        >
          기본 정보 관리
        </a>
        <a
          className={`my-document-box-list body-rgular-16-25 ${
            boxList === 2 ? "box-list-active" : ""
          }`}
          onClick={() => {
            setBoxList(2);
          }}
        >
          경력 관리
        </a>
      </div>
      <div className="my-document-info-container">
        <div className="my-document-info">
          <h1>지원서 관리</h1>
          <span className="body-rgular-16-25">
            채용 공고에 지원 시 필요한 기본 내용을 작성해 주세요.
          </span>
          <div className="my-document-info-input">
            <span className="body-rgular-16-25 form-title">이름</span>
            <input
              className="walter-input"
              type="text"
              value={"홍길동"}
              disabled
            />
            <span className="body-rgular-16-25 form-title">이메일</span>
            <input
              className="walter-input"
              type="email"
              value={"adsr@afdsa.com"}
              disabled
            />
            <span className="body-rgular-16-25 form-title">연락처</span>
            <input
              className="walter-input"
              type="tel"
              value={"010-1234-1234"}
            />
            <span className="body-rgular-16-25 form-title">경력</span>
            <div
              className="document-filter cursor-pointer"
              onClick={() => {
                let copyData = [...filterOpen];
                copyData[0] = !copyData[0];
                setFilterOpen(copyData);
              }}
            >
              <span
                className={`body-rgular-16-25 ${
                  careerFilter === "경력"
                    ? "filter-text-document"
                    : "filter-text-document-active"
                }`}
              >
                {careerFilter}
              </span>
              <img src="/img/chevron-down.svg" />
            </div>
            {filterOpen[0] ? (
              <div className="document-submenu">
                {careerFilterList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="submenu-list"
                      onClick={() => {
                        setCareerFilter(item);
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
            <span className="body-rgular-16-25 form-title form-title-position">
              포지션
            </span>
            <div className="position-select-list">
              {position.map((item, index) => {
                return (
                  <div className={`cursor-pointer position-select-item`}>
                    <span className="body-rgular-14-22">{item}</span>
                  </div>
                );
              })}
            </div>
            <span className="body-rgular-16-25 form-title">관심 기술 스택</span>
            <div
              className="document-filter document-filter-stack cursor-pointer"
              onClick={() => {
                let copyData = [...filterOpen];
                copyData[1] = !copyData[1];
                setFilterOpen(copyData);
              }}
            >
              <span
                className={`body-rgular-16-25 ${
                  stackFilter === "기술 스택을 선택하세요."
                    ? "filter-text-document"
                    : "filter-text-document-active"
                }`}
              >
                {stackFilter}
              </span>
              <img src="/img/chevron-down.svg" />
            </div>
            {filterOpen[1] ? (
              <div className="document-submenu document-submenu-stack">
                {stackFilterList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="submenu-list"
                      onClick={() => {
                        setStackFilter(item);
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
          <div className="my-document-btn-container">
            <button
              className="document-cancel-btn"
              onClick={cancelDocument}
              // onClick={() => {
              //   setConfirmMsg(
              //     <span>
              //       수정을 취소하시나요?
              //       <br />
              //       취소된 내용은 복구가 불가합니다.
              //     </span>
              //   );
              //   setIsOpen(true);
              // }}
            >
              취소하기
            </button>
            <button
              className="document-save-btn"
              onClick={saveDocument}
              // onClick={() => {
              //   setConfirmMsg(<span>수정된 내용을 저장하시나요?</span>);
              //   setIsOpen(true);
              // }}
            >
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

export default MyDocument;
