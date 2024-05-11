import React from "react";

export default function Divider({ anchor }) {
  return (
    <section id={anchor}>
      <div className="inner center">
        <img className="logoicon" src="images/icons/ball2.png" />
        <img className="logoicon" src="images/icons/ball2.png" />
        <img className="logoicon" src="images/icons/ball2.png" />
      </div>
    </section>
  );
}
