"use client";

import styles from "@/styles/Navbar.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft01Icon } from "hugeicons-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={
        isHomePage ? styles.backButtonDisabled : styles.backButtonEnabled
      }
      onClick={() => (isHomePage ? null : router.back())}
    >
      <ArrowLeft01Icon />
      <span>Back</span>
    </div>
  );
}
