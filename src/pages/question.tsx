"use client";

import styles from "@/styles/Page.module.scss";
import { questionPageText } from "../constants/questionPage";
import { useContext } from "react";
import SelectedLanguageContext from "../context/SelectedLanguageContext";
import Link from "next/link";

export default function QuestionPage() {
  const { selectedLanguage } = useContext(SelectedLanguageContext);

  return (
    <>
      <span className={styles.heading}>
        {questionPageText.heading[selectedLanguage]}
      </span>
      <div className={styles.options}>
        <Link href="/goodNews" className={styles.textButton}>
          {questionPageText.optionTextYes[selectedLanguage]}
        </Link>
        <Link href="/jeremiah" className={styles.textButton}>
          {questionPageText.optionTextNo[selectedLanguage]}
        </Link>
      </div>
    </>
  );
}
