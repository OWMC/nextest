"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "sbt/distro/button/Button";
import Header from "sbt/distro/header/Header";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState('');
  const handleClick = () => {
    let named = userName === '' ? "qanon" : userName;
    alert('Hello ' + named + '!');
  };

  return (
    <div className={styles.page}>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        logoLink = {{
          url: "#",
          title: "nothing"
        }}
      />
      <main className={styles.main}>
        <h2>What is your name?</h2>
        <input
          className={styles.input}
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <br />
        <Button
          href=""
          label="Say hi!"
          onClick={() => {handleClick()}}
          size="small"
        />
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
