interface ButtonProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={["button", props.className ?? ""].join(" ")}
      onClick={(e) => {
        e.preventDefault();
        if (props.target) {
          window.location.href = props.target;
        }
      }}
    >
      <div className="inner">
        <span>{props.children}</span>
      </div>
    </button>
  );
};
