import { computed } from "vue";
import { useRoute } from "vue-router";
import { langsAvailable, content, f } from "../content/simple";
import { SimpleLangType } from "../content/types";
import { toCamel } from "../helpers/toCamel";

export function translate(langsAvailable: Array<string>, lang: string, obj: object) {
    lang = toCamel(lang);

    if(!langsAvailable.includes(lang)) {
        lang = "enUs";
    }

    let text = obj[lang];
    if(!text) text = "NO_TRANSLATION_FOUND";

    return text;
}

export function useContent() {
    const route = useRoute();
    const lang = computed<string>(() => route.params.lang as string);

    const tl = (obj: object) => translate(langsAvailable, lang.value, obj);

    const curContent = computed(() => {
        const factory = (enUs, ptBr) => f(tl, enUs, ptBr);
        return content(tl, factory, lang.value as SimpleLangType);
    });
    
    return curContent;
}