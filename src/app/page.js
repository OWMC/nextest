"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "sbt/distro/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header
  login
  logoLink={{
    title: 'Title',
    url: '#'
  }}
  onCreateAccount={() => {}}
  onLogin={() => {}}
  onLogout={() => {}}
/>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://owmc.co.uk/custom/themes/owmc-v5-theme/img/owmc-logo.svg"
          alt="OWMC logo"
          width={244}
          height={56}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div>
        </div>  
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
