import { computed } from "vue";
import { useRoute } from "vue-router";
import { content, f, langsAvailable } from "../content/simple";
import { SimpleLangType } from "../content/types";
import { toCamel } from "../helpers/toCamel";

export function translate(
  langsAvailable: Array<string>,
  lang: string,
  obj: object
) {
  lang = toCamel(lang);

  if (!langsAvailable.includes(lang)) {
    lang = "enUs";
  }

  let text = obj[lang];
  if (!text) text = "NO_TRANSLATION_FOUND";

  return text;
}

export function useContent(getter?: (value: any) => any) {
  const route = useRoute();

  const reactiveContent = computed(() => {
    const lang = route.params.lang as string;
    const tl = (obj: object) => translate(langsAvailable, lang, obj);
    const factory = (enUs, ptBr) => f(tl, enUs, ptBr);

    const curContent = content(tl, factory, lang as SimpleLangType);

    return curContent;
  });

  if (typeof getter === "function") {
    return computed(() => getter(reactiveContent.value));
  }

  return reactiveContent;
}
