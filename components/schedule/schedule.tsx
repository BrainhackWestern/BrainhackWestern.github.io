import { Component } from "react";
import { ScheduleConfig } from '../../interfaces/site-config'
import { Day } from "./day";
import { debounce } from 'ts-debounce';


interface ScheduleProps {
    lineHeight: number;
    config: ScheduleConfig
}

interface ScheduleState {
    largeScreen: boolean
}

type TimeCode = "AM" | "PM"


export class Schedule extends Component<ScheduleProps, ScheduleState> {

    constructor(props: ScheduleProps) {
        super(props);
        this.handleResize = debounce(this.handleResize.bind(this), 100);
        this.state = {largeScreen: false};
    }

    componentDidMount() {
        this.handleResize()
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            largeScreen: window.innerWidth >= 992 ? true : false
        })
    }

    render() {
        const lineHeight = this.props.lineHeight;
        const config = this.props.config;
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
        const numLines = hourLines.length;

        const days = config.days.map(day => {
            const date = new Date(day.year, day.month - 1, day.day)
            return <Day key={date.toString()} date={date} lineHeight={lineHeight} events={day.events} />
        })

        const numDays = days.length;

        const scheduleMultiplier = this.state.largeScreen ? 0 : 1;
        const scheduleHeight = (numLines + 1) * lineHeight;

        return <>
            <div className="schedule" style={{height: scheduleHeight * Math.max(1, numDays * scheduleMultiplier)}}>
                {
                    [...Array(numDays).keys()].filter(i => {
                        return !i || !this.state.largeScreen
                    }).map(i => (
                        <div key={i} className="hour-lines" style={{
                            height: scheduleHeight,
                            top: scheduleHeight * i
                        }}>
                            {hourLines}
                        </div>
                    ))
                }
                <div className="days d-flex flex-column flex-lg-row justify-content-start justify-content-lg-center align-items-center align-items-lg-start">
                    {days}
                </div>
            </div>

        </>
    }
}
