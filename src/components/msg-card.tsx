import style from '../styles/vanilla/msg-card.css';

interface MsgCardProps {
  className?: string;
  children: React.ReactNode;
}

export const MsgCard = (props: MsgCardProps) => {
  return (
    <div className={`${style.msgCard} ${props.className ?? ''}`}>
      <span>{props.children}</span>
    </div>
  );
};
