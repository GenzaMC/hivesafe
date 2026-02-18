"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>

        {/* Empty space left – logo is absolute */}
        <div className={styles.leftSpace}></div>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/team">Team</Link>
          <Link href="/donate">Donate</Link>
          <button className={styles.loginBtn}>Login</button>
        </div>

        {/* Floating Logo (Clickable to Home) */}
        <Link href="/" className={styles.floatingLogo}>
          <Image
            src="/HiveSafe.png"
            alt="HiveSafe Logo"
            width={220}
            height={120}
            priority
          />
        </Link>

      </nav>
    </div>
  )
}
