interface WhiteBoxProps {
    children: React.ReactNode
}

export const Button = (props: WhiteBoxProps) => {
    return (
        <button className="button">
            <span>{props.children}</span>
        </button>
    )
}