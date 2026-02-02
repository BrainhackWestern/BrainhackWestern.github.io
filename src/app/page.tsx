import { Metadata } from 'next';
import Link from 'next/link';
import dollar_signs from '../../public/img/dollar_signs.png';
import global_logo from '../../public/img/global_logo.png';
import hack from '../../public/img/hack.png';
import learn_skillz from '../../public/img/learn_skillz_cropped.png';
import main_logo from '../../public/img/logo-2026-splash.png';
import painterly from '../../public/img/Brainhack_splash_2026.png';
import paper from '../../public/img/back.jpg';
import upvote from '../../public/img/upvote.png';
import { AboutRow } from '../components/about-row';
import { Button } from '../components/button';
import Content from '../components/content';
import Image from '../components/image';
import Col from '../components/layout/col';
import Row from '../components/layout/row';
import Page from '../components/page';
import { RegisterButton } from '../components/register-button';
import { Schedule } from '../components/schedule/schedule';
import Splash from '../components/splash';
import { TutorialList } from '../components/tutorials/tutorial-list';
import { WhiteBox } from '../components/white-box';
import Window from '../components/window';
import {
  getCalendar,
  getCurrentProjectURL,
  getEventYear,
  getRegistrationStatus,
  readConfig,
  isDuringEvent
} from '../lib/data';
import * as styles from './styles.css';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Brainhack Western ${await getEventYear()}`,
    description:
      'Western Brainhack brings together researchers and trainees of ' +
      'all backgrounds to collaborate on open science projects in ' +
      'neuroimaging and neuroscience.'
  };
};

const Home = async () => {
  const config = await readConfig();
  const registrationStatus = await getRegistrationStatus();
  const duringEvent = await isDuringEvent();
  return (
    <Page config={config} splash registrationButton>
      <Splash>
        <Image
          src={paper}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <Window>
          <div className={styles.backgroundImg}>
            <Image
              src={painterly}
              alt=""
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.titleCol.container}>
            <div className={styles.titleCol.containerInner}>
              <div className={styles.titleCol.button}>
                <RegisterButton
                  settings={config.registration}
                  eventTimespan={config.event.eventTimespan}
                  className={styles.titleCol.button}
                  large
                  alignment="center"
                />
                {duringEvent ? (
                  <Button
                    target="https://discord.gg/RAmjjjr6mY"
                    className={[styles.titleCol.button, 'large-button'].join(' ')}
                  >
                    Join us on Discord
                  </Button>
                ) : null}
              </div>
              <div className={styles.titleCol.logo}>
                <div className="logo">
                  <Image
                    src={main_logo}
                    width={406}
                    height={186}
                    alt="Western Brainhack 2025"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <div className={styles.eventDates}>
                    {config.event.eventTimespan}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Window>
      </Splash>

      <WhiteBox>
        <p>
          Western Brainhack brings together researchers and trainees of all
          backgrounds to collaborate on open science projects in neuroimaging
          and neuroscience.
        </p>
      </WhiteBox>

      <Content id="about" fluid="lg">
        <AboutRow img={upvote} imgClass="upvote-img" title="Pitch your project">
          Submit your project ideas online, then pitch them to your fellow
          attendees to recruit others to your team.
          <br />
          <br />
          <div className={styles.center}>
            {await (async () => {
              const projectUrl = await getCurrentProjectURL();
              return projectUrl ? (
                <Button target={projectUrl}>
                  {registrationStatus === 'unopened'
                    ? 'View Previous Project Proposals'
                    : 'View Project Proposals'}
                </Button>
              ) : null;
            })()}
          </div>
          {registrationStatus !== 'unopened' ? (
            <>
              <br />
              <div className={styles.center}>
                <Button target={config.registration.projectPitchUrl}>
                  Pitch Project
                </Button>
              </div>
            </>
          ) : null}
        </AboutRow>
        <AboutRow img={learn_skillz} title="Learn new skills" reverse={true}>
          Attend tutorials to learn new neuroscience tools and techniques from
          the experts.
          <br />
          <br />
          {config.displaySections.tutorial ? (
            <div className={styles.center}>
              <Button target="#tutorials">View Tutorials</Button>
            </div>
          ) : (
            'Check back soon to see what tutorials will be offered!'
          )}
        </AboutRow>
        <AboutRow img={hack} title="Hack!!">
          Solve real-world problems while sharpening your skills!
        </AboutRow>
      </Content>

      <WhiteBox>
        <Row className="align-items-center">
          <Col lg="6">
            <p>
              Brainhack Western {config.event.year} is an official satellite
              event of&nbsp;
              <Link
                href="https://brainhack.org/index.html"
                title="Brainhack Global"
              >
                Brainhack Global
              </Link>
            </p>
          </Col>
          <Col lg="6" className="d-flex justify-content-center">
            <div style={{ maxWidth: '300px' }}>
              <Image
                src={global_logo}
                alt=""
                width={300}
                height={Math.round(global_logo.height*300/global_logo.width)}
                style={{ objectFit: 'contain'}}
              />
            </div>
          </Col>
        </Row>
      </WhiteBox>

      <Content fluid="lg">
        <Row>
          <Col
            lg="6"
            className="d-flex flex-column justify-content-between align-items-start"
          >
            <div>
              <h2>Cost: ${config.registration.cost}</h2>
              <p>Includes on-site meals, snacks, and coffee!</p>
            </div>
            <RegisterButton
              settings={config.registration}
              alignment="center"
              eventTimespan={config.event.eventTimespan}
              large
            />
          </Col>
          <Col lg="6" className="d-flex justify-content-center">
            <div style={{ maxWidth: '300px' }}>
              <Image
                src={dollar_signs}
                alt=""
                width={300}
                height={Math.round(dollar_signs.height*300/dollar_signs.width)}
                style={{ objectFit: 'contain'}}
              />
            </div>
          </Col>
        </Row>
      </Content>

      {config.displaySections.schedule ? (
        <Schedule config={await getCalendar()} lineHeight={120} />
      ) : null}

      <TutorialList
        tutorials={config.tutorials}
        show={config.displaySections.tutorial ?? true}
      />

      <Content id="location" fluid="lg">
        <Row>
          <Col
            lg="4"
            className="d-flex flex-column justify-content-start align-items-start"
          >
            <h2>Location</h2>
            <address>
              <Link href={config.location.url} title={config.location.name}>
                {config.location.name}
              </Link>
              <br />
              {config.location.street}
              <br />
              {config.location.city}, {config.location.province}
            </address>
          </Col>
          <Col
            lg="8"
            className="d-flex flex-column justify-content-start align-items-start"
          >
            <iframe
              className={styles.mapFrame}
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:${config.location.maps_id}&key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}`}
            ></iframe>
          </Col>
        </Row>
      </Content>

      <WhiteBox>
        <h2 id="sponsors">Sponsors</h2>
        <Row className="justify-content-center justify-content-lg-start align-items-center">
          {config.sponsors.map((sponsor) => (
            <div key={sponsor.name} className={styles.sponsor}>
              <Link
                href={sponsor.url}
                title={sponsor.name}
                target="_blank"
                rel="noreferrer"
                className={styles.sponsorLink}
              >
                <Image
                  src={sponsor.img}
                  width={Math.min(250, sponsor.dims.width ?? 250)}
                  height={Math.min(150, sponsor.dims.height ?? 250)}
                  alt={sponsor.name}
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
          ))}
        </Row>
      </WhiteBox>
    </Page>
  );
};

export default Home;
