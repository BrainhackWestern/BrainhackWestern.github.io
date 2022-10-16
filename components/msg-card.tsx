import style from '../styles/vanilla/msg-card.css'
interface MsgCardProps {
    children: React.ReactNode
}

export const MsgCard = (props: MsgCardProps) => {
    return (
        <div className={style.msgCard}>
            <span>{props.children}</span>
        </div>
    )
}