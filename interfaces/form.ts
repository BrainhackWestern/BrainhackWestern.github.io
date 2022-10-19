export interface EmbeddedForm {
  type: "cognito"

  /**
   * Short version of the title to be used in links
   */
  shortTitle: string

  /**
   * The friendly title that will appear at the top of the form
   */
  title: string

  /**
   * The embedding tag copied from the site
   */
  embedTag: string

  /**
   * Whether the form should be viewable (vs returning form not found)
   *
   * @default false
   */
  hidden?: boolean

  prefillMappings?: {
    [param: string]: string
  }
}