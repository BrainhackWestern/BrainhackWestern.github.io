import { Registration } from '../interfaces/site-config';
import { getRegistrationStatus } from '../lib/data';
import { joinStyles } from '../lib/utils';
import { Button } from './button';
import { Console } from './console/console';
import { MsgCard } from './msg-card';
import { UpdatesSignup } from './updates-signup';
import { DateTime } from 'luxon';
import Link from 'next/link';

interface RegisterButtonProps {
  eventTimespan?: string;
  settings: Registration;
  alignment?: 'left' | 'center';
  className?: string;
  large?: boolean;
  discordUrl?: string;
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
          const formatDeadline = (date: typeof settings.closeDate) => {
            if (!date) return null;
            const d = DateTime.fromObject(date, { zone: 'America/Toronto' });
            return d.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });
          };
          const deadline = formatDeadline(settings.closeDate);
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                className={joinStyles([props.className, props.large ? 'large-button' : null])}
                target={settings.url}
              >
                Register Now
              </Button>
              {deadline && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.5em 1rem',
                    backgroundColor: 'rgba(240, 240, 240, 0.85)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
                    Closes on <strong>{deadline}</strong>
                  </p>
                </div>
              )}
            </div>
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
          return props.discordUrl ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MsgCard>Registration is closed</MsgCard>
              <div style={{ marginTop: '1rem' }}>
                <Link
                  href={props.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(88, 101, 242, 0.85)',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Join our Discord
                </Link>
              </div>
            </div>
          ) : (
            <MsgCard>Registration is closed</MsgCard>
          );
        }
      })()}
    </div>
  );
};
