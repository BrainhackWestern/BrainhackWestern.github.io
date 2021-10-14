interface ScheduleDay {
    day: number;
    month: number;
    year: number;
    events: {
        name: string;
        time: string;
        duration: string;
    }[]
}

export interface ScheduleConfig {
    startTime: number;
    endTime: number;
    days: ScheduleDay[]
}

export interface SponsorConfig {
    img: string;
    name: string;
    url: string;
}

export interface SiteConfig {
    schedule: ScheduleConfig;
    sponsors: SponsorConfig[];
    organizers: string[];
}
