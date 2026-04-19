// Re-export from i18n/data for backward compatibility
export { DATA, getData, type DataLang } from "../i18n/data";

export const ACCENT_HUES = {
  green: "145",
  amber: "75",
  coral: "35",
  violet: "300",
  blue: "240",
} as const;

export type Theme = "light" | "dark";
export type AccentKey = keyof typeof ACCENT_HUES;
