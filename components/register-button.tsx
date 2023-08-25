import { Registration } from '../interfaces/site-config';
import { Button } from './button';
import { Console } from './console';
import { MsgCard } from './msg-card';
import { UpdatesSignup } from './updates-signup';

interface RegisterButtonProps {
  settings: Registration;
  alignment?: 'left' | 'center';
  className?: string;
}

export const RegisterButton = (props: RegisterButtonProps) => {
  const settings = props.settings;
  const alignClass =
    props.alignment == 'left' ? 'align-self-lg-start' : 'align-self-lg-center';

  return (
    <div className={alignClass}>
      {(() => {
        if (settings.status === 'open' && settings.url) {
          return (
            <Button
              className={`${props.className} large-button`}
              target={settings.url}
            >
              Register Now
            </Button>
          );
        } else if (settings.status === 'unopened') {
          return (
            <Console>
              <span className="blue"># Coming soon</span>
              <br />
              <span>Nov 30 - Dec 2</span>
              {settings.emailSignupTarget ? (
                <>
                  <br />
                  <br />
                  <UpdatesSignup target={settings.emailSignupTarget} />
                </>
              ) : null}
            </Console>
          );
        } else {
          return <MsgCard>Registration is closed</MsgCard>;
        }
      })()}
    </div>
  );
};
