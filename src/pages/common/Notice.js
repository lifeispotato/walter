import React, { useEffect, useState } from "react";
import "../../css/walter.css";
import "../../css/common/Notice.css";

const Notice = () => {
  const [openNotice, setOpenNotice] = useState(null);
  const [notice, setNotice] = useState([
    {
      title:
        "공지사항, 자주 묻는 질문에 대한 내용이 이곳에 들어갑니다. 게시글은 관리자 페이지에서 최고관리자가 등록합니다.",
      date: "2023.05.24",
      content:
        "제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다.",
    },
    {
      title:
        "공지사항, 자주 묻는 질문에 대한 내용이 이곳에 들어갑니다. 게시글은 관리자 페이지에서 최고관리자가 등록합니다.",
      date: "2023.05.24",
      content:
        "제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다. 제목에 대한 내용이 이곳에 들어갑니다.",
    },
  ]);

  return (
    <div className="terms-content-container">
      <div className="notice-content-wrap">
        <h1>공지사항</h1>
        <div className="notice-count-container">
          <span className="body-rgular-16-25">전체 게시글</span>
          <span className="body-rgular-16-25 divider">ㅣ</span>
          <span className="body-rgular-16-25">10개</span>
        </div>
        <div className="notice-list-container">
          <div className="notice-list-title-container">
            <span className="body-rgular-16-25">제목</span>
            <span className="body-rgular-16-25">작성일</span>
          </div>
          <div className="notice-list-body">
            {notice &&
              notice.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="notice-list cursor-pointer"
                      onClick={() => {
                        if (openNotice === index) {
                          setOpenNotice(null);
                        } else setOpenNotice(index);
                      }}
                    >
                      <span className="notice-detail-title body-rgular-16-25">
                        {item.title}
                      </span>
                      <span className="notice-detail-date body-rgular-16-25">
                        {item.date}
                      </span>
                      {openNotice === index ? (
                        <img src="/img/chevron-up.svg" />
                      ) : (
                        <img src="/img/chevron-down.svg" />
                      )}
                    </div>
                    {openNotice === index ? (
                      <div className="notice-detail">
                        <span className="body-rgular-16-25">
                          {item.content}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
          <div className="pagination">
            <img src="/img/chevron-left.svg" />
            <div className="pagination-number">
              <a>1</a>
              <a>2</a>
            </div>
            <img src="/img/chevron-right.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
