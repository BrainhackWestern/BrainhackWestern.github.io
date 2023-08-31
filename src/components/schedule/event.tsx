import styles from '../about-row.css';
import * as style from './event.css';

interface EventProps {
  name: string;
  time: string;
  duration: string;
  dayStartTime: number;
  lineHeight: number;
  widthFactor: number;
  position: number;
  padding: number;
  link?: string;
  color?: string;
  room?: string | string[];
}

const colorLookup = {
  green: '#1f331e',
  red: '#440101',
  blue: '#384C7B'
};

export const Event = (props: EventProps) => {
  const height = props.lineHeight * toMin(props.duration) - props.padding;
  const top = props.lineHeight * (toMin(props.time) - props.dayStartTime);
  const background = props.color
    ? {
        backgroundColor:
          props.color in colorLookup
            ? colorLookup[props.color as 'green' | 'red']
            : props.color
      }
    : {};

  const widthFactor = props.widthFactor;
  const position = props.position;
  const left = proportionalPosition(position, widthFactor);
  const right = proportionalPosition(widthFactor - (1 + position), widthFactor);

  const leftPadding = left ? 1 : 0;
  const rightPadding = right ? 1 : 0;

  const room_str = props.room ? getRoomStr(props.room) : null;

  const el = (
    <div
      className={style.event}
      style={{
        height: height,
        top: top,
        left: `${left + leftPadding}%`,
        right: `${right + rightPadding}%`,
        ...background
      }}
    >
      <p className={style.eventName}>{props.name}</p>
      <p className={style.time}>{to12Hr(props.time)}</p>
      {room_str ? <p className={style.room}>{room_str}</p> : null}

      {props.link ? <p className={style.moreInfo}>more info</p> : null}
    </div>
  );

  return props.link ? (
    <a href={props.link} className={style.link}>
      {el}
    </a>
  ) : (
    el
  );
};

const proportionalPosition = (position: number, width: number) => {
  return (1 / width) * position * 100;
};

const toMin = (time: string) => {
  const hrMin = time.split(':');
  const hr = Number(hrMin[0]);
  const min = Number(hrMin[1]);
  return hr + min / 60;
};

const to12Hr = (time: string) => {
  const hrMin = time.split(':');
  const hr = ((Number(hrMin[0]) - 1) % 12) + 1;
  return `${hr}:${hrMin[1]}`;
};

const getRoomStr = (room: string | string[]) => {
  if (room instanceof Array) {
    return join_br(room);
  }
  return <>{room}</>;
};

const join_br = (items: string[]) => {
  const firstline = items[0];
  const rest = items.slice(1);
  return (
    <>
      {firstline}
      {rest.map((line) => (
        <>
          <br />
          {line}
        </>
      ))}
    </>
  );
};
