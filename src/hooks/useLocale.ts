import { appStore } from "../app.store";
import { ILocale, defaultLocale, availableLocales } from "./useContent";

type ISetLocaleOptions = {
    save?: boolean;
};

export function useLocale() {
    const setLocale = (locale: ILocale, options?: ISetLocaleOptions) => {
        const save = options?.save === undefined ? true : options.save;
        
        if(save) {
            localStorage.setItem("locale", locale);
        }

        appStore.locale = locale;
    };
    
    const getLocale = () => {
        if(!appStore.locale) {
            const browserIsoCode = navigator.language;
            const browserLangCode = browserIsoCode.split("-")[0];
            let locale = localStorage.getItem("locale");

            if(!locale) {
                locale = browserLangCode;
            }
            
            if(!availableLocales.includes(locale as ILocale)) {
                locale = defaultLocale;
            }

            setLocale(locale as ILocale);
        }

        return appStore.locale;
    }

    return {
        getLocale,
        setLocale,
    };
}