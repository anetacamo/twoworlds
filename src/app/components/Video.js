import { useRef, useEffect } from "react";
import VideoControls from "./VideoControls";

export default function Video({
  player,
  setPlayer,
  large,
  open,
  setOpen,
  time,
  setVideoTime,
}) {
  const videoRefs = useRef([]);

  useEffect(() => {
    const video = videoRefs.current[0];
    const updateTime = () => {
      setVideoTime(video.currentTime);
    };
    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const startAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      videoRef.currentTime = Math.floor(time);
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
    <div className="videowithcontrols">
      <VideoControls
        time={Math.floor(time)}
        screen="desktop"
        startAllVideos={startAllVideos}
        pauseAllVideos={pauseAllVideos}
        replayAllVideos={replayAllVideos}
        setOpen={() => setOpen(!open)}
        open={open}
      />

      <div
        className={`videogallery ${large ? (open ? "large" : "hidden") : ""} ${
          player === 0 ? "border-teal" : "border-orange"
        }`}
      >
        <video
          src="/video/claudine_sm.mp4"
          poster="/images/claudine/01.png"
          className="absolute"
          muted
          ref={(ref) => (videoRefs.current[0] = ref)}
          disableRemotePlayback
        />

        <video
          src="/video/mark_sm.mp4"
          poster="/images/mark/01.png"
          className={`absolute ${player === 0 ? "none" : ""}`}
          muted
          ref={(ref) => (videoRefs.current[1] = ref)}
          disableRemotePlayback
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
          disableRemotePlayback
        />
        <video
          src="/video/mark_sm.mp4"
          poster="/images/mark/05.png"
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
          disableRemotePlayback
        />
      </div>

      <VideoControls
        time={Math.floor(time)}
        screen="mobile"
        startAllVideos={startAllVideos}
        pauseAllVideos={pauseAllVideos}
        replayAllVideos={replayAllVideos}
        setOpen={() => setOpen(!open)}
        open={open}
      />
    </div>
  );
}
