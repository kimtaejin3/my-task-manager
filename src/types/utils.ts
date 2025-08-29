export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Falsey = false | null | undefined | "" | 0;
