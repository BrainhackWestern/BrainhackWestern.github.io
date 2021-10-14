import { ReactNode } from "react";
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
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const dayName = days[props.date.getDay()];
    const month = months[props.date.getMonth()];
    const date = props.date.getDate();
    const dateString = `${dayName}, ${month} ${date}`;

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