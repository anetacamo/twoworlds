import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faPlay,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

export default function Video({ player, setPlayer, large, open, setOpen }) {
  const videoRefs = useRef([]);

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
        <div>Klik på video og skift<br/> mellem Claudine og Marks historie</div>
        <div style={{ display: "flex", alignItems: "center" }}>
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
            className="hover-teal"
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
          src="/video/claudine_sm.mp4"
          className="absolute"
          muted
          ref={(ref) => (videoRefs.current[0] = ref)}
        />
        <video
          src="/video/mark_sm.mp4"
          className={`absolute ${player === 0 ? "none" : ""}`}
          muted
          ref={(ref) => (videoRefs.current[1] = ref)}
        />

        <video
          src="/video/claudine_sm.mp4"
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
          className={`opacity-toggle ${
            player === 0 ? "absolute" : "invisible"
          }`}
          muted
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
