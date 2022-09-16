import path from "path";
import { promises as fs } from "fs";
import yaml from "js-yaml";
import imageSize from "image-size"

import { SiteConfig } from "../interfaces/site-config";
import { ScheduleDay } from "../interfaces/schedule";

export const readConfig = async () => {
  const configFile = path.join(process.cwd(), "config.yaml");
  const config_data = await fs.readFile(configFile, "utf-8");
  const currentYear = new Date().getFullYear();
  const data = await yaml.load(config_data) as SiteConfig
  return {
    currentYear,
    ...data,
    sponsors: (await parseSponsorImages(data))
  }
}

export const readCalendar = async () => {
  const calendarFile = path.join(process.cwd(), "calendar.json");
  const calendarData = await fs.readFile(calendarFile, "utf-8");
  return (await JSON.parse(calendarData)) as ScheduleDay[];
}

const parseSponsorImages = async (config: SiteConfig) => {
  return config.sponsors.map(sponsor => {
    return {
      ...sponsor,
      dims: imageSize(path.join(process.cwd(), "public", sponsor.img))
    }
  })

}