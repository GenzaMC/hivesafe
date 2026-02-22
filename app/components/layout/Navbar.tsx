"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const copyId = () => {
    if (session?.user?.id) {
      navigator.clipboard.writeText(session.user.id)
    }
  }

  const username =
    session?.user?.globalName ||
    session?.user?.username ||
    "User"

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* LEFT SIDE */}
        <div className={styles.leftSide}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/HiveSafe.png"
              alt="HiveSafe Logo"
              width={75}
              height={75}
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
          <a
            href="https://discord.gg/PrrH85Yn9U"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.discordBtn}`}
          >
            Discord
          </a>

          {!session ? (
            <button
              onClick={() => signIn("discord")}
              className={`${styles.btn} ${styles.loginBtn}`}
            >
              Login
            </button>
          ) : (
            <div className={styles.userDropdown}>
              <button
                className={styles.userTrigger}
                onClick={() => setOpen(!open)}
              >
                {session.user?.image && !imageError ? (
                  <Image
                    src={session.user.image}
                    alt=""
                    width={28}
                    height={28}
                    className={styles.avatar}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className={styles.avatarFallback}>
                    {username.charAt(0).toUpperCase()}
                  </div>
                )}

                <span>{username}</span>
              </button>

              {open && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem}>
                    ID: {session.user?.id}
                  </div>

                  <button
                    onClick={copyId}
                    className={styles.dropdownButton}
                  >
                    Copy ID
                  </button>

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className={styles.logoutButton}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}

          <a href="/#apply" className={`${styles.btn} ${styles.applyBtn}`}>
            Apply
          </a>
        </div>

      </div>
    </header>
  )
}