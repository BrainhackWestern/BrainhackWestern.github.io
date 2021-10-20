interface Tutorial {
    name: string;
    description: string;
    image: string;
}

interface TutorialDay extends BasicDate {
    tutorialTimes: {
        name?: string;

        /**
         * Time of the tutorial
         * @pattern ^\d\d?\:\d\d$
         */
        time?: string;
        options: Tutorial[];
    }[];
}
