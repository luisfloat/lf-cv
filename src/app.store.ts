import { proxy } from "valtio";
import { ILocale } from "./hooks/useContent";

export type IAppStore = {
    locale?: ILocale
};

export const appStore = proxy<IAppStore>({
    locale: localStorage.getItem("locale") as ILocale
});