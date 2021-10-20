import { ScheduleConfig } from "./schedule";
import { TutorialDay } from "./tutorial";

interface SponsorConfig {
    img: string;
    name: string;
    url: string;
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

    /**
     * Allows turning specific sections of the website off. This is useful if
     * the content for these parts is not fully ready.
     */
    displaySections: {
        /**
         * Display the list of tutorials
         */
        tutorial: boolean;

        /**
         * Display the schedule
         */
        schedule: boolean;
    }
}
