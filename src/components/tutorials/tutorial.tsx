import { CSSProperties } from 'react';
import { TutorialInfo } from '../../interfaces/tutorial';
import { Console } from '../console/console';
import NameLister from '../console/name-lister';
import Image from '../image';
import Markdown from '../markdown';
import Reversable from '../reversable';
import * as style from './tutorial.css';
import ReversableHeader from '../reversable/reversable-header';
import ReversableRow from '../reversable/reversable-row';

interface TutorialProps {
  config: TutorialInfo;
  color: string[];
  side: 'left' | 'right';
}

export const Tutorial = (props: TutorialProps) => {
  // We put things in reverse if right side is indicated, but only on large screens
  const makeHeaderStyle = (reverse: boolean): CSSProperties => {
    const grad = reverse ? props.color.slice().reverse() : props.color
    return {
      background: `linear-gradient(100deg, ${grad[0]} , ${grad[1]})`,
      textAlign: reverse ? 'left' : 'right'
    }
  }
  const headerStyle: [CSSProperties, CSSProperties] = [
    makeHeaderStyle(false),
    makeHeaderStyle(true)
  ]

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
          style={{ objectFit: 'contain' }}
          alt=""
        />
      </div>
    ) : null,
    <Console key="description" className={style.description}>
      <Markdown>{description}</Markdown>
      <NameLister
        heading="Organizer"
        names={props.config.organizer}
        headingClassName="green"
      />
      {props.config.panelists ? (
        <NameLister
          heading="Panelist"
          names={props.config.panelists}
          bulletedList
          headingClassName="blue"
        />
      ) : null}
    </Console>
  ];

  return (
    <div id={props.config.id} className={style.tutorial}>
      <Reversable reversed={props.side === 'right'} minSize='lg'>
        <ReversableHeader className={style.tutorialHeader} style={headerStyle}>
          {props.config.name}
        </ReversableHeader>
        <ReversableRow contents={data} className={style.row} />
      </Reversable>
    </div>
  );
};
