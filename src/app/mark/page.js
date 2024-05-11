"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import GridGallery from "../components/GridGallery";
import Video from "../components/Video";
import CloseButton from "../components/CloseButton";
import NameSwitch from "../components/NameSwitch";
import Footer from "../components/Footer";
import mark from "../../texts/mark.json";

export default function Claudine() {
  const initialPlayer = 0;
  const [player, setPlayer] = useState(initialPlayer);
  const [open, setOpen] = useState(false);

  const handlePlayerAndScreenChange = (newPlayer) => {
    setPlayer(newPlayer);
    setOpen(true);
  };

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  };

  return (
    <div>
      <Header
        player={player}
        handlePlayerChange={handlePlayerAndScreenChange}
      />
      <div className={`overlay ${open ? "open" : ""}`}>
        {open && (
          <>
            <NameSwitch setPlayer={handlePlayerChange} player={player} />
            <CloseButton handleClick={() => setOpen(false)} />
            <Video
              player={player}
              setPlayer={handlePlayerChange}
              large
              open={open}
            />
          </>
        )}
      </div>
      <main style={{ marginTop: 150 }}>
        <section>
          <div className="inner">
            <div className="largetext">
              <h2 className="teal">{mark.headline}</h2>
              <h2>{mark.caption}</h2>
              <p>
                <i>{mark.writtenBy}</i>
              </p>
              <Divider />
              {mark.paragraphs.map((p, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
            <div id="fotogalleri">
              <Divider />
            </div>
            <h2>{mark.fotogaleriHeadline}</h2>
            <p>{mark.photographedBy}</p>
            <GridGallery
              images={[
                { caption: "", image: "mark/01" },
                { caption: "", image: "mark/02" },
                { caption: "", image: "mark/03" },
                { caption: "", image: "mark/04" },
                { caption: "", image: "mark/05" },
                { caption: "", image: "mark/07" },
                { caption: "", image: "mark/08" },
                { caption: "", image: "mark/09" },
                { caption: "", image: "mark/10" },
                { caption: "", image: "mark/11" },
                { caption: "", image: "mark/12" },
                { caption: "", image: "mark/13" },
                { caption: "", image: "mark/14" },
                { caption: "", image: "mark/15" },
                { caption: "", image: "mark/16" },
                { caption: "", image: "mark/17" },
                { caption: "", image: "mark/18" },
                { caption: "", image: "mark/19" },
                { caption: "", image: "mark/20" },
              ]}
            />

            <div>
              <section>
                <div className="largetext box box-teal">
                  <h2 className="teal">Fakta om krigen i Afghanistan </h2>
                  <p>
                    Det var terrorangrebet mod USA 11.september 2001, som fik
                    USA til at invadere Afghanistan 7. oktober 2001.
                  </p>
                  <p>
                    USA hævdede, at invasionen var i tråd med folkerettens
                    princip om retten til selvforsvar. De fleste lande bakkede
                    op om USA fortolkning, da al-Qaida, hvis ledelse befandt sig
                    i det Taliban-ledede Afghanistan, tog ansvar for
                    terrorangrebet mod USA.
                  </p>
                  <p>
                    Danmark deltog sammen med andre NATO-lande i de næste 20 års
                    krig i landet. En krig som anslås at have kostet omkring
                    176.000 menneskeliv. Heraf ca. 46.000 civile. 44 danske
                    soldater mistede livet og 214 blev såret.
                  </p>
                  <p>
                    <i>
                      Kilder: Globalis.dk, Watson Institute, Brown University,
                      USA, og Forsvarsministeriets personalestyrelse
                    </i>
                  </p>
                </div>
              </section>

              <section>
                <div className="largetext box right box-orange">
                  <h2 className="orange">Fakta om kørestolsrugby</h2>
                  <p>
                    Kørestolsrugby er en kontaktsport, som kendetegnes ved højt
                    tempo, strategi og tacklinger. Mænd og kvinder kan deltage
                    på samme hold. Spillerne bruger specialdesignede kørestole
                    (rugbystole) og det er tilladt at vælte modstanderen.
                  </p>
                  <p>
                    Kun spillere med nedsat funktion i både arme og ben kan
                    kvalificere sig til sporten.
                  </p>
                  <p>
                    Kørestolsrugby spilles på en håndboldbane med fire spillere
                    på banen ad gangen. Sporten er en blanding af basketball,
                    hockey og rugby, mens bolden er rund og ligner en
                    volleyball.
                  </p>
                  <p>
                    I Danmark er der lige nu seks klubber, som tilbyder
                    kørestolsrugby: I Rwanda er der ingen klubber. Danmark er et
                    af i alt otte lande, som har kvalificeret sig til de
                    Paralympiske Lege, Paris 2024.
                  </p>
                  <p>
                    <i>Kilder: Parasport.dk og paralympic.org</i>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
        <Divider />
        <Footer />
      </main>
    </div>
  );
}
