import { InvitedSpeakerInfo } from '../../interfaces/speaker';
import { iterator, newColorGradient } from '../../lib/color-tools';
import Content from '../content';
import { Speaker } from './speaker';
import * as style from './speaker-list.css';

interface SpeakerListProps {
  speakers: InvitedSpeakerInfo[];
  show: boolean;
}

export const SpeakerList = ({ speakers, show }: SpeakerListProps) => {
  if (!show || !speakers.length) {
    return null;
  }

  const colors = iterator(newColorGradient('#00aed4', speakers.length));
  const sides: ('left' | 'right')[] = ['left', 'right'];

  return (
    <Content id="invited-speakers" fluid="lg">
      <h2>Invited Speakers</h2>
      <div className={style.speakerList}>
        {speakers.map((speaker, i) => (
          <Speaker
            key={speaker.id}
            config={speaker}
            color={colors.next().value ?? ['#00aed4', '#00aed4']}
            side={sides[i % 2]}
          />
        ))}
      </div>
    </Content>
  );
};
