import { initPsitta } from "@psitta/core";
import { getTranslationBoilerplate } from "./lib/i18n";
import messages from './messages';

initPsitta({
  locales: ['en', 'pt'],
  translations: messages,
  datetimeFormats: { en: 'en-US', pt: 'pt-BR' },
  numberFormats: { en: 'en-US', pt: 'pt-BR' },
})

declare module '@psitta/core' {
  interface Register {
    messages: typeof messages
  }
}

console.log(getTranslationBoilerplate())
