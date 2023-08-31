import * as style from './msg-card.css';

interface MsgCardProps {
  className?: string;
  children: React.ReactNode;
}

export const MsgCard = (props: MsgCardProps) => {
  return (
    <div className={`${style.msgCard} ${props.className ?? ''}`}>
      <span className={style.content}>{props.children}</span>
    </div>
  );
};
