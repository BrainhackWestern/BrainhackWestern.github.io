import styles from "../styles/vanilla/whitebox.css"
interface WhiteBoxProps {
    className?: string;
    children: React.ReactNode;
}

export const WhiteBox = (props: WhiteBoxProps) => (
    <div className={[styles.whitebox, props.className ?? ''].join(' ')}>
        <div className="container-lg">
            <div className="col">
                {props.children}
            </div>
        </div>
    </div>
)