import React from "react";

export default function Hamburger({ open, handleClick }) {
  return (
    <div className="hamburger">
      <div
        className="hamburger-menu"
        onClick={() => handleClick()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleClick();
          }
        }}
        role="button"
        tabIndex="0"
      >
        <div className={`bar-01 icon-bar ${open && "opened"}`}></div>
        <div className={`bar-02 icon-bar ${open && "opened"}`}></div>
        <div className={`bar-03 icon-bar ${open && "opened"}`}></div>
      </div>
    </div>
  );
}
