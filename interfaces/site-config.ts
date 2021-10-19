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
    show: boolean;
    startTime: number;
    endTime: number;
    days: ScheduleDay[]
}

export interface SponsorConfig {
    img: string;
    name: string;
    url: string;
}

interface LocationConfig {
    name: string;
    street: string;
    city: string;
    province: string;
    url: string;
    maps_id: string;
}

export interface SiteConfig {
    schedule: ScheduleConfig;
    sponsors: SponsorConfig[];
    organizers: string[];
    location: LocationConfig;
}
