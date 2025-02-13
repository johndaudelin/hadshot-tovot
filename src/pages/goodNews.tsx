"use client";

import styles from "@/styles/Page.module.scss";
import { goodNewsPageText } from "../constants/goodNewsPage";
import { useContext } from "react";
import SelectedLanguageContext from "../context/SelectedLanguageContext";

export default function GoodNewsPage() {
  const { selectedLanguage } = useContext(SelectedLanguageContext);

  return (
    <>
      <span className={styles.heading}>
        {goodNewsPageText.heading[selectedLanguage]}
      </span>
      <div className={styles.textContent}>
        {goodNewsPageText.mainContent[selectedLanguage]}
      </div>
    </>
  );
}
