import { promises as fs } from 'fs';
import imageSize from 'image-size';
import yaml from 'js-yaml';
import _, { zip } from 'lodash';
import { exec } from 'node:child_process';
import { Readable } from 'node:stream';
import path from 'path';

import { AnyEvent, EventPosition, ScheduleDay } from '../interfaces/schedule';
import { SiteConfig } from '../interfaces/site-config';

function streamToString(stream: Readable) {
  const chunks: Uint8Array[] = [];
  return new Promise<string>((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

export const readConfig = async () => {
  const configFile = path.join(process.cwd(), 'config.yaml');
  const config_data = await fs.readFile(configFile, 'utf-8');
  const currentYear = new Date().getFullYear();
  const data = (await yaml.load(config_data)) as SiteConfig;
  return {
    currentYear,
    ...data,
    sponsors: await parseSponsorImages(data)
  };
};

export const parseCalendar = async () => {
  const proc = exec('.venv/bin/calendar-stack config.yaml');
  if (!proc.stdout) {
    throw Error('');
  }
  return (await JSON.parse(
    await streamToString(proc.stdout)
  )) as EventPosition[][];
};

export const readCalendar = async <T extends SiteConfig>(config: T) => {
  return {
    ...config,
    schedule: {
      ...config.schedule,
      days: zip(config.schedule.days, await parseCalendar()).map(
        ([day, positions]) => {
          if (!day || !positions) {
            throw Error('Not every day was assigned positions');
          }
          return {
            ...day,
            events: zip(day.events, positions).map(([event, position]) => {
              if (!event || !position) {
                throw Error(
                  `Not every event in ${day.day}/${day.month}/${day.year} ` +
                    'was assigned a position'
                );
              }
              return _.merge(event, position)
            })
          };
        }
      )
    }
  };
};

const parseSponsorImages = async <T extends SiteConfig>(config: T) => {
  return config.sponsors.map((sponsor) => {
    return {
      ...sponsor,
      dims: imageSize(path.join(process.cwd(), 'public', sponsor.img))
    };
  });
};

export const linkScheduleEvents = async <T extends SiteConfig>(config: T) => {
  return {
    ...config,
    schedule: {
      ...config.schedule,
      days: config.schedule.days.map((day) => {
        return {
          ...day,
          events: day.events.map((event) => {
            if ('tutorial' in event) {
              const tutorial = config.tutorials.find(
                (tutorial) => tutorial.id === event.tutorial
              );
              if (!tutorial) {
                throw Error(
                  `Could not find tutorial with id ${event.tutorial}`
                );
              }
              return {
                ...event,
                name: tutorial.name,
                link: `#${tutorial.id}`
              };
            }
            return event;
          })
        };
      })
    }
  };
};
