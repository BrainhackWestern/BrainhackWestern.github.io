/**
 * @additionalProperties false
 */
export interface InvitedSpeakerInfo {
  /**
   * Unique ID for the speaker. This can be used for linking via #id
   */
  id: string;

  /**
   * Session title to be printed on the site
   */
  name: string;

  /**
   * Optional invited speaker name(s)
   */
  speaker?: string | string[];

  /**
   * Optional affiliation(s)
   */
  affiliation?: string | string[];

  /**
   * Description of the invited talk. Supports markdown.
   *
   * @default "Description coming soon!"
   */
  description?: string;

  /**
   * Relative url to the image for the invited speaker. Image should be saved under
   * public.
   */
  image?: string;
}
