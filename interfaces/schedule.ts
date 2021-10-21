import { BasicDate } from "./generic";


/**
 * @additionalProperties false
 */
interface ScheduleDay extends BasicDate {
    /**
     * List of events to be held on this day. Care should be taken that the times
     * do not overlap: their is currently no support for this and it will cause
     * issues with the display.
     * 
     * @additionalProperties false
     */
    events: {
        name: string;

        /**
         * Time of the event (in 24hr time)
         * @pattern ^\d\d?\:\d\d$
         */
        time: string;

        /**
         * Length of the event as hh:mm
         * @pattern ^\d\d?\:\d\d$
         */
        duration: string;
    }[];
}

/**
 * @additionalProperties false
 */
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

    /**
     * List of days to include in the schedule. Each day contains its own scheduled
     * events.
     */
    days: ScheduleDay[];
}