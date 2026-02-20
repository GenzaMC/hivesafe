"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* LEFT SIDE */}
        <div className={styles.leftSide}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/HiveSafe.png"
              alt="HiveSafe Logo"
              width={100}
              height={45}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/rules">Rules</Link>
            <Link href="/team">Team</Link>
            <Link href="/donate">Donate</Link>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightSide}>
          <a href="#" className={`${styles.btn} ${styles.discordBtn}`}>
            Discord
          </a>

          <button className={`${styles.btn} ${styles.loginBtn}`}>
            Login
          </button>

          <a href="/#apply" className={`${styles.btn} ${styles.applyBtn}`}>
            Apply
          </a>
        </div>

      </div>
    </header>
  )
}