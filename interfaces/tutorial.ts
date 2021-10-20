import { BasicDate } from "./generic";

export interface TutorialInfo {
    name: string;
    description: string;
    image: string;
}

export interface TutorialDay extends BasicDate {
    tutorialTimes: {
        name?: string;

        /**
         * Time of the tutorial
         * @pattern ^\d\d?\:\d\d$
         */
        time?: string;
        options: TutorialInfo[];
    }[];
}
