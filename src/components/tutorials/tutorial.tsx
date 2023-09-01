'use client'

import { CSSProperties } from 'react';
import { TutorialInfo } from '../../interfaces/tutorial';
import useScreenSize, { screenSizes } from '../../services/screen-size/use';
import { Console } from '../console/console';
import NameLister from '../console/name-lister';
import Image from '../image';
import Markdown from '../markdown';
import * as style from './tutorial.css';

interface TutorialProps {
  config: TutorialInfo;
  color: string[];
  side: 'left' | 'right';
}

export const Tutorial = (props: TutorialProps) => {
  const {
    state: { screenSize }
  } = useScreenSize();
  const largeScreen = screenSize >= screenSizes['lg'];

  // We put things in reverse if right side is indicated, but only on large screens
  const reverse = props.side === 'right' && largeScreen;
  const grad = !reverse ? props.color.slice().reverse() : props.color;

  const headerStyle: CSSProperties = {
    background: `linear-gradient(100deg, ${grad[0]} , ${grad[1]})`,
    textAlign: reverse ? 'left' : 'right'
  };

  const description = props.config.description
    ? props.config.description
    : 'Description coming soon!';

  const data = [
    props.config.image ? (
      <div key="image" className={style.img}>
        <Image
          src={props.config.image}
          width={250}
          height={250}
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
      <div
        className="d-flex"
        style={{ justifyContent: reverse ? 'flex-end' : 'flex-start' }}
      >
        <h3 className={style.tutorialHeader} style={headerStyle}>
          {props.config.name}
        </h3>
      </div>
      <div className={style.row}>{reverse ? data.reverse() : data}</div>
    </div>
  );
};
