/**
 * @additionalProperties false
 */
interface Project {
  /**
   * One or more sponsors for the project
   */
  organizers: Person[]

  /**
   * Project title (in plain text)
   */
  title: string

  /**
   * Project description (in markdown)
   */
  description: string

  /**
   * Project URL (e.g. github or similar)
   */
  url?: string
}