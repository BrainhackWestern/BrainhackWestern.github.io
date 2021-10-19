import { Button } from "./button"
import { MsgCard } from "./msg-card"

interface RegisterButtonProps {
    status: "unopened" | "open" | "closed";
    alignment?: "left" | "center";
}

export const RegisterButton = (props: RegisterButtonProps) => {
    const alignClass = (
        props.alignment == "left" ? 
            "align-self-lg-start" : 
            "align-self-lg-center"
    ) + " align-self-center";
    
    return (
        <div className={alignClass}>
            {
                (() => {
                    if (props.status === "open") {
                        return (
                            <Button>
                                Register Now
                            </Button>
                        )
                    } else if (props.status === "unopened") {
                        return(
                            <MsgCard>
                                Registration opens soon!
                            </MsgCard>
                        )
                    } else {
                        return (
                            <MsgCard>
                                Registration is closed
                            </MsgCard>
                        )
                    }
                })()
            }
        </div>
    )
    
}