import Obfuscate from 'react-obfuscate';

import { ExpandedConfig, SiteConfig } from '../interfaces/site-config';

interface FooterProps {
  organizers: string[];
  twitterUrl?: string;
  displayTwitter: boolean;
  year: number;
}

export const getFooterProps = (config: ExpandedConfig) => {
  return {
    organizers: config.organizers,
    twitterUrl: config.twitterUrl,
    displayTwitter: config.displaySections.twitterFeed ?? true,
    year: config.currentYear
  };
};

export const Footer = (props: FooterProps) => {
  return (
    <footer>
      <div className="content-space container-lg">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-start align-items-start">
            <h3>Organizers</h3>
            <p className="organizers">{props.organizers.join(', ')}</p>
          </div>
          {props.displayTwitter && props.twitterUrl ? (
            <div className="col-lg-6 d-flex flex-column justify-content-between align-items-center">
              <p>
                <a
                  className="twitter-timeline"
                  data-dnt="true"
                  data-theme="light"
                  href={props.twitterUrl}
                >
                  Tweets by UWOBrainhack
                </a>{' '}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </p>
            </div>
          ) : null}
        </div>
        <h3 id="contact">Contact</h3>
        <Obfuscate email="brainhack.western@gmail.com" />
        <p className="copyright">Copyright © {props.year} Brainhack Western</p>
      </div>
    </footer>
  );
};

export default Footer;
