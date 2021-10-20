import { ReactNode } from "react";
import formatDate from "../../lib/format-date";
import { Event } from "./event";

interface DayProps {
    date: Date;
    lineHeight: number;
    events: {
        name: string;
        time: string;
        duration: string;
    }[]
}

export const Day = (props: DayProps) => {

    const dateString = formatDate(props.date);
    const events = props.events.map((event, i) => {
        return <Event key={i} name={event.name} time={event.time} duration={event.duration} lineHeight={props.lineHeight} gap={10} />
    });

    return (
        <div className="day-col">
            <div className="day-name d-flex flex-column justify-content-end" style={{height: props.lineHeight}}>
                <h3>{dateString}</h3>
            </div>
            <div className="events">
                {events}
            </div>
        </div>
    )
}