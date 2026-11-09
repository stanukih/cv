
import { useState } from "react";
import { translations } from "./translations";

type Language = keyof typeof translations;

function useTranslation() {
    const [language, setLanguage] = useState<Language>("fi");

    function t(path: string): string {
        const result: unknown = path
            .split(".")
            .reduce<unknown>((obj, key) => {
                if (
                    obj !== null &&
                    typeof obj === "object" &&
                    key in obj
                ) {
                    return (obj as Record<string, unknown>)[key];
                }

                return undefined;
            }, translations[language]);

        return typeof result === "string" ? result : path;
    }

    return { t, language, setLanguage };
}

export { useTranslation };
export type { Language };
