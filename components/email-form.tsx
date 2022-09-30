import React, { Dispatch, FormEvent, useState } from "react";
import { validate } from "email-validator";

interface SignupFormProps {
  setValidity: Dispatch<boolean>;
  setSubmitted: Dispatch<boolean>;
  setError: Dispatch<"server" | "local" | null>;
  setWaiting: Dispatch<boolean>;
  target: string;
}

export default function EmailForm(props: SignupFormProps) {
  const [email, setEmail] = useState("");

  const clearStatuses = () => {
    props.setWaiting(false);
    props.setSubmitted(false);
    props.setError(null);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate(email)) {
      props.setValidity(false);
      return;
    }
    props.setWaiting(true);
    props.setValidity(true);
    const data = {
      email: email,
    };
    fetch(props.target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        clearStatuses();
        if (response.ok) {
          props.setSubmitted(true);
        } else {
          props.setError("server");
        }
      })
      .catch((_) => {
        clearStatuses();
        props.setError("local");
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
