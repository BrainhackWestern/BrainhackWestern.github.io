import path from "path";
import { promises as fs } from "fs";
import yaml from "js-yaml";

import { SiteConfig } from "../interfaces/site-config";
import { ScheduleDay } from "../interfaces/schedule";

export const readConfig = async () => {
  const configFile = path.join(process.cwd(), "config.yaml");
  const config_data = await fs.readFile(configFile, "utf-8");
  const currentYear = new Date().getFullYear();
  return {
    currentYear,
    ...(await yaml.load(config_data)) as SiteConfig
  }
}

export const readCalendar = async () => {
  const calendarFile = path.join(process.cwd(), "calendar.json");
  const calendarData = await fs.readFile(calendarFile, "utf-8");
  return (await JSON.parse(calendarData)) as ScheduleDay[];
}