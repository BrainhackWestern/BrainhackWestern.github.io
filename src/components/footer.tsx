import Row from './layout/row';
import { SiteConfig } from '../interfaces/site-config';
import Content from './content';
import style from './footer.css';
import ObfuscateClient from './obfuscate-client';
import Link from 'next/link';
import { getCurrentYear } from '../lib/data';

interface FooterProps {
  organizers: string[];
  twitterUrl?: string;
  displayTwitter: boolean;
}

export const getFooterProps = (config: SiteConfig) => {
  return {
    organizers: config.organizers,
    twitterUrl: config.twitterUrl,
    displayTwitter: config.displaySections.twitterFeed ?? true,
  };
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className={style.footer}>
      <Content fluid="lg">
        <Row>
          <div className="col-lg-6 d-flex flex-column justify-content-start align-items-start">
            <h3>Organizers</h3>
            <p className="organizers">{props.organizers.join(', ')}</p>
          </div>
          {props.displayTwitter && props.twitterUrl ? (
            <div className="col-lg-6 d-flex flex-column justify-content-between align-items-center">
              <p suppressHydrationWarning>
                <Link
                  className="twitter-timeline"
                  data-dnt="true"
                  data-theme="light"
                  href={props.twitterUrl}
                >
                  Tweets by UWOBrainhack
                </Link>{' '}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></script>
              </p>
            </div>
          ) : null}
        </Row>
        <h3 id="contact">Contact</h3>
        <ObfuscateClient email="brainhack.western@gmail.com" />
        <p className={style.copyright}>
          Copyright © {getCurrentYear()} Brainhack Western
        </p>
      </Content>
    </footer>
  );
};

export default Footer;
