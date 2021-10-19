export type DeepReadonly<T> = keyof T extends never ? T : { readonly [t in keyof T]: DeepReadonly<T[t]> };
