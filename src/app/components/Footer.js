import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="large">
          <h3>
            TO VERDENER <br />
            SAMME MÅL
          </h3>

          <p style={{ maxWidth: 440 }}>
            To Verdener – Samme Mål er blevet til i samarbejde med Dansk
            Handicap Forbund.
          </p>
          <p style={{ maxWidth: 540 }}>
            Tak til CISU og Timbuktu Fonden for økonomisk støtte og for
            opbakning fra Danske Handicaporganisationer, Parasport Danmark, DGI,
            Vejle Kommune og NPC Rwanda.
          </p>
        </div>
        <div className="small">
          {" "}
          <h5>kontakt</h5>
          <p>
            <span className="teal">Hanne Selnæs</span>
            <br />
            Journalist
            <br />
            <a href="mailto:hanne.selnaes@gmail.com" className="underlined">
              hanne.selnaes@gmail.com
            </a>{" "}
          </p>
          <p>
            <span className="orange">Tine Harden</span>
            <br />
            Fotograf
            <br />
            <a href="mailto:tine@tineharden.dk" className="underlined">
              tine@harden.dk
            </a>
          </p>
          <h5 style={{ marginTop: 32 }}>
            Projektet bliver til i samarbejde med
          </h5>
          <div className="flex" style={{ display: "flex" }}>
            <img
              className="logoicon"
              style={{ marginRight: 24, filter: "brightness(0) invert(1)" }}
              src={`/images/logos/CISU.png`}
            />
            <img className="logoicon" src={`/images/logos/DHF.png`} />
          </div>
        </div>
      </div>
    </footer>
  );
}
