interface MsgCardProps {
    children: React.ReactNode
}

export const MsgCard = (props: MsgCardProps) => {
    return (
        <div className="msg-card">
            <span>{props.children}</span>
        </div>
    )
}