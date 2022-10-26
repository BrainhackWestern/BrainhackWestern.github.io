import { Day } from "./day";
import { GenericEvent, ScheduleConfig } from "../../interfaces/schedule";
import useScreenSize, { screenSizes } from "../../services/screen-size/use";
import style from "../../styles/globals.css"


interface ScheduleProps {
    lineHeight: number;
    config: ScheduleConfig<GenericEvent>;
    show: boolean;
    // calendar: ScheduleDay[];
}

type TimeCode = "AM" | "PM"


export const Schedule = (props: ScheduleProps) => {
    const { state: { screenSize } } = useScreenSize();
    const largeScreen = screenSize >= screenSizes['xl']
    const lineHeight = props.lineHeight;
    const config = props.config;
    const startTimeCode: TimeCode = config.startTime < 12 ? "AM" : "PM";

    const hourLines = [...Array(config.endTime - config.startTime).keys()].map(i => {
        // Convert from 24-hr to 12-hr time
        const time = (i + config.startTime - 1) % 12 + 1;
        let timeCode: string

        if (i === 0) {
            timeCode = ` ${startTimeCode}`;
        } else if (time === 12 && startTimeCode === "AM") {
            timeCode = " PM";
        } else {
            timeCode = "";
        }

        return (
            <div key={time} className="hour-line d-flex flex-column justify-content-end" style={{
                height: lineHeight,
                top: lineHeight * i
            }}>
                <span>{`${time}:00${timeCode}`}</span>
                <hr/>
            </div>
        )
    })


    const calendar = props.config.days;
    const numLines = hourLines.length;

    const numDays = calendar.length;

    const scheduleMultiplier = largeScreen ? 0 : 1;
    const scheduleHeight = (numLines + 1) * lineHeight;

    const days = calendar.map(day => {
        const date = new Date(day.year, day.month - 1, day.day)
        return <Day
            key={date.toString()}
            date={date}
            startTime={config.startTime}
            lineHeight={lineHeight}
            events={day.events}
            height={scheduleHeight}
        />
    })



    return props.show ?
        <div id="schedule" className={style.home.contentSpace}>
            <div className="container-lg">
                <h2>Schedule</h2>
            </div>
            <div className="schedule" style={{height: scheduleHeight * Math.max(1, numDays * scheduleMultiplier)}}>
                {
                    [...Array(numDays).keys()].filter(i => {
                        return !i || !largeScreen
                    }).map(i => (
                        <div key={i} className="hour-lines" style={{
                            height: scheduleHeight,
                            top: scheduleHeight * i
                        }}>
                            {hourLines}
                        </div>
                    ))
                }
                <div
                    className={[
                        "days",
                        "d-flex",
                        "flex-column",
                        "flex-xl-row",
                        "justify-content-start",
                        "justify-content-xl-center",
                        "align-items-end",
                        "align-items-sm-center",
                        "align-items-xl-start"
                    ].join(" ")}
                >
                    {days}
                </div>
            </div>
        </div> : null
}
