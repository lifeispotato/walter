import React, { useEffect, useState } from "react";
import "../css/popup/Popup.css";

const Popup = (props) => {
  useEffect(() => {
    console.log(props.type);
  }, []);

  return (
    <div className="popup-container">
      <div className="popup-wrap">
        <span className="popup-info">{props.msg}</span>
        <div className="popup-btn-wrap">
          {props.type === "confirm" ? (
            <button
              className="popup-btn-cancel"
              onClick={() => {
                props.setIsOpen(false);
                props.setCancelCheck(true);
              }}
            >
              취소
            </button>
          ) : null}

          <button
            className="popup-btn-check"
            onClick={() => {
              props.setIsOpen(false);
              props.setSaveCheck(true);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
