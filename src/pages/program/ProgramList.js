import React, { useEffect, useState } from "react";
import "../../css/program/ProgramList.css";
import "../../css/walter.css";

const ProgramList = () => {
  const [totalCount, setTotalCount] = useState(0);

  const [programList, setProgramList] = useState([{}]);

  return (
    <div className="walter-container">
      <div className="program-list-container">
        <div className="list-count-container">
          <span className="body-rgular-16-25">전체 게시글</span>
          <span className="divider">ㅣ</span>
          <span className="body-rgular-16-25">{totalCount}개</span>
        </div>
        <div className="program-container">
          <div className="program-thumbnail">
            <img src="/img/program-basic-img.png" />
          </div>
          <div className="program-info">
            <div className="program-info-period">
              <div className="item-blue">D-20</div>
              <span className="body-rgular-16-25">2023.06.10까지 모집</span>
            </div>
            <h3>2023년 스타트업 개발자 매칭 프로그램</h3>
            <span className="body-rgular-16-25">
              선착순 100명의 개발자를 위한 성공적인 이직 프로그램으로 각
              포지션과 경력에 맞춘 매칭을 진행합니다.
            </span>
            <button className="program-info-detail-btn">
              <span className="body-rgular-16-25">프로그램 내용 보기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramList;
