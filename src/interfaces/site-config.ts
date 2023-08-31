import { EmbeddedForm } from './form';
import { BasicDate } from './generic';
import { AnyEvent, ScheduleConfig } from './schedule';
import { TutorialInfo } from './tutorial';

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
 * Allows turning specific sections of the website off. This is useful if
 * the content for these parts is not fully ready.
 * @additionalProperties false
 */
export interface DisplaySections {
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

  /**
   * Display the twitter feed
   *
   * @default true
   */
  twitterFeed?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Basic info about the event
 */
export interface Event {
  year: number;
  startDate: BasicDate;
  endDate: BasicDate;
}

export type RegistrationStatus = 'unopened' | 'open' | 'closed';
/**
 * Settings pertaining to registration forms and status
 *
 * @additionalProperties false
 */
export interface Registration {
  /**
   * Url of the registration form
   */
  url?: string;
  cost: number;

  /**
   * Current registration status. If blank, it will be automatically inferred
   * at build time from the open and close dates. Otherwise it overrides any
   * inference.
   */
  status?: RegistrationStatus;

  /**
   * The date registration should open.
   */
  openDate?: BasicDate;

  /**
   * The date registration should close
   */
  closeDate?: BasicDate;

  /**
   * Url of a webhook (e.g. from make.com) to send data from the email signup
   * form This form is used in place of the registration button when
   * registration status is set to "unopened". The webhook should be configured
   * to take POSTed JSON data with a single field: "email"
   */
  emailSignupTarget?: string;
}

/**
 * Config interface for Brainhack. Contains
 * all the information needed to display the site
 *
 * @additionalProperties false
 */
export interface SiteConfig {
  event: Event;
  schedule: ScheduleConfig<AnyEvent>[];
  sponsors: SponsorConfig[];
  organizers: string[];
  location: LocationConfig;
  tutorials: TutorialInfo[];

  forms?: {
    /**
     * Mapping where each key is unique identifier for the form and each value is the
     * form metadata
     */
    [key: string]: EmbeddedForm;
  };

  /**
   * twitter Url link for embedded feed
   */
  twitterUrl?: string;

  registration: Registration;

  faq?: FAQ[];

  /**
   * Object mapping years to project lists.
   *
   * The allows the archiving of past projects
   */
  projects?: {
    [year: number]: Project[];
  };
  displaySections: DisplaySections;
}

export interface ExpandedConfig extends SiteConfig {
  currentYear: number;
}
