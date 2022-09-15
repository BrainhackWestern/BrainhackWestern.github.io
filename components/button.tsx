interface WhiteBoxProps {
    children: React.ReactNode;
    target?: string;
}

export const Button = (props: WhiteBoxProps) => {
    return (
        <button className="button" onClick={(e) => {
            e.preventDefault();
            if (props.target) {
                window.location.href=props.target;
            }
        }}>
            <span>{props.children}</span>
        </button>
    )
}