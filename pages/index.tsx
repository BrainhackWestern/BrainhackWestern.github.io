import { pipeInto } from 'ts-functional-pipe';

import type { InferGetStaticPropsType } from 'next';

import { AboutRow } from '../components/about-row';
import { Button } from '../components/button';
import Footer, { getFooterProps } from '../components/footer';
import Image from '../components/image';
import { NavBar } from '../components/navbar';
import { RegisterButton } from '../components/register-button';
import { Schedule } from '../components/schedule/schedule';
import { TutorialList } from '../components/tutorials/tutorial-list';
import { WhiteBox } from '../components/white-box';
import main_logo from '../public/img/logo-2023-splash.png';
import dollar_signs from '../public/img/dollar_signs.png';
import global_logo from '../public/img/global_logo.png';
import hack from '../public/img/hack.png';
import learn_skillz from '../public/img/learn_skillz_cropped.png';
import paper from '../public/img/paper.png';
import painterly from '../public/img/painterly_brain.png';
import upvote from '../public/img/upvote.png';
import styles from '../styles/globals.css';
import {
  inferRegistrationStatus,
  linkScheduleEvents,
  readCalendar,
  readConfig
} from '../utils/data';
import { Helmet } from 'react-helmet';

export const getStaticProps = async () => {
  const config = await readConfig();
  // const calendar = await readCalendar();

  return {
    props: {
      config: await pipeInto(
        config,
        readCalendar,
        async (c) => linkScheduleEvents(await c),
        async (c) => inferRegistrationStatus(await c)
      )
      // calendar
    }
  };
};

const Home = ({
  config
}: // calendar
InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.home.app}>
      <Helmet>
        <title>{`Brainhack Western ${config.event.year}`}</title>
        <meta
          name="description"
          content={
            'Western Brainhack brings together researchers and trainees of ' +
            'all backgrounds to collaborate on open science projects in ' +
            'neuroimaging and neuroscience.'
          }
        />
      </Helmet>

      <NavBar
        displaySections={config.displaySections}
        splashMode={true}
        registrationButton={
          config.registration.status === 'open' ? (
            <RegisterButton settings={config.registration} />
          ) : null
        }
      />

      <div className={styles.home.splash}>
        <Image
          src={paper}
          style={{ position: 'absolute', height: '100vh', width: '100vw' }}
          alt=""
        />
        <div className={styles.home.window}>
          <div className={styles.home.backgroundImg}>
            <Image
              src={painterly}
              alt=""
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.home.titleCol.container}>
            <div className="flex-fill"></div>
            <div className="flex-fill"></div>
            <div>
              <RegisterButton
                settings={config.registration}
                eventTimespan={config.event.eventTimespan}
                className={styles.home.titleCol.button}
                alignment="center"
              />
            </div>
            <div className="flex-fill"></div>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <div className="logo">
                <Image
                  src={main_logo}
                  width={406}
                  height={186}
                  alt="Western Brainhack 2022"
                />
                <div className={styles.logo.dates}>
                  {config.event.eventTimespan}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhiteBox>
        <p>
          Western Brainhack brings together researchers and trainees of all
          backgrounds to collaborate on open science projects in neuroimaging
          and neuroscience.
        </p>
      </WhiteBox>

      <div id="about" className={styles.about.container}>
        <AboutRow img={upvote} imgClass="upvote-img" title="Pitch your project">
          Submit your project ideas online, then pitch them to your fellow
          attendees to recruit others to your team.
          <br />
          <br />
          <div className={styles.home.center}>
            <Button target="https://github.com/BrainhackWestern/BrainhackWestern.github.io/wiki/Projects">
              {config.registration.status === 'unopened'
                ? 'View Previous Project Proposals'
                : 'View Project Proposals'}
            </Button>
          </div>
        </AboutRow>
        <AboutRow img={learn_skillz} title="Learn new skills" reverse={true}>
          Attend tutorials to learn new neuroscience tools and techniques from
          the experts.
          <br />
          <br />
          {config.displaySections.tutorial ? (
            <div className={styles.home.center}>
              <Button target="#tutorials">View Tutorials</Button>
            </div>
          ) : (
            'Check back soon to see what tutorials will be offered!'
          )}
        </AboutRow>
        <AboutRow img={hack} title="Hack!!">
          Solve real-world problems while sharpening your skills!
        </AboutRow>
      </div>

      <WhiteBox>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <p>
              Brainhack Western {config.event.year} is an official satellite
              event of&nbsp;
              <a
                href="https://brainhack.org/index.html"
                title="Brainhack Global"
              >
                Brainhack Global
              </a>
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{ maxWidth: '300px' }}>
              <Image
                src={global_logo}
                alt=""
                style={{ objectFit: 'contain', height: 'unset' }}
              />
            </div>
          </div>
        </div>
      </WhiteBox>

      <div className={`${styles.home.contentSpace} container-lg`}>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <div>
              <h2>Cost: ${config.registration.cost}</h2>
              <p>Includes on-site meals, snacks, and coffee!</p>
            </div>
            <RegisterButton
              settings={config.registration}
              alignment="center"
              eventTimespan={config.event.eventTimespan}
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{ maxWidth: '300px' }}>
              <Image
                src={dollar_signs}
                alt=""
                style={{ objectFit: 'contain', height: 'unset' }}
              />
            </div>
          </div>
        </div>
      </div>

      <Schedule
        config={config.schedule}
        // calendar={calendar}
        lineHeight={120}
        show={config.displaySections.schedule ?? true}
      />

      <TutorialList
        tutorials={config.tutorials}
        show={config.displaySections.tutorial ?? true}
      />

      <div id="location" className={`${styles.home.contentSpace} container-lg`}>
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-start align-items-start">
            <h2>Location</h2>
            <address>
              <a href={config.location.url} title={config.location.name}>
                {config.location.name}
              </a>
              <br />
              {config.location.street}
              <br />
              {config.location.city}, {config.location.province}
            </address>
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-start align-items-start">
            <iframe
              className={styles.home.mapFrame}
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:${config.location.maps_id}&key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}`}
            ></iframe>
          </div>
        </div>
      </div>

      <WhiteBox>
        <h2 id="sponsors">Sponsors</h2>
        <div className="row d-flex justify-content-center justify-content-lg-start align-items-center">
          {config.sponsors.map((sponsor) => (
            <div key={sponsor.name} className={styles.sponsor.sponsor}>
              <a
                href={sponsor.url}
                title={sponsor.name}
                target="_blank"
                rel="noreferrer"
                className={styles.sponsor.sponsorLink}
              >
                <Image
                  src={sponsor.img}
                  width={Math.min(250, sponsor.dims.width ?? 250)}
                  height={Math.min(150, sponsor.dims.height ?? 250)}
                  alt={sponsor.name}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          ))}
        </div>
      </WhiteBox>

      <Footer {...getFooterProps(config)} />
    </div>
  );
};

export default Home;
