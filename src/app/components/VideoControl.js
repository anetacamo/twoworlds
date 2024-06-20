import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoControl({ onClickHandler, icon, classes }) {
  return (
    <div
      onClick={onClickHandler}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClickHandler;
        }
      }}
      role="button"
      tabIndex="0"
      className={classes}
      style={{
        cursor: "pointer",
        fontSize: 20,
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ marginLeft: 12 }} />{" "}
    </div>
  );
}
