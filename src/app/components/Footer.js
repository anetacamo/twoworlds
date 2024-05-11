import React from "react";
import footer from "../../texts/footer.json";

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="large">
          <h3 style={{ maxWidth: 200, marginTop: 24 }}>{footer.headline}</h3>
          {footer.paragraphs.map((p, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: p }}
              style={{ maxWidth: 540 }}
            ></p>
          ))}

          <div className="flex" style={{ display: "flex" }}>
            <img
              className="logoicon"
              style={{ marginRight: 24, filter: "brightness(0) invert(1)" }}
              src={`/images/logos/CISU.png`}
            />
            <img className="logoicon" src={`/images/logos/DHF.png`} />
            <img className="logoicon" src={`/images/logos/Timbuktu.png`} />
          </div>
        </div>
        <div className="small">
          <h5>kontakt</h5>
          <p>
            <span className="teal">Hanne Selnæs</span>
            <br />
            Journalist
            <br />
            <a href="mailto:hanne.selnaes@gmail.com" className="underlined">
              hanne.selnaes@gmail.com
            </a>
          </p>
          <p>
            <span className="orange">Tine Harden</span>
            <br />
            Fotograf
            <br />
            <a href="mailto:tine@tineharden.dk" className="underlined">
              Tine@tineharden.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
