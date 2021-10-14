interface EventProps {
    name: string;
    time: string;
    duration: string;
    lineHeight: number;
    gap: number;
}

export const Event = (props: EventProps) => {
    const hrMin = props.duration.split(":")
    const hr = Number(hrMin[0])
    const min = Number(hrMin[1])
    const height = props.lineHeight * (hr + (min / 60)) - props.gap;
    return (
        <div className="event" style={{height: height, marginBottom: props.gap}}>
            <p className="event-name">{props.name}</p>
            <p className="event-time">{to12Hr(props.time)}</p>
        </div>
    )
}

const to12Hr = (time: string) => {
    const hrMin = time.split(":");
    const hr = (Number(hrMin[0]) - 1) % 12 + 1;
    return `${hr}:${hrMin[1]}`;
}