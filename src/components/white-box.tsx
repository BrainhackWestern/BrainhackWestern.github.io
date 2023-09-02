import Container from './layout/container';
import styles from './white-box.css';

interface WhiteBoxProps {
  className?: string;
  children: React.ReactNode;
}

export const WhiteBox = (props: WhiteBoxProps) => (
  <div className={[styles.whitebox, props.className ?? ''].join(' ')}>
    <Container fluid="lg">
      <div className="col">{props.children}</div>
    </Container>
  </div>
);
