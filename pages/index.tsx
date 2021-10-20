import path from 'path'
import { promises as fs } from 'fs'

import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import yaml from 'js-yaml'
import Obfuscate from 'react-obfuscate'

import { imageLoader, basePath } from '../utils/image-loader'

import { SiteConfig } from '../interfaces/site-config'

import asciiArt from "../public/img/ascii_art_cropped.png"
import upvote from "../public/img/upvote.png"
import learn_skillz from "../public/img/learn_skillz_cropped.png"
import global_logo from "../public/img/global_logo.png"
import dollar_signs from "../public/img/dollar_signs.png"
import hack from "../public/img/hack.png"

import { Logo } from '../components/logo'
import { Button } from '../components/button'
import { WhiteBox } from '../components/white-box'
import { AboutRow } from '../components/about-row'
import { Schedule } from '../components/schedule/schedule'
import { RegisterButton } from '../components/register-button'
import { TutorialList } from '../components/tutorials/tutorial-list'

export const getStaticProps = async () => {
  const configFile = path.join(process.cwd(), 'config.yaml');
  const config_data = await fs.readFile(configFile, 'utf-8');
  const config = await yaml.load(config_data) as SiteConfig;
  return {
      props: {
        config,
      }
  };
}


const Home = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="app">
      <Head>
        <title>Brainhack Western 2021</title>
        <meta name="description" content="Landing page for Brainhack Western 2021" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      </Head>

      <div className="window d-flex flex-column justify-content-center container-lg">
        <div className="background-img">
          <Image src={asciiArt} />
        </div>
        <div className="row title-col">
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center ">
            <Logo/>
            <hr/>
            <h3>London, ON</h3>
            <h3>Dec 1-3</h3>
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center">
            <div className="flex-lg-fill"></div>
            <RegisterButton status="unopened" />
          </div>
        </div>
      </div>

      <WhiteBox>
          <p>
            Western Brainhack brings together researchers and trainees of all backgrounds to collaborate on open science projects in neuroimaging and neuroscience.
          </p>
      </WhiteBox>

      <div id="about" className="container-lg about content-space">
        <AboutRow img={upvote} imgClass="upvote-img" title="Pitch your project">
          Submit your project ideas online, then pitch them to your fellow attendees to recruit others to your team.
        </AboutRow>
        <AboutRow img={learn_skillz} title="Learn new skills" reverse={true}>
          Attend tutorials to learn new neuroscience tools and techniques from the experts.
          <br />
          <br />
          Come back soon to see what tuorials will be offered!
        </AboutRow >
        <AboutRow img={hack} title="Hack!!">
          Solve real-world problems while sharpening your skills!
        </AboutRow>
      </div>

      <WhiteBox>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <p>Brainhack Western 2021 is an official satellite event of Brainhack Global</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{maxWidth: "300px"}}>
              <Image src={global_logo} alt=""/>
            </div>
          </div>
        </div>
      </WhiteBox>

      <div className="content-space container-lg">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <div>
              <h2>Cost: $15</h2>
              <p>Includes on-site meals, snacks, and coffee!</p>
            </div>
            <RegisterButton alignment='left' status="unopened"></RegisterButton>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{maxWidth: "300px"}}>
              <Image src={dollar_signs} alt="" />
            </div>
          </div>
        </div>
      </div>

      <TutorialList config={config.tutorials}/>
      
      <Schedule config={config.schedule} lineHeight={100}/>

      <div id="location" className="content-space container-lg">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-start align-items-start">
            <h2>Location</h2>
            <address>
              <a href={config.location.url} title={config.location.name}>{config.location.name}</a>
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
              style={{border: 0}}
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
          {
            config.sponsors.map(sponsor =>
              <div key={sponsor.name} className="col-lg-4 sponsor">
                <a href={sponsor.url} title={sponsor.name} target="_blank" rel="noreferrer">
                  <img  src={basePath + sponsor.img} alt={sponsor.name}/>
                </a>
              </div>
            )
          }
        </div>
      </WhiteBox>

      <footer>
        <div className="content-space container-lg">
          <h3>Organizers</h3>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
              <p className="organizers">
                {
                  config.organizers.join(", ")
                }
              </p>
            </div>
          </div>
          <h3>Contact</h3>
          <Obfuscate email="brainhack.western@gmail.com"/>
          <p className="copyright">Copyright © 2021 Brainhack Western</p>
        </div>
      </footer>
    </div>


  )
}

export default Home
