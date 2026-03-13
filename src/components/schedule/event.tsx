import Link from 'next/link';
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
  green: '#69b971',
  red: '#e20b81',
  blue: '#3a84b9'
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
  const eventColor = props.color
    ? props.color in colorLookup
      ? colorLookup[props.color as keyof typeof colorLookup]
      : props.color
    : undefined;

  const el = (
    <div
      className={style.event}
      style={{
        height: height,
        top: top,
        left: `${left + leftPadding}%`,
        right: `${right + rightPadding}%`,
        ...(eventColor
          ? { backgroundColor: darkenColor(eventColor, 0.14) }
          : background)
      }}
    >
      <p className={style.eventName}>{props.name}</p>
      {room_str ? <p className={style.room}>{room_str}</p> : null}

      {props.link ? <p className={style.moreInfo}>more info</p> : null}
    </div>
  );

  return props.link ? (
    <Link href={props.link} className={style.link}>
      {el}
    </Link>
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

const darkenColor = (color: string, amount: number) => {
  if (!color.startsWith('#')) {
    return color;
  }

  const hex = color.slice(1);
  const normalized =
    hex.length === 3
      ? hex
          .split('')
          .map((value) => `${value}${value}`)
          .join('')
      : hex;

  if (normalized.length !== 6) {
    return color;
  }

  const adjusted = [0, 2, 4]
    .map((index) => {
      const channel = Number.parseInt(normalized.slice(index, index + 2), 16);
      const darkened = Math.max(0, Math.round(channel * (1 - amount)));
      return darkened.toString(16).padStart(2, '0');
    })
    .join('');

  return `#${adjusted}`;
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
