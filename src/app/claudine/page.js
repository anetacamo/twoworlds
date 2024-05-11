"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import GridGallery from "../components/GridGallery";
import Video from "../components/Video";
import CloseButton from "../components/CloseButton";
import NameSwitch from "../components/NameSwitch";
import VideoSingle from "../components/VideoSingle";
import Footer from "../components/Footer";
import claudine from "../../texts/claudine.json";
import Boks from "../components/Boks";

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
              <h2 className="orange">{claudine.headline}</h2>
              <h2>{claudine.caption}</h2>
              <p>
                <i>{claudine.writtenBy}</i>
              </p>
              <Divider />
              <VideoSingle player="claudine" />
              <Divider />
              {claudine.paragraphs.map((p, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
            <div id="fotogalleri">
              <Divider />
            </div>
            <h2>{claudine.fotogaleriHeadline}</h2>
            <p>
              <i>{claudine.photographedBy}</i>
            </p>
            <GridGallery
              images={[
                { caption: "", image: "claudine/01" },
                { caption: "", image: "claudine/02" },
                { caption: "", image: "claudine/03" },
                { caption: "", image: "claudine/04" },
                { caption: "", image: "claudine/05" },
                { caption: "", image: "claudine/06" },
                { caption: "", image: "claudine/07" },
                { caption: "", image: "claudine/08" },
                { caption: "", image: "claudine/09" },
                { caption: "", image: "claudine/010" },
                { caption: "", image: "claudine/011" },
                { caption: "", image: "claudine/012" },
                { caption: "", image: "claudine/013" },
                { caption: "", image: "claudine/014" },
                { caption: "", image: "claudine/015" },
              ]}
            />
            <Boks
              color="teal"
              headline={claudine.boksFirstHeadline}
              paragraphs={claudine.boksFirstParagraphs}
            />
            <Boks
              color="orange"
              right={true}
              headline={claudine.boksSecondHeadline}
              paragraphs={claudine.boksSecondParagraphs}
            />
          </div>
        </section>
        <Divider />
        <Footer />
      </main>
    </div>
  );
}
