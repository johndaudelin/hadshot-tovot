"use client";

import React, { useState, ReactNode } from "react";
import SelectedLanguageContext from "../context/SelectedLanguageContext";

const SelectedLanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "ru" | "he">(
    "en"
  );

  const value = {
    selectedLanguage,
    setSelectedLanguage,
  };

  return (
    <SelectedLanguageContext.Provider value={value}>
      {children}
    </SelectedLanguageContext.Provider>
  );
};

export default SelectedLanguageProvider;
