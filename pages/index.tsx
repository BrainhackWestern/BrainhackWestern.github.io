import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { basePath } from "../utils/image-loader";

import brainNetwork from "../public/img/splash-brain-network.png";
import upvote from "../public/img/upvote.png";
import learn_skillz from "../public/img/learn_skillz_cropped.png";
import global_logo from "../public/img/global_logo.png";
import dollar_signs from "../public/img/dollar_signs.png";
import hack from "../public/img/hack.png";
import main_logo from "../public/img/2022-splash-logo.png";

import Image from "../components/image";
import { NavBar } from "../components/navbar";
import { Button } from "../components/button";
import { WhiteBox } from "../components/white-box";
import { AboutRow } from "../components/about-row";
import { Schedule } from "../components/schedule/schedule";
import { RegisterButton } from "../components/register-button";
import { TutorialList } from "../components/tutorials/tutorial-list";
import Footer, { getFooterProps } from "../components/footer";
import { readCalendar, readConfig } from "../utils/data";

export const getStaticProps = async () => {
  const config = await readConfig();
  const calendar = await readCalendar();

  return {
    props: {
      config,
      calendar,
    },
  };
};

const Home = ({
  config,
  calendar,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="app">
      <Head>
        <title>Brainhack Western {config.event.year}</title>
        <meta
          name="description"
          content="Western Brainhack brings together researchers and trainees of all backgrounds to collaborate on open science projects in neuroimaging and neuroscience."
        />
      </Head>

      <NavBar displaySections={config.displaySections} splashMode={true} />

      <div className="splash">
        <div className="window d-flex flex-row justify-content-start container-fluid">
          <div className="background-img">
            <Image src={brainNetwork} />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-end title-col">
            <div className="flex-fill"></div>
            <div className="flex-fill"></div>
            <div className="row-2">
              <RegisterButton
                status={config.registration.status}
                url={config.registration.url}
              />
            </div>
            <div className="row-2 flex-fill"></div>
            <div className="row-4 d-flex flex-column align-items-center justify-content-end">
              {/* <h3>London, ON</h3>
              <h3>Dec 1-3</h3> */}
              <div className="logo">
                <Image src={main_logo} width={406} height={186} />
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

      <div id="about" className="container-lg about content-space">
        <AboutRow img={upvote} imgClass="upvote-img" title="Pitch your project">
          Submit your project ideas online, then pitch them to your fellow
          attendees to recruit others to your team.
          <br />
          <br />
          <Button target="https://github.com/BrainhackWestern/BrainhackWestern.github.io/blob/2021/wiki/Projects2021.md">
            {config.registration.status === "unopened"
              ? "View Previous Project Proposals"
              : "View Project Proposals"}
          </Button>
        </AboutRow>
        <AboutRow img={learn_skillz} title="Learn new skills" reverse={true}>
          Attend tutorials to learn new neuroscience tools and techniques from
          the experts.
          <br />
          <br />
          {config.displaySections.tutorial ? (
            <Button target="#tutorials">View Tutorials</Button>
          ) : (
            "Check back soon to see what tutorials will be offered!"
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
              event of{" "}
              <a
                href="https://brainhack.org/index.html"
                title="Brainhack Global"
              >
                Brainhack Global
              </a>
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{ maxWidth: "300px" }}>
              <Image src={global_logo} alt="" />
            </div>
          </div>
        </div>
      </WhiteBox>

      <div className="content-space container-lg">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <div>
              <h2>Cost: ${config.registration.cost}</h2>
              <p>Includes on-site meals, snacks, and coffee!</p>
            </div>
            <RegisterButton
              alignment="left"
              status={config.registration.status}
              url={config.registration.url}
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{ maxWidth: "300px" }}>
              <Image src={dollar_signs} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Schedule
        config={config.schedule}
        calendar={calendar}
        lineHeight={120}
        show={config.displaySections.schedule ?? true}
      />

      <TutorialList
        config={config.tutorials}
        show={config.displaySections.tutorial ?? true}
      />

      <div id="location" className="content-space container-lg">
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
              className="map-frame"
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

      <WhiteBox className="sponsor-row">
        <h2 id="sponsors">Sponsors</h2>
        <div className="row d-flex align-items-center">
          {config.sponsors.map((sponsor) => (
            <div key={sponsor.name} className="col-lg-4 sponsor">
              <a
                href={sponsor.url}
                title={sponsor.name}
                target="_blank"
                rel="noreferrer"
              >
                <img src={basePath + sponsor.img} alt={sponsor.name} />
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
