import { MutableRefObject, useEffect, useReducer, useRef, useState } from "react";
import { Console } from "./console";
import EmailForm from "./email-form";

export const UpdatesSignup = () => {
  const [validEmail, setValidEmail] = useState(true);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const loader: MutableRefObject<null | HTMLSpanElement> = useRef(null);
  const loadingInterval = useRef(0);
//   const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const current = loader.current;
    if (current) {
      loadingInterval.current = window.setInterval(() => {
        current.innerHTML += ".";
      }, 1000);
    } else {
      window.clearInterval(loadingInterval.current);
    }
  })
  return (
    <Console>
      <span className="blue"># Coming soon</span>
      <br />
      <span>Nov 30 - Dec 2</span>
      <br />
      <br />
      <span>Get notified when registration opens:</span>
      <br />
      {!validEmail ? (
        <>
          <span className="red">Enter a valid email</span>
          <br />
        </>
      ) : null}
      <span className="yellow">enter email</span>
      <span> &gt; </span>
      <EmailForm
        setValidity={setValidEmail}
        setSubmitted={setSubmittedEmail}
        setError={setSubmissionError}
        setWaiting={setWaiting}
      />
      {submittedEmail ? (
        <>
          <br />
          <span className="green">Email submitted!✨🚀✨</span>
        </>
      ) : null}
      {submissionError ? (
        <>
          <br />
          <span className="red">Email could not be submitted at this time</span>
        </>
      ) : null}
      {waiting ? (
        <>
          <br />
          <span ref={loader}>.</span>
        </>
      ) : null}
    </Console>
  );
};
