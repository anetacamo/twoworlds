import {
  faExpand,
  faPlay,
  faPause,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import VideoControl from "./VideoControl";

export default function VideoControls({
  screen,
  time,
  startAllVideos,
  pauseAllVideos,
  replayAllVideos,
  setOpen,
  open,
}) {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className={`${open && "large"} videotextbox ${screen}`}>
      <div>
        Klik på video og skift
        <br /> mellem Claudine og Marks historie
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="timer">{formatTime(time)} / 6:09</div>
        <VideoControl
          onClickHandler={startAllVideos}
          icon={faPlay}
          classes="hover-teal"
        />
        <VideoControl
          onClickHandler={pauseAllVideos}
          icon={faPause}
          classes="hover-orange"
        />
        <VideoControl
          onClickHandler={replayAllVideos}
          icon={faRepeat}
          classes="hover-pink"
        />
        <VideoControl
          onClickHandler={() => setOpen(!open)}
          icon={faExpand}
          classes="hover-teal desktop"
        />
      </div>
    </div>
  );
}
