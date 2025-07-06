// hooks/useLanguage.ts
import { useState } from "react";
import { translations } from "../utils/translations";
import type { Translations } from "../utils/translations";

type Language = keyof Translations; // 'en' | 'ru'

export function useLanguage(initialLang: Language = "en") {
  const [language, setLanguage] = useState<Language>(initialLang);

  const t = translations[language];

  return { language, setLanguage, t };
}

export type { Language };
