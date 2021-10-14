import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import { promises as fs } from 'fs'
import yaml from 'js-yaml'

import Obfuscate from 'react-obfuscate'

import { SiteConfig } from '../interfaces/site-config'

import asciiArt from "../public/img/ascii_art_cropped.png"
import upvote from "../public/img/upvote.png"
import learn_skillz from "../public/img/learn_skillz_cropped.png"
import global_logo from "../public/img/global_logo.png"
import dollar_signs from "../public/img/dollar_signs.png"

import { Logo } from '../components/logo'
import { Button } from '../components/button'
import { WhiteBox } from '../components/white-box'
import { AboutRow } from '../components/about-row'
import { Schedule } from '../components/schedule/schedule'

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

const basePath = process.env.PUBLIC_URL || '';

const Home = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
  asciiArt.src = basePath + asciiArt.src;
  upvote.src = basePath + upvote.src;
  learn_skillz.src = basePath + learn_skillz.src;
  global_logo.src = basePath + global_logo.src;
  dollar_signs.src = basePath + dollar_signs.src;
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
          <img src={asciiArt.src} />
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
            <Button>
              Register Now
            </Button>
          </div>
        </div>
      </div>

      <WhiteBox>
          <p>
            Western Brainhack brings together researchers and trainees of all backgrounds to collaborate on open science projects in neuroimaging and neuroscience.
          </p>
      </WhiteBox>

      <div className="container-lg about content-space">
        <AboutRow img={upvote} imgClass="upvote-img" title="Pitch your project">
          Submit your project ideas online, then pitch them to your fellow attendees to recruit others to your team.
        </AboutRow>
        <AboutRow img={learn_skillz} title="Learn new skills">
          Attend tutorials to learn new neuroscience tools and techniques from the experts.
        </AboutRow>
      </div>

      <WhiteBox>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <p>Brainhack Western 2021 is an official satellite event of Brainhack Global</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{maxWidth: "300px"}}>
              <img src={global_logo.src} alt=""/>
            </div>
          </div>
        </div>
      </WhiteBox>

      <div className="content-space container-lg">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <div>
              <h2>Cost: $15</h2>
              <p>Includes on-site meals and snacks</p>
            </div>
            <Button>
              Register
            </Button>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{maxWidth: "300px"}}>
              <img src={dollar_signs.src} />
            </div>
          </div>
        </div>
      </div>

      <div className="content-space">
        <div className="container-lg">
          <h2>Schedule</h2>
        </div>
        <Schedule config={config.schedule} lineHeight={100}/>
      </div>

      <div className="content-space container-lg">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <h2>Location</h2>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            <p>Map to go here</p>
          </div>
        </div>
      </div>

      <WhiteBox>
        <h2>Sponsors</h2>
        <div className="row d-flex align-items-center">
          {
            config.sponsors.map(sponsor =>
              <div key={sponsor.name} className="col-lg-4">
                <a href={sponsor.url} title={sponsor.name} target="_blank" rel="noreferrer">
                  <img className="sponsor" src={basePath + sponsor.img} alt={sponsor.name}/>
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
        </div>
      </footer>
    </div>


  )
}

export default Home
