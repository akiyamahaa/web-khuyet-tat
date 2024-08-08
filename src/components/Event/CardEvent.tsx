import { Event } from "@/constants/events";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
type EventProps = {
  event: Event;
};
const CardEvent = ({ event }: EventProps) => {
  return (
    <Link
      to={`${event.id}`}
      className="h-[401px] p-2 bg-secondary-100 rounded-2xl flex flex-col"
    >
      <img
        src={event.imgUrl}
        alt={event.title}
        className="w-full bg-center h-[200px] object-cover position rounded-2xl"
      />
      <div className="flex flex-col flex-1 space-y-2 justify-evenly">
        <LinesEllipsis
          className="font-semibold text-lg"
          text={event.title}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
        <LinesEllipsis
          className="font-normal text-subtitle text-base"
          text={event.description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
        <div className="flex flex-row items-center justify-start space-x-2">
          <img src="./assets/clock.svg" alt={event.title} className="w-4 h-4" />
          <span className="mr-1 text-subtitle">{event.dateTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;
