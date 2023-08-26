/**
 * @additionalProperties false
 */
export interface BasicDate {
  /**
   * Day of the month
   *
   * @maximum 31
   * @minimum 1
   */
  day: number;

  /**
   * Month of the year
   *
   * @maximum 12
   * @minimum 1
   */
  month: number;

  /**
   * Year
   *
   * @minimum 0
   */
  year: number;
}
