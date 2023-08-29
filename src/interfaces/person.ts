interface Person {
  /**
   * Name
   */
  name: string

  /**
   * Github username
   *
   * Do not include the initial `@`
   *
   * @pattern ^[a-zA-Z0-9](?:-(?=[a-zA-Z0-9])|[a-zA-Z0-9]){0,38}(?<=[a-zA-Z0-9])$
   */
  github?: string
}