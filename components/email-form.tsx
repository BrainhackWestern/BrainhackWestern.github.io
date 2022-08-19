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
        props.setWaiting(true);
        if (!validate(email)) {
            props.setValidity(false);
            return;
        }
        props.setValidity(true);
        setTimeout(() => {
            const data = {
                email: email
            }
            console.log("Submitting!");
            clearStatuses();
            props.setSubmitted(true);
        }, 5000)
        // fetch("/api/email-signup", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // }).then(reponse => {

        // }).catch(reason => {

        // });
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
