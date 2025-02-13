import React from "react";

interface SelectedLanguageContextType {
  selectedLanguage: "en" | "ru" | "he";
  setSelectedLanguage: React.Dispatch<React.SetStateAction<"en" | "ru" | "he">>;
}

const SelectedLanguageContext =
  React.createContext<SelectedLanguageContextType>({
    selectedLanguage: "en",
    setSelectedLanguage: () => "en",
  });

export default SelectedLanguageContext;
