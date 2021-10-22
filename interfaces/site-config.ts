import { ScheduleConfig } from "./schedule";
import { TutorialDay } from "./tutorial";

/**
 * @additionalProperties false
 */
interface SponsorConfig {
    /**
     * Url to the image for the sponsor. Image should be saved under /public.
     * The url does not include public. For instance, if the image is saved at
     * [Project]/public/img/tutorial-pic.png, enter "/img/tutorial-pic.png".
     * 
     * Image should be saved with square dimensions larger than 250x250px
     */
    img: string;

    /**
     * Name of the sponsor to be printed
     */
    name: string;

    /**
     * Url for the sponsors website
     * 
     * @pattern ^http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+$
     */
    url: string;
}

/**
 * @additionalProperties false
 */
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
    cost: number;

    /**
     * Allows turning specific sections of the website off. This is useful if
     * the content for these parts is not fully ready.
     * @additionalProperties false
     */
    displaySections: {
        /**
         * Display the list of tutorials
         * 
         * @default true
         */
        tutorial?: boolean;

        /**
         * Display the schedule
         * 
         * @default true
         */
        schedule?: boolean;
    }
}
