import { language } from "@prisma/client";
import type { AppLanguage } from "../constants";

export default function languageMap(appLanguage: AppLanguage) {
  switch (appLanguage) {
    case "English": {
      return language.en;
    }
    case "Korean": {
      return language.ko;
    }
    case "Japanese": {
      return language.ja;
    }
    case "Chinese (traditional)": {
      return language.zh;
    }
    case "Chinese (simplified)": {
      return language.zh_Hant;
    }
  }
}
