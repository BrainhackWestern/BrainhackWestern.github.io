import { BasicDate } from "./generic";

/**
 * @additionalProperties false
 */
export interface TutorialInfo {
    /**
     * Tutorial name to be printed on the site
     */
    name: string;

    /**
     * Description of the tutorial. Supports markdown, including bold, italics, code,
     * urls, and lists.
     */
    description: string;

    /**
     * Relative url to the image for the tutorial. Image should be saved under public.
     * The url does not include public. For instance, if the image is saved at
     * [Project]/public/img/tutorial-pic.png, enter "/img/tutorial-pic.png".
     * 
     * Image should be saved with square dimensions larger than 250x250px
     */
    image: string;

    /**
     * Unique ID for the tutorial. This can be used for linking via #id
     */
    id: string;
}

/**
 * @additionalProperties false
 */
export interface TutorialDay extends BasicDate {
    tutorialTimes: {
        /**
         * Optional name for the tutorial block: e.g. Morning
         */
        name?: string;

        /**
         * Time of the tutorial block
         * @pattern ^\d\d?\:\d\d$
         */
        time?: string;

        /**
         * List of possible Tutorials available in the block
         */
        options: TutorialInfo[];
    }[];
}
