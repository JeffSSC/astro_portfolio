import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
    return function t<K extends keyof typeof ui[typeof defaultLang]>(key: K) {
        const currentLang = lang in ui ? lang : defaultLang;
        return (ui[currentLang][key] || ui[defaultLang][key]) as typeof ui[typeof defaultLang][K];
    }
}