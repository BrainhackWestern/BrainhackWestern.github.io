import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import EmailForm from "./email-form";

export const UpdatesSignup = ({ target }: { target: string }) => {
  const [validEmail, setValidEmail] = useState(true);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const loader: MutableRefObject<null | HTMLSpanElement> = useRef(null);
  const loadingInterval = useRef(0);

  useEffect(() => {
    const current = loader.current;
    if (current) {
      loadingInterval.current = window.setInterval(() => {
        current.innerHTML += ".";
      }, 1000);
    } else {
      window.clearInterval(loadingInterval.current);
    }
  });
  return (
    <>
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
        target={target}
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
    </>
  );
};
