import { useState } from 'react';

import EmailForm from './email-form';
import { Loading } from './loading';

export const UpdatesSignup = ({ target }: { target: string }) => {
  const [validEmail, setValidEmail] = useState(true);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submissionError, setSubmissionError] = useState<
    'local' | 'server' | null
  >(null);
  const [waiting, setWaiting] = useState(false);

  const errorMessages = {
    local: 'Email could not be submitted: unable to reach server',
    server:
      'Email could not be submitted: internal server error. Please try again later'
  };

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
          <span className="red">{errorMessages[submissionError]}</span>
        </>
      ) : null}
      {waiting ? (
        <>
          <br />
          <Loading />
        </>
      ) : null}
    </>
  );
};
