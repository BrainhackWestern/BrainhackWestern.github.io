import { Button } from "./button"
import { MsgCard } from "./msg-card"

interface RegisterButtonProps {
    status: "unopened" | "open" | "closed"
}

export const RegisterButton = (props: RegisterButtonProps) => {
    if (props.status === "open") {
        return (
            <Button>
                Register Now
            </Button>
        )
    } else if (props.status === "unopened") {
        return (
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
    
}