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
import hp from "../texts/homepage.json";

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
            <h1 className="center" style={{ marginBottom: 48 }}>
              {hp.videoHeadline}
            </h1>
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
                  {hp.videoButtonAboutMark}
                </div>
              </Link>
              <Link href="/claudine">
                <div
                  className={`${styles.button} ${styles.buttonLeft} button button-orange`}
                >
                  {hp.videoButtonAboutClaudine}
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
              <h1 className="orange" style={{ maxWidth: 540, margin: "auto" }}>
                {hp.omProjektHeadline}
              </h1>
              {hp.omProjektParagraphsFirstSection.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <GridGallery
              images={[
                { caption: "", image: "mark/16" },
                { caption: "", image: "claudine/01" },
              ]}
            />
          </div>
        </section>

        <section>
          <div className="inner">
            <div className="largetext center">
              {hp.omProjektParagraphsSecondSection.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
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
          <h1 className="center" style={{ maxWidth: 240, margin: "auto" }}>
            {hp.markAndClaudineHeadline}
          </h1>
        </section>
        <section style={{ textAlign: "right" }}>
          <div className="inner">
            <div className="largetext">
              <h2 className="orange">{hp.claudineHeadline}</h2>
              <p style={{ maxWidth: 540, marginRight: 0, marginLeft: "auto" }}>
                {hp.claudineParagraphs[0]}
              </p>
              <p style={{ marginBottom: 32 }}>{hp.claudineParagraphs[1]}</p>
              <Link href="/claudine">
                <div className="button button-orange center">
                  {hp.claudineButton}
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section style={{ textAlign: "right" }}>
          <div className="inner">
            <GridGallery
              images={[
                { caption: "", image: "claudine/01" },
                { caption: "", image: "claudine/02" },
                { caption: "", image: "claudine/03" },
              ]}
            />
          </div>

          <div className="center">
            <Link href="/claudine#fotogalleri">
              <div className="button button-orange">
                {hp.claudineButtonFotogaleri}
              </div>
            </Link>
          </div>
        </section>
        <Divider />
        <section>
          <div className="inner">
            <div className="largetext">
              <h2 className="teal">{hp.markHeadline}</h2>
              {hp.markParagraphs.map((paragraph, index) => (
                <p
                  style={{ marginBottom: 32 }}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              <Link href="/mark">
                <div className="button button-teal">{hp.markButton}</div>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <GridGallery
              images={[
                { caption: "", image: "mark/18" },
                { caption: "", image: "mark/19" },
                { caption: "", image: "mark/03" },
              ]}
            />

            <div className="center">
              <Link href="/mark#fotogalleri">
                <div className="button button-teal">
                  {hp.markButtonFotogaleri}
                </div>
              </Link>
            </div>
          </div>
          <Divider />
        </section>

        <section>
          <div className="largetext box">
            <h2>{hp.boksFirstHeadline}</h2>
            <p>{hp.boksFirstParagraphs[0]}</p>
          </div>
        </section>

        <section>
          <div className="largetext box right box-orange">
            <h2>{hp.boksSecondHeadline}</h2>
            <p id="hvem-er-vi">{hp.boksSecondParagraphs[0]}</p>
          </div>
        </section>

        <Divider />

        <section>
          <div className="inner">
            <div className="largetext">
              <h2>{hp.hvemErViHeadline}</h2>
              {hp.hvemErViParagraphs &&
                hp.hvemErViParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <div className="largetext">
              <h2>{hp.projektSamarbajdeHeadline}</h2>
              {hp.projektSamarbajdeParagraphs &&
                hp.projektSamarbajdeParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
            </div>
          </div>
        </section>

        <Divider />
        <Footer />
      </main>
    </div>
  );
}
