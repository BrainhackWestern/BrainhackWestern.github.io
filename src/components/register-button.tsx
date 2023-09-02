import { Registration } from '../interfaces/site-config';
import { getRegistrationStatus } from '../lib/data';
import { joinStyles } from '../lib/utils';
import { Button } from './button';
import { Console } from './console/console';
import { MsgCard } from './msg-card';
import { UpdatesSignup } from './updates-signup';

interface RegisterButtonProps {
  eventTimespan?: string;
  settings: Registration;
  alignment?: 'left' | 'center';
  className?: string;
  large?: boolean
}

export const RegisterButton = async (props: RegisterButtonProps) => {
  const settings = props.settings;
  const registrationStatus = await getRegistrationStatus();
  const alignClass =
    props.alignment == 'left' ? 'align-self-lg-start' : 'align-self-lg-center';

  return (
    <div className={alignClass}>
      {(() => {
        if (registrationStatus === 'open' && settings.url) {
          return (
            <Button
              className={joinStyles([props.className, props.large ? 'large-button' : null])}
              target={settings.url}
            >
              Register Now
            </Button>
          );
        } else if (registrationStatus === 'unopened') {
          return (
            <Console>
              <span className="blue"># Coming soon</span>
              <br />
              {props.eventTimespan ? <span>{props.eventTimespan}</span> : null}
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
