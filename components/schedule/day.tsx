import { GenericEvent } from "../../interfaces/schedule";
import formatDate from "../../lib/format-date";
import { Event } from "./event";

interface DayProps {
    date: Date;
    lineHeight: number;
    startTime: number;
    height: number;
    events: GenericEvent[]
}

export const Day = (props: DayProps) => {

    const dateString = formatDate(props.date);
    const events = props.events.map((event, i) => {
        return <Event
            key={i}
            name={event.name}
            time={event.time}
            dayStartTime={props.startTime}
            duration={event.duration}
            lineHeight={props.lineHeight}
            widthFactor={event.widthFactor ?? 1}
            position={event.position ?? 0}
            padding={10}
            color={event.color}
            link={event.link}
            room={event.room}
        />
    });

    return (
        <div className="day-col" style={{height: props.height}}>
            <div 
                className="day-name d-flex flex-column justify-content-end" 
                style={{height: props.lineHeight}}
            >
                <h3>{dateString}</h3>
            </div>
            <div className="events">
                {events}
            </div>
        </div>
    )
}