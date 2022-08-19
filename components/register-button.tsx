import { useState } from "react";
import { Button } from "./button"
import { Console } from "./console";
import EmailForm from "./email-form";
import { MsgCard } from "./msg-card"
import { UpdatesSignup } from "./updates-signup";

interface RegisterButtonProps {
    status: "unopened" | "open" | "closed";
    alignment?: "left" | "center";
    url?: string;
}

export const RegisterButton = (props: RegisterButtonProps) => {
    const [ validEmail, setValidEmail ] = useState(true);
    const [ submittedEmail, setSubmittedEmail ] = useState(false);
    const [ submissionError, setSubmissionError ] = useState(false);
    const alignClass = (
        props.alignment == "left" ?
            "align-self-lg-start" :
            "align-self-lg-center"
    ) + " align-self-center";


    return (
        <div className={alignClass}>
            {
                (() => {
                    if (props.status === "open" && props.url !== undefined) {
                        return (
                            <Button target={props.url}>
                                Register Now
                            </Button>
                        )
                    } else if (props.status === "unopened") {
                        return(
                            <UpdatesSignup/>
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