"use client";

import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from "react";
import GridGallery from "./components/GridGallery";
import Header from "./components/Header";
import Video from "./components/Video";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import CloseButton from "./components/CloseButton";
import NameSwitch from "./components/NameSwitch";

export default function Home() {
  const initialPlayer = 0;
  const [player, setPlayer] = useState(initialPlayer);
  const [open, setOpen] = useState(false);

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  };

  return (
    <div>
      <Header player={player} handlePlayerChange={handlePlayerChange} />
      <main className={styles.main}>
        <section>
          <div className="inner">
            <h1 className="center">Interaktiv video</h1>
            <br />
            <br />
            <Video
              player={player}
              setPlayer={handlePlayerChange}
              setOpen={() => setOpen(!open)}
            />
            <Divider />
            <div className="center flex-center" id="om-projektet">
              <Link href="/mark">
                <div
                  className={`${styles.button} ${styles.buttonRight} button button-teal`}
                >
                  Se mere om Mark
                </div>
              </Link>
              <Link href="/claudine">
                <div
                  className={`${styles.button} ${styles.buttonLeft} button button-orange`}
                >
                  Se mere om Claudine
                </div>
              </Link>
            </div>
          </div>
        </section>

        <div
          className={`overlay ${open ? "open" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "Escape" && open) {
              setOpen(false);
            }
          }}
          role="button"
        >
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
              <div onKeyDown={() => setOpen(false)} tabIndex={0}></div>
            </>
          )}
        </div>

        <section style={{ marginBottom: -24 }}>
          <div className="inner">
            <div className="largetext center">
              <h1>
                Om{" "}
                <span className="orange">
                  To Verdener <br />
                  Samme Mål
                </span>
              </h1>
              <p>
                De er begge skadet i krig. Den ene som voksen i Afghanistan, den
                anden som barn under folkemord i Rwanda. <br /> En professionel
                soldat og et uskyldigt barn. Begge har mistet ben, og begge er
                kommet videre gennem parasporten. Om kort tid skal de hver især
                repræsentere deres land til de Paralympiske Lege (PL) i Paris
                2024. Nu er det kampen om medaljer, det gælder.
              </p>
            </div>

            <GridGallery
              images={[
                { caption: "", image: "mark/16" },
                { caption: "", image: "claudine/01" },
              ]}
            />
          </div>
        </section>

        <section style={{ marginBottom: -24, marginTop: -24 }}>
          <div className="inner">
            <div className="largetext center">
              <p>
                Siden 2020 har vi fulgt de to stjerner og deres hold i Rwanda og
                i Danmark. Gennem dem har vi oplevet, hvordan muligheden for at
                dyrke holdsport kan få mennesker til at drømme stort.{" "}
              </p>
              <p>Det sætter vores projekt ’To Verdener – Samme Mål’ spot på.</p>
            </div>

            <GridGallery
              images={[
                { caption: "", image: "mark/17" },
                { caption: "", image: "claudine/06" },
              ]}
            />
            <Divider />
          </div>
        </section>
        <section>
          <h1 className="center">
            mark og
            <br /> Claudine
          </h1>
        </section>
        <section style={{ textAlign: "right" }}>
          <div className="inner">
            <div className="largetext">
              <h2 className="orange">Jeg vil være en af verdens bedste</h2>
              <p style={{ maxWidth: 540, marginRight: 0, marginLeft: "auto" }}>
                Når Claudine og hendes hold vender hjem efter en sejr i
                udlandet, går det ikke stille for sig.
              </p>
              <p style={{ marginBottom: 32 }}>
                I åbne busser kører kvindelandsholdet hujende og syngende gennem
                hovedstadens gader, fylder godt på Instagram og bliver
                interviewet til Rwandas TV og radio. Claudine og
                kvindelandsholdet i siddende volleyball er blevet
                sportsstjerner. Og Claudine drømmer stadig om mere.
              </p>
              <Link href="/claudine">
                <div className="button button-orange center">
                  Læs Claudines historie her
                </div>
              </Link>
            </div>

            <GridGallery
              images={[
                { caption: "", image: "claudine/01" },
                { caption: "", image: "claudine/02" },
                { caption: "", image: "claudine/03" },
              ]}
            />
          </div>
        </section>
        <div className="center">
          <Link href="/claudine#fotogalleri">
            <div className="button button-orange">Se fotogalleri</div>
          </Link>
        </div>
        <Divider />
        <section>
          <div className="inner">
            <div className="largetext">
              {/* <h5>om mark</h5> */}
              <h2 className="teal">
                Uden rugby var jeg blevet monsterfed
              </h2>{" "}
              <p style={{ marginBottom: 32 }}>
                - Uden rugby i mit liv havde jeg spillet for meget computerspil
                og var blevet monsterfed. Jeg ville have kedet mig, men jeg
                ville også have haft masser af tid til kæresten, siger
                Afghanistan veteranen Mark Peters, som i dag bruger al sin
                fritid på at træne og spille kørestolsrugby. En holdsport som
                har givet ham både mere energi, glæde og selvtillid. I dag er
                hans blik kun rettet mod de Paralympiske Lege i Paris.
              </p>
              <Link href="/mark">
                <div className="button button-teal">
                  Læs hele Marks historie
                </div>
              </Link>
            </div>

            <GridGallery
              images={[
                { caption: "", image: "mark/18" },
                { caption: "", image: "mark/19" },
                { caption: "", image: "mark/03" },
              ]}
            />

            <div className="center">
              <Link href="/mark#fotogalleri">
                <div className="button button-teal">Se fotogalleri</div>
              </Link>
            </div>
          </div>
          <Divider />
        </section>

        <section>
          <div className="largetext box">
            <h2>Alle har ret til at dyrke sport</h2>
            <p>
              FN’s Verdensmål og Handicapkonvention giver alle lige rettigheder
              også når det gælder muligheden for at dyrke sport. Virkeligheden
              lever dog ikke altid op til verdenssamfundets smukke ord om ikke
              at lade nogen i stikken - ’Leave Noone Behind’. Heller ikke, når
              det gælder adgangen til at dyrke sport. I handicapkonventionen
              står der, at personer med handicap har ret til at være med til
              sport og kultur. Og have mulighed for at have sin egen sport og
              kultur. Det betyder i praksis, at det skal være muligt for alle
              med et handicap at komme ind og deltage i både sport og kultur i
              det område, man bor i. Kilder: Handicapkonventionen, FNs
              Verdensmål og Institut for Menneskerettigheder
            </p>
          </div>
        </section>

        <section>
          <div className="largetext box right box-orange">
            <h2>Para- hvilke lege? </h2>
            <p id="hvem-er-vi">
              De Paralympiske Lege er verdens største internationale begivenhed
              for atleter med handicap og finder sted umiddelbart efter de
              Olympiske Lege i samme værtsby og samme faciliteter. I 2024
              afholdes PL i Paris fra 28. august – 8. september. 23 forskellige
              sportsgrene med 4400 deltagere deltager.
            </p>
          </div>
        </section>

        <Divider />

        <section>
          <div className="inner">
            <div className="largetext">
              <h2>Hvem er vi?</h2>
              <p>
                <i>
                  Fotograf Tine Harden og journalist Hanne Selnæs står bag
                  projektet ’To Verdener – Samme Mål’.
                </i>
              </p>
              <p>
                <span className="teal">Tine Harden</span> er en
                sportsinteresseret og prisvindende fotograf, som blandt andet
                har lavet fotobogen ’A kick out of Africa’ op til VM i Sydafrika
                i 2010.
              </p>
              <p>
                <span className="teal">Hanne Selnæs</span> er uddannet
                journalist og kommunikerer primært om udsatte menneskers vilkår,
                muligheder og rettigheder – hjemme som ude.
              </p>
              <p>
                <i>
                  I 2021 modtog vi Timbuktu Prisen som en anerkendelse af vores
                  arbejde med projektet ’To Verdener – Samme Mål’. Projektet
                  bliver til i samarbejde med:
                </i>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <div className="largetext">
              <h2>Projektet bliver til i samarbejde med:</h2>
              <p>
                <span className="pink">Dansk Handicap Forbund, DHF,</span>{" "}
                arbejder for, at mennesker med bevægelseshandicap har samme
                rettigheder som alle andre. DHF har 7.200 medlemmer i Danmark.
              </p>
              <p>
                Internationalt er DHF engageret i udviklingsprojekter i
                femlande. Sammen med Parasport Danmark er DHF med til at styrke
                adgangen til parasport i Bolivia, Vietnam og Uganda.
              </p>
              <p>
                <span className="pink">Parasport Danmark</span> arbejder for, at
                alle mennesker med handicap eller særlige behov skal have
                mulighed for at dyrke idræt. Parasport Danmark har mere end 500
                medlemsforeninger over hele landet.
              </p>
              <p>
                Som Danmarks Nationale Paralympiske Komité sigter Parasport
                Danmark også mod at fostre eliteatleter og rollemodeller i
                verdensklasse.
              </p>
              <p>
                Internationalt er Parasport Danmark sammen med DHF engageret i
                projekter, der styrker adgangen til parasport for personer med
                handicap i udviklingslande.
              </p>
            </div>
          </div>
        </section>

        <Divider />
        <Footer />
      </main>
    </div>
  );
}
