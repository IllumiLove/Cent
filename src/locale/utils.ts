export type LocaleName = "zh" | "en";

export const locales = [
    {
        name: "zh",
        fetcher: () => import("./lang/zh.json"),
        // Match all Chinese locales (zh, zh-CN, zh-TW, etc.)
        matcher: (_l: string) => _l.toLowerCase().startsWith("zh"),
        label: "中文",
    },
    {
        name: "en",
        fetcher: () => import("./lang/en.json"),
        // Only match explicit English locales
        matcher: (_l: string) => _l.toLowerCase().startsWith("en"),
        label: "English",
    },
] as const;

export const getBrowserLang = (): LocaleName => {
    const browserLang: string =
        navigator.language || (navigator as any).browserLanguage;
    const locale = locales.find((l) => l.matcher(browserLang));
    return (locale?.name ?? locales[0].name) as LocaleName;
};
