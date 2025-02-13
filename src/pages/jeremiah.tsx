"use client";

import styles from "@/styles/Page.module.scss";
import { jeremiahPageText } from "../constants/jeremiahPage";
import { useContext } from "react";
import SelectedLanguageContext from "../context/SelectedLanguageContext";
import Link from "next/link";

export default function JeremiahPage() {
  const { selectedLanguage } = useContext(SelectedLanguageContext);

  return (
    <>
      <span className={styles.heading}>
        {jeremiahPageText.heading[selectedLanguage]}
      </span>
      <div className={styles.textContent}>
        <span>{jeremiahPageText.mainContent[selectedLanguage]}</span>
        <Link href="/goodNews" className={styles.textButton}>
          {jeremiahPageText.proceedButton[selectedLanguage]}
        </Link>
      </div>
    </>
  );
}
