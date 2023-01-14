import { LangValue, ContentType } from "../types/content";

export type SimpleLangType = "enUs" | "ptBr";
export type SimpleFType = (enUs: LangValue, ptBr: LangValue) => object;
export type SimpleContentType = ContentType<SimpleLangType, SimpleFType>;