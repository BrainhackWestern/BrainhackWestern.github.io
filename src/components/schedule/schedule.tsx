import { useState } from 'react';
import { GenericEvent, ScheduleConfig } from '../../interfaces/schedule';
import useScreenSize, { screenSizes } from '../../services/screen-size/use';
import { TabSelector } from '../tab-selector';
import { Day } from './day';
import * as styles from './schedule.css'
import Content from '../content';
import { Container } from 'react-bootstrap';

interface ScheduleProps {
  lineHeight: number;
  config: ScheduleConfig<GenericEvent>[];
  show: boolean;
  // calendar: ScheduleDay[];
}

type TimeCode = 'AM' | 'PM';

export const Schedule = (props: ScheduleProps) => {
  const tabs = props.config.map((schedule) => schedule.name);
  const [tab, setTab] = useState(tabs[0]);
  const {
    state: { screenSize }
  } = useScreenSize();
  const largeScreen = screenSize >= screenSizes['xl'];
  const lineHeight = props.lineHeight;

  const makeCalendar = (config: ScheduleConfig<GenericEvent>) => {
    const startTimeCode: TimeCode = config.startTime < 12 ? 'AM' : 'PM';

    const hourLines = [...Array(config.endTime - config.startTime).keys()].map(
      (i) => {
        // Convert from 24-hr to 12-hr time
        const time = ((i + config.startTime - 1) % 12) + 1;
        let timeCode: string;

        if (i === 0) {
          timeCode = ` ${startTimeCode}`;
        } else if (time === 12 && startTimeCode === 'AM') {
          timeCode = ' PM';
        } else {
          timeCode = '';
        }

        return (
          <div
            key={time}
            className={`${styles.hourLine} d-flex flex-column justify-content-end`}
            style={{
              height: lineHeight,
              top: lineHeight * i
            }}
          >
            <span>{`${time}:00${timeCode}`}</span>
            <hr className={styles.hourSep}/>
          </div>
        );
      }
    );

    const calendar = config.days;
    const numLines = hourLines.length;

    const numDays = calendar.length;

    const scheduleMultiplier = largeScreen ? 0 : 1;
    const scheduleHeight = (numLines + 1) * lineHeight;

    const days = calendar.map((day) => {
      const date = new Date(day.year, day.month - 1, day.day);
      return (
        <Day
          key={date.toString()}
          date={date}
          startTime={config.startTime}
          lineHeight={lineHeight}
          events={day.events}
          height={scheduleHeight}
        />
      );
    });

    return {
      days,
      scheduleHeight,
      scheduleMultiplier,
      numDays,
      hourLines
    };
  };

  const calendar = makeCalendar(props.config[tabs.indexOf(tab)]);

  return props.show ? (
    <Content id="schedule" fluid={true}>
      <Container fluid="lg">
        <h2>Schedule</h2>
      </Container>
      <div
        className={styles.schedule}
        style={{
          height:
            calendar.scheduleHeight *
            Math.max(1, calendar.numDays * calendar.scheduleMultiplier)
        }}
      >
        <TabSelector choices={tabs} state={tab} setState={setTab} />
        {[...Array(calendar.numDays).keys()]
          .filter((i) => {
            return !i || !largeScreen;
          })
          .map((i) => (
            <div
              key={i}
              className={styles.hourLines}
              style={{
                height: calendar.scheduleHeight,
                top: calendar.scheduleHeight * i
              }}
            >
              {calendar.hourLines}
            </div>
          ))}
        <div
          className={[
            styles.days,
            'd-flex',
            'flex-column',
            'flex-xl-row',
            'justify-content-start',
            'justify-content-xl-center',
            'align-items-end',
            'align-items-sm-center',
            'align-items-xl-start'
          ].join(' ')}
        >
          {calendar.days}
        </div>
      </div>
    </Content>
  ) : null;
};
