import 'server-only'
import { promises as fs } from 'fs';
import { exec } from 'node:child_process';
import { Readable } from 'node:stream';
import path from 'path';
import imageSize from 'image-size';
import yaml from 'js-yaml';
import { merge, zip } from 'lodash';
import { DateTime } from 'luxon';
import { cache } from 'react';
import { BasicDate } from '../interfaces/generic';
import { EventPosition, GenericEvent } from '../interfaces/schedule';
import {
  Event,
  RegistrationStatus,
  SiteConfig
} from '../interfaces/site-config';

export async function getEventYear() {
  return (await readConfig()).event.year;
}

function streamToString(stream: Readable) {
  const chunks: Uint8Array[] = [];
  return new Promise<string>((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

export const getCurrentYear = () => new Date().getFullYear();
export const readConfig = cache(async () => {
  const configFile = path.join(process.cwd(), 'config.yaml');
  const config_data = await fs.readFile(configFile, 'utf-8');
  const data = (await yaml.load(config_data)) as SiteConfig;
  return {
    ...data,
    event: await parseEventDates(data.event),
    sponsors: await parseSponsorImages(data)
  };
});

const parseCalendar = async () => {
  const proc = exec('.venv/bin/calendar-stack config.yaml');
  if (!proc.stdout) {
    throw Error('');
  }
  return (await JSON.parse(
    await streamToString(proc.stdout)
  )) as EventPosition[][][];
};

const parseSponsorImages = async <T extends SiteConfig>(config: T) => {
  return config.sponsors.map((sponsor) => {
    return {
      ...sponsor,
      dims: imageSize(path.join(process.cwd(), 'public', sponsor.img))
    };
  });
};

export type ParsedCalendarType = Awaited<ReturnType<typeof getCalendar>>;

export const getCalendar = async () => {
  const config = await readConfig();
  return zip(config.schedule, await parseCalendar()).map(
    ([schedule, schedulePositions]) => {
      if (!schedule || !schedulePositions) {
        throw Error('Not every schedule was assigned positions');
      }
      return {
        ...schedule,
        days: zip(schedule.days, schedulePositions).map(([day, positions]) => {
          if (!day || !positions) {
            throw Error('Not every day was assigned positions');
          }
          return {
            ...day,
            events: zip(day.events, positions).map(([event, position]) => {
              if (!event || !position) {
                throw Error(
                  `Not every event in ${day.day}/${day.month}/` +
                    `${day.year} was assigned a position`
                );
              }
              return merge(
                event,
                position,
                (() => {
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
                      name: tutorial.name,
                      link: `#${tutorial.id}`
                    };
                  }
                  return {};
                })()
              ) as GenericEvent & EventPosition;
            })
          };
        })
      };
    }
  );
};

interface EventDatesParsed {
  eventTimespan: string;
}
const parseEventDates = async <T extends Event>(
  config: T
): Promise<T & EventDatesParsed> => {
  const formatDate = (date: BasicDate) => {
    const d = DateTime.fromObject({ ...date }, { zone: 'America/Toronto' });
    // const d = new Date(Date.UTC(date.year, date.month - 1, date.day));
    return d.toLocaleString({ month: 'short', day: 'numeric' });
  };
  return {
    ...config,
    eventTimespan: `${formatDate(config.startDate)} - ${formatDate(
      config.endDate
    )}`
  };
};

export const getRegistrationStatus = async (): Promise<RegistrationStatus> => {
  const config = await readConfig();

  const open = config.registration.openDate;
  const close = config.registration.closeDate;
  // Use right now as openDate if not specified
  const openDate = open
    ? new Date(open.year, open.month - 1, open.day)
    : new Date();

  const now = new Date();
  if (now < openDate) {
    return 'unopened';
  } else if (!close) {
    return 'open';
    // Subtract 1 from the month to make it zero based
    // Add one to the day to make the date refer to the beginning of the next day
  } else if (now > new Date(close.year, close.month - 1, close.day + 1)) {
    return 'closed';
  } else {
    return 'open';
  }
};

export const getProjectInfo = async (): Promise<Record<number, Project[]>> => {
  const config = await readConfig();
  const registrationStatus = await getRegistrationStatus();
  if (['closed', 'unopened'].includes(registrationStatus)) {
    return config.projects ?? {};
  }
  if (
    !Object.keys(config.projects ?? {}).includes(getCurrentYear().toString())
  ) {
    return {
      ...config.projects,
      [getCurrentYear()]: []
    };
  }
  return config.projects ?? {};
};

export const getCurrentProjectYear = async (): Promise<string | undefined> => {
  return (
    Object.keys(await getProjectInfo())
      .sort()
      // .reverse()
      .pop()
  );
};

export const getCurrentProjectURL = async (): Promise<string | undefined> => {
  const year = await getCurrentProjectYear();
  return year ? `/projects/${year}` : undefined;
};
