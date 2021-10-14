interface WhiteBoxProps {
    children: React.ReactNode
}

export const WhiteBox = (props: WhiteBoxProps) => (
    <div className="white-box">
        <div className="container-lg">
            <div className="col">
                {props.children}
            </div>
        </div>
    </div>
)