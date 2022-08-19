interface ConsoleProps {
    children: React.ReactNode
}

export const Console = (props: ConsoleProps) => {
    return (
        <div className="console">
            <span>{props.children}</span>
        </div>
    )
}