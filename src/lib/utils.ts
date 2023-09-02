import { isString } from 'lodash';

export function joinStyles(styles: (string | null | undefined)[]) {
  return styles.filter(isString).join(' ');
}

export function callOrReturn<T, U extends Array<any>>(
  item: Exclude<T, Function> | ((...p: U) => T),
  ...args: U
) {
  return typeof item === 'function'
    ? (item as (...p: U) => T)(...args)
    : item;
}
