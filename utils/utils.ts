import { isString } from "lodash";


export function joinStyles(styles: (string | null | undefined)[]) {
  return styles.filter(isString).join(' ')
}