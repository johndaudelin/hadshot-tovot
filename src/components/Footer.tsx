import styles from "@/styles/Footer.module.css";
import { Mail01Icon } from "hugeicons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="mailto:test@test.com">
        <Mail01Icon />
      </Link>
    </div>
  );
}
