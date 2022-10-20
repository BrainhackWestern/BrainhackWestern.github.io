interface ButtonProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <a
      className={['button', props.className ?? ''].join(' ')}
      href={props.target}
    >
      <div className="inner">
        <span>{props.children}</span>
      </div>
    </a>
  );
};
