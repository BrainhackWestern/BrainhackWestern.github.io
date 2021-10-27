interface EventProps {
    name: string;
    time: string;
    duration: string;
    dayStartTime: number;
    lineHeight: number;
    gap: number;
    id?: string;
    color?: string;
}

export const Event = (props: EventProps) => {
    const height = props.lineHeight * toMin(props.duration) - props.gap;
    const top = props.lineHeight * (toMin(props.time) - props.dayStartTime);
    const background = props.color ? {
        backgroundColor: props.color
    }: {}
    
    const el = (
        <div
            className="event"
            style={{
                height: height,
                top: top,
                ...background
            }}
        >
            <p className="event-name">{props.name}</p>
            <p className="event-time">{to12Hr(props.time)}</p>
        </div>
    )

    return props.id ? <a href={`#${props.id}`}>{el}</a> : el
}

const toMin = (time: string) => {
    const hrMin = time.split(":");
    const hr = Number(hrMin[0]);
    const min = Number(hrMin[1]);
    return hr + (min / 60);
}

const to12Hr = (time: string) => {
    const hrMin = time.split(":");
    const hr = (Number(hrMin[0]) - 1) % 12 + 1;
    return `${hr}:${hrMin[1]}`;
}