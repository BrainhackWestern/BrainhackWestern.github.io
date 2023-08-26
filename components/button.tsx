import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}

const LinkIfTarget = ({
  target,
  children
}: {
  target?: string;
  children: React.ReactChild;
}) => {
  return target ? (
    <Link href={target} legacyBehavior>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

export const Button = (props: ButtonProps) => {
  return (
    <LinkIfTarget target={props.target}>
      <a className={['button', props.className ?? ''].join(' ')}>
        <div className="inner">
          <span>{props.children}</span>
        </div>
      </a>
    </LinkIfTarget>
  );
};
