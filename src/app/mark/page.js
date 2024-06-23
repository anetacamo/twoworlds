"use client";

import { useState } from "react";
import mark from "../../texts/mark.json";
import Boks from "../components/Boks";
import CloseButton from "../components/CloseButton";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import GridGallery from "../components/GridGallery";
import Header from "../components/Header";
import NameSwitch from "../components/NameSwitch";
import Video from "../components/Video";
import VideoSingle from "../components/VideoSingle";

export default function Claudine() {
  const initialPlayer = 0;
  const [player, setPlayer] = useState(initialPlayer);
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

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
        time={currentTime}
      />
      <div className={`overlay ${open ? "open" : ""}`}>
        {open && (
          <>
            <NameSwitch
              setPlayer={handlePlayerChange}
              player={player}
              time={currentTime}
            />
            <CloseButton handleClick={() => setOpen(false)} />
            <Video
              player={player}
              setPlayer={handlePlayerChange}
              large
              open={open}
              time={currentTime}
              setVideoTime={setCurrentTime}
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

              <Divider />
              <VideoSingle
                player="mark"
                video="https://www.youtube.com/embed/XJVAWVboju4?si=CqafQCNxGxRjM0wZ&amp;controls=0"
              />
              <Divider />
              <p>
                <i>{mark.writtenBy}</i>
              </p>
              {mark.paragraphs.map((p, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
            <div id="fotogalleri">
              <Divider />
            </div>
            <h2>{mark.fotogaleriHeadline}</h2>
            <p>
              <i>{mark.photographedBy}</i>
            </p>
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

            <Boks
              color="teal"
              headline={mark.boksFirstHeadline}
              paragraphs={mark.boksFirstParagraphs}
            />
            <Boks
              color="orange"
              right={true}
              headline={mark.boksSecondHeadline}
              paragraphs={mark.boksSecondParagraphs}
            />
          </div>
        </section>
        <Divider />
        <Footer />
      </main>
    </div>
  );
}
