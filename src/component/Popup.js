import React, { useEffect, useState } from "react";
import "../css/popup/Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-container">
      <div className="popup-wrap">
        <span className="popup-info">정보가 일치하지 않습니다.</span>
        <div className="popup-btn-wrap">
          {props.type === "confirm" ? (
            <button
              className="popup-btn-cancel"
              onClick={() => props.setIsOpen(false)}
            >
              취소
            </button>
          ) : null}

          <button
            className="popup-btn-check"
            onClick={() => props.setIsOpen(false)}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
