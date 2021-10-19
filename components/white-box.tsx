interface WhiteBoxProps {
    className?: string;
    children: React.ReactNode;
}

export const WhiteBox = (props: WhiteBoxProps) => (
    <div className={"white-box " + props.className}>
        <div className="container-lg">
            <div className="col">
                {props.children}
            </div>
        </div>
    </div>
)