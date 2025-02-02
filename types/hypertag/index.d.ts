declare module 'hypertag/hypertag' {
  const parse: (
    source: string,
    tags: string | string[],
    options?: any
  ) => { [key: string]: string }[];
  export default parse;
}
