import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        const currentLang = lang in ui ? lang : defaultLang;

        return ui[currentLang][key] || ui[defaultLang][key];
    }
}