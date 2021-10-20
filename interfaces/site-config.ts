interface Date {
    /**
        * @maximum 31
        * @minimum 0
        */
    day: number;

    /**
    * @maximum 12
    * @minimum 0
    */
    month: number;

    /**
    * @minimum 0
    */
    year: number;
}

interface ScheduleDay extends Date {
    events: {
        name: string;

        /**
         * Time of the event (in 24hr time)
         * @pattern ^\d\d?\:\d\d$
         */
        time: string;

        /**
         * Length of the event
         * @pattern ^\d\d?\:\d\d$
         */
        duration: string;
    }[];
}

export interface ScheduleConfig {
    show: boolean;

    /**
     * First hour to display on the schedule (in 24hr time).
     * @minimum 0
     * @maximum 23
     */
    startTime: number;

    /**
     * Last hour to display on the schedule (in 24hr time).
     * Events falling after this will be clipped.
     * @minimum 0
     * @maximum 23
     */
    endTime: number;
    days: ScheduleDay[];
}

export interface SponsorConfig {
    img: string;
    name: string;
    url: string;
}

export interface TutorialDay extends Date {
    tutorialTimes: {
        name?: string;

        /**
         * Time of the tutorial
         * @pattern ^\d\d?\:\d\d$
         */
        time?: string;
        options: {
            name: string;
            description: string;
            image: string;
        }[];
    }[];
}

interface LocationConfig {
    name: string;
    street: string;
    city: string;
    /**
     * Two letter province code
     * @pattern ^[A-Z][A-Z]$
     */
    province: string;
    url: string;
    /**
     * Map ID from Google Maps Embed API, as in: 
     * ...?q=place_id:<MAP ID>&key=...
     */
    maps_id: string;
}

/**
 * Config interface for Brainhack. Contains
 * all the information needed to display the site
 * 
 * @additionalProperties false
 */
export interface SiteConfig {
    schedule: ScheduleConfig;
    sponsors: SponsorConfig[];
    organizers: string[];
    location: LocationConfig;
    tutorials: TutorialDay[];
}
