import React, { Dispatch, FormEvent, useState } from "react";
import {validate} from "email-validator";

interface SignupFormProps {
    setValidity: Dispatch<boolean>;
    setSubmitted: Dispatch<boolean>;
    setError: Dispatch<boolean>;
    setWaiting: Dispatch<boolean>;
}

export default function EmailForm(props: SignupFormProps) {
    const [email, setEmail] = useState("");
    
    const clearStatuses = () => {
        props.setWaiting(false);
        props.setSubmitted(false);
        props.setError(false);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!validate(email)) {
            props.setValidity(false);
            return;
        }
        props.setWaiting(true);
        props.setValidity(true);
        const data = {
            email: email
        }
        fetch("https://hook.us1.make.com/hrdtv28jy9i55havi84l6db2xc1ieyol", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(reponse => {
            clearStatuses()
            props.setSubmitted(true)

        }).catch(reason => {
            clearStatuses()
            props.setError(true)

        });
    };

    return (
        <form className="signup-form" onSubmit={onSubmit}>
            <input
                type="text"
                value={email}
                placeholder="█"
                onChange={(evt) => setEmail(evt.target.value)}
            />
        </form>
    );
}
