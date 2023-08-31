import Image, { StaticImageData } from 'next/image';
import useScreenSize, { screenSizes } from '../services/screen-size/use';
import styles from './about-row.css';
import { Row } from 'react-bootstrap';
import { PropsWithChildren } from 'react';

interface ImageProps {
  imgClass?: string;
  img: StaticImageData;
  title: string;
  reverse?: boolean;
}

export const AboutRow = (props: PropsWithChildren<ImageProps>) => {
  const {
    state: { screenSize }
  } = useScreenSize();
  const largeScreen = screenSize >= screenSizes['lg'];
  const alignClass = props.reverse ? styles.alignRight : styles.alignLeft;
  const content = [
    <div key="image" className={styles.imgWrapper}>
      <div className={styles.img}>
        <Image src={props.img} alt="" style={{ objectFit: 'contain' }} />
      </div>
    </div>,
    <div key="description" className={styles.description}>
      <h2 className={alignClass}>{props.title}</h2>
      <div className={alignClass}>{props.children}</div>
    </div>
  ];
  return (
    <Row className={styles.row}>
      {props.reverse && largeScreen ? content.reverse() : content}
    </Row>
  );
};
