import Image, { StaticImageData } from 'next/image';
import useScreenSize, { screenSizes } from '../services/screen-size/use';
import styles from '../styles/vanilla/about.css';

interface ImageProps {
  imgClass?: string;
  img: StaticImageData;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export const AboutRow = (props: ImageProps) => {
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
    <div className="row">
      {props.reverse && largeScreen ? content.reverse() : content}
    </div>
  );
};
