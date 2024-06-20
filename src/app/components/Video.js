import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faPlay,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

export default function Video({ player, setPlayer, large, open, setOpen }) {
  const videoRefs = useRef([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRefs.current[0];
    const updateTime = () => {
      setCurrentTime(video.currentTime);
    };
    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      videoRef.play();
    });
  };
  const pauseAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      videoRef.pause();
    });
  };

  const replayAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      videoRef.currentTime = 0;
      videoRef.play();
    });
  };

  return (
    <>
      <div className={`${open && "large"} videotextbox`}>
        <div>
          Klik på video og skift
          <br /> mellem Claudine og Marks historie
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="timer">{formatTime(currentTime)} / 6:09</div>
          <div
            onClick={() => startAllVideos()}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                () => startAllVideos();
              }
            }}
            role="button"
            tabIndex="0"
            className="hover-teal"
            style={{
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <FontAwesomeIcon icon={faPlay} style={{ marginLeft: 12 }} />
          </div>

          <div
            onClick={() => pauseAllVideos()}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                () => pauseAllVideos();
              }
            }}
            role="button"
            tabIndex="0"
            className="hover-orange"
            style={{
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <FontAwesomeIcon icon={faPause} style={{ marginLeft: 12 }} />{" "}
          </div>
          <div
            onClick={() => replayAllVideos()}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                () => replayAllVideos();
              }
            }}
            role="button"
            tabIndex="0"
            className="hover-pink"
            style={{
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <FontAwesomeIcon icon={faRepeat} style={{ marginLeft: 12 }} />{" "}
          </div>
          <div
            onClick={() => setOpen(!open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                () => setOpen(!open);
              }
            }}
            role="button"
            tabIndex="0"
            className="hover-teal desktop"
            style={{
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <FontAwesomeIcon icon={faExpand} style={{ marginLeft: 12 }} />{" "}
          </div>
        </div>
      </div>
      <div
        className={`videogallery ${large ? (open ? "large" : "hidden") : ""} ${
          player === 0 ? "border-teal" : "border-orange"
        }`}
      >
        <video
          // src="https://drive.google.com/uc?export=download&id=1ynvJeShriKu71E1N9WvQh99a2geL5XAg"
          src="/video/claudine_sm.mp4"
          className="absolute"
          poster="/images/claudine/01.png"
          muted
          ref={(ref) => (videoRefs.current[0] = ref)}
        />

        {/* https://drive.google.com/uc?export=download&id=1ynvJeShriKu71E1N9WvQh99a2geL5XAg */}
        <video
          // src="https://drive.google.com/uc?export=download&id=1ynvJeShriKu71E1N9WvQh99a2geL5XAg"
          src="/video/mark_sm.mp4"
          poster="/images/mark/01.png"
          className={`absolute ${player === 0 ? "none" : ""}`}
          muted
          ref={(ref) => (videoRefs.current[1] = ref)}
        />

        <video
          src="/video/claudine_sm.mp4"
          poster="/images/claudine/01.png"
          className={`opacity-toggle ${
            player === 1 ? "absolute2" : "invisible2"
          }`}
          muted
          onClick={() => {
            setPlayer(0);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setPlayer(0);
            }
          }}
          role="button"
          tabIndex="0"
          ref={(ref) => (videoRefs.current[2] = ref)}
        />
        <video
          src="/video/mark_sm.mp4"
          poster="/images/mark/01.png"
          className={`opacity-toggle ${
            player === 0 ? "absolute" : "invisible"
          }`}
          onClick={() => {
            setPlayer(1);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setPlayer(1);
            }
          }}
          role="button"
          tabIndex="0"
          ref={(ref) => (videoRefs.current[3] = ref)}
        />
      </div>
    </>
  );
}
