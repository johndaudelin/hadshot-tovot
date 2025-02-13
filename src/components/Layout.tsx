import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "@/styles/Layout.module.css";
import Head from "next/head";
import SelectedLanguageProvider from "../providers/SelectedLanguageProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>חדשות טובות</title>
        <meta
          name="description"
          content="An informational website with good news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectedLanguageProvider>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.mainContentWrapper}>{children}</main>
          <Footer />
        </div>
      </SelectedLanguageProvider>
    </>
  );
}
