declare type Class<T = unknown> = new (...arguments_: any[]) => T;

declare type MaybePromise<T> = T | Promise<T>;

declare type MaybePromiseFunc<T> = (...args: any[]) => MaybePromise<T>;

declare module '*.html' {
  const contents: string;
  export default contents;
}
