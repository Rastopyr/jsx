import "./GroupOne.css";

import TrainingImage from "./images/training.png";

const CardTypes = {
  training: "training"
};

const timeLabels = {
  [CardTypes.training]: "Today training time"
};

const cardImages = {
  [CardTypes.training]: TrainingImage
};

const normalizeTimeSegment = (segmentValue) => {
  if (segmentValue < 10) {
    return `0${segmentValue}`;
  }

  return segmentValue;
};

const mapSecondsToViewTime = (seconds) => {
  const viewHours = Math.trunc(seconds / 60 / 60);
  const viewMinutes = Math.trunc(seconds / 60 - viewHours * 60);
  const viewSeconds = Math.trunc(
    seconds - viewHours * 60 * 60 - viewMinutes * 60
  );

  return [viewHours, viewMinutes, viewSeconds]
    .map(normalizeTimeSegment)
    .join(":");
};

const Card = ({ theme, cardType, time }) => {
  return (
    <div className={`activity-card ${theme}`}>
      <div className={"card-body"}>
        <div className={"card-info"}>
          <div className={"info-label"}>{timeLabels[cardType]}</div>
          <div className={"info-data"}>
            {mapSecondsToViewTime(time)} minutes
          </div>
        </div>

        <div className={"card-image"}>
          <img src={cardImages[cardType]} alt={timeLabels[cardType]} />
        </div>
      </div>
    </div>
  );
};

export const GroupOne = () => {
  return <Card theme={"dark"} cardType={CardTypes.training} time={12542} />;
};
