export type LangValue = string | string[] | object;
export type LangType<K extends string> = K;
export type LangRecord<K extends string> = Record<LangType<K>, LangValue>;

export type TlType<K extends string> = (obj: LangRecord<K>) => object;
export type ContentType<K extends string, V> = (tl: TlType<K>, f: V, lang: LangType<K>) => object | any;