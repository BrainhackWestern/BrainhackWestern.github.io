import { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import styles from './about-row.css';
import Image from './image';
import Reversable from './reversable';
import ReversableRow from './reversable/reversable-row';

interface ImageProps {
  imgClass?: string;
  img: StaticImageData;
  title: string;
  reverse?: boolean;
}

export const AboutRow = (props: PropsWithChildren<ImageProps>) => {
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
    <Reversable reversed={props.reverse} minSize='lg' >
      <ReversableRow contents={content} className={styles.row} />

    </Reversable>
  )
};
