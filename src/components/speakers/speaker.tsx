import { CSSProperties } from 'react';
import { InvitedSpeakerInfo } from '../../interfaces/speaker';
import { Console } from '../console/console';
import Image from '../image';
import Markdown from '../markdown';
import Reversable from '../reversable';
import ReversableHeader from '../reversable/reversable-header';
import ReversableRow from '../reversable/reversable-row';
import * as style from './speaker.css';

interface SpeakerProps {
  config: InvitedSpeakerInfo;
  color: string[];
  side: 'left' | 'right';
}

export const Speaker = (props: SpeakerProps) => {
  const renderLine = (heading: string, value?: string | string[]) => {
    if (!value) {
      return null;
    }
    const text = Array.isArray(value) ? value.join(', ') : value;
    return (
      <div>
        <span className="green">{heading}: </span>
        <span>{text}</span>
      </div>
    );
  };

  const makeHeaderStyle = (reverse: boolean): CSSProperties => {
    const grad = reverse ? props.color.slice().reverse() : props.color;
    return {
      background: `linear-gradient(100deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)), linear-gradient(100deg, ${grad[0]} , ${grad[1]})`,
      textAlign: reverse ? 'left' : 'right'
    };
  };

  const headerStyle: [CSSProperties, CSSProperties] = [
    makeHeaderStyle(false),
    makeHeaderStyle(true)
  ];

  const description = props.config.description
    ? props.config.description
    : 'Description coming soon!';

  const data = [
    props.config.image ? (
      <div key="image" className={style.img}>
        <Image
          src={props.config.image}
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          alt={props.config.speaker
            ? Array.isArray(props.config.speaker)
              ? props.config.speaker.join(', ')
              : props.config.speaker
            : props.config.name}
        />
      </div>
    ) : null,
    <Console key="description" className={style.description}>
      {renderLine('Invited Speaker', props.config.speaker)}
      {renderLine('Affiliation', props.config.affiliation)}
      <Markdown>{description}</Markdown>
    </Console>
  ];

  return (
    <div id={props.config.id} className={style.speaker}>
      <Reversable reversed={props.side === 'right'} minSize="lg">
        <ReversableHeader className={style.speakerHeader} style={headerStyle}>
          {props.config.name}
        </ReversableHeader>
        <ReversableRow contents={data} className={style.row} />
      </Reversable>
    </div>
  );
};
