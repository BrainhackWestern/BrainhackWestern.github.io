import path from 'path'
import { promises as fs } from 'fs'

import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from '../components/image'
import Link from 'next/link'

import yaml from 'js-yaml'
import { SiteConfig } from '../interfaces/site-config'

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

const FaqPage = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="app">
            <Head>
            <title>FAQ - Brainhack Western 2021</title>
            <meta name="description" content="Frequently asked Questions for Brainhack Western" />
            </Head>

        </div>
    )
}

export default FaqPage