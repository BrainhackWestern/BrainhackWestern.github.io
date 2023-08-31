interface ConsoleProps {
  children: React.ReactNode;
  className?: string
}

export const Console = (props: ConsoleProps) => {
  return (
    <div className={["console", props.className ?? ''].join(' ')}>
      <span>{props.children}</span>
    </div>
  );
};
