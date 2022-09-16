import { Button } from "./button";
import { Console } from "./console";
import { MsgCard } from "./msg-card";
import { UpdatesSignup } from "./updates-signup";

interface RegisterButtonProps {
  status: "unopened" | "open" | "closed";
  alignment?: "left" | "center";
  url?: string;
  emailSignupTarget?: string
}

export const RegisterButton = (props: RegisterButtonProps) => {
  const alignClass =
    (props.alignment == "left"
      ? "align-self-lg-start"
      : "align-self-lg-center") + " align-self-center";

  return (
    <div className={alignClass}>
      {(() => {
        if (props.status === "open" && props.url !== undefined) {
          return <Button target={props.url}>Register Now</Button>;
        } else if (props.status === "unopened") {
          return (
            <Console>
              <span className="blue"># Coming soon</span>
              <br />
              <span>Nov 30 - Dec 2</span>
              {props.emailSignupTarget ? (
                <>
                  <br />
                  <br />
                  <UpdatesSignup target={props.emailSignupTarget} />
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
