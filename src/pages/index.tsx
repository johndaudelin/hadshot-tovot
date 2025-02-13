"use client";

import Image from "next/image";
import styles from "@/styles/Page.module.scss";
import ukFlag from "../../public/uk_flag.png";
import russianFlag from "../../public/russian_flag.png";
import israelFlag from "../../public/israel_flag.png";
import { useContext } from "react";
import SelectedLanguageContext from "../context/SelectedLanguageContext";
import { useRouter } from "next/navigation";

const languages = [
  {
    img: ukFlag,
    text: "English",
    acronym: "en",
  },
  {
    img: russianFlag,
    text: "Russian",
    acronym: "ru",
  },
  {
    img: israelFlag,
    text: "Hebrew",
    acronym: "he",
  },
];

export default function HomePage() {
  const { setSelectedLanguage } = useContext(SelectedLanguageContext);

  const router = useRouter();

  return (
    <>
      <span className={styles.heading}>Select Your Language</span>
      <div className={styles.options}>
        {languages.map((language) => (
          <div
            key={language.text}
            className={styles.option}
            onClick={() => {
              setSelectedLanguage(language.acronym as "en" | "ru" | "he");
              router.push("/question");
            }}
          >
            <Image
              key={language.text}
              className={styles.flag}
              src={language.img}
              alt={language.text}
              height={50}
            />
            <p>{language.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
