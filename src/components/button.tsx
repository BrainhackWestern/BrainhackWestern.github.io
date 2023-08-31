import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}

const LinkIfTarget = ({
  target,
  className,
  children
}: {
  target?: string;
  className?: string
  children: React.ReactNode;
}) => {
  return target ? (
    <Link href={target} className={className}>
      {children}
    </Link>
  ) : (
    <a className={className}>{children}</a>
  );
};

export const Button = (props: ButtonProps) => {
  return (
    <LinkIfTarget target={props.target} className={['button', props.className ?? ''].join(' ')}>
      <div className="inner">
        <span>{props.children}</span>
      </div>
    </LinkIfTarget>
  );
};
