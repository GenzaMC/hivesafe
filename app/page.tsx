"use client"

import styles from "./page.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {

  /* ========================= */
  /* LIVE PLAYER COUNTER */
  /* ========================= */

  const [players, setPlayers] = useState<number | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/server-status")
        const data = await res.json()
        setPlayers(data.players ?? 0)
      } catch {
        setPlayers(0)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])


  /* ========================= */
  /* MONTH COUNTER (Since 1 May 2026) */
  /* ========================= */

  const [monthsOnline, setMonthsOnline] = useState<number>(0)

  useEffect(() => {
    const calculateMonths = () => {
      const startDate = new Date("2026-05-01T00:00:00")
      const now = new Date()

      if (now < startDate) {
        setMonthsOnline(0)
        return
      }

      const yearsDiff = now.getFullYear() - startDate.getFullYear()
      const monthsDiff = now.getMonth() - startDate.getMonth()

      const totalMonths = yearsDiff * 12 + monthsDiff
      setMonthsOnline(totalMonths)
    }

    calculateMonths()
    const interval = setInterval(calculateMonths, 1000 * 60 * 60 * 24)
    return () => clearInterval(interval)
  }, [])


  /* ========================= */
  /* WHITELIST PROGRESS */
  /* ========================= */

  const [whitelisted] = useState<number>(32) // Skift senere til API

  const progressPercent = Math.min((whitelisted / 800) * 100, 100)


  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Welcome to HiveSafe</h1>
        <p className={styles.subtitle}>
          A carefully curated Minecraft whitelist server
          designed to provide a safe, friendly, and welcoming space for players of all ages.
        </p>

        <a href="#apply" className={styles.applyButton}>
          Enter The Hive
        </a>
      </section>


      {/* HOW TO JOIN */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>How To Join</h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>Step 1</div>
            <h3>Submit Application</h3>
            <p>Choose your path and submit your whitelist application for review.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>Step 2</div>
            <h3>Application Review</h3>
            <p>Our moderation team carefully reviews each application to maintain quality and trust.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>Step 3</div>
            <h3>Access Granted</h3>
            <p>Once approved, you gain access to the server and begin your journey within HiveSafe.</p>
          </div>
        </div>
      </section>


      {/* WHY HIVESAFE */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.right}`}>
          <h2 className={styles.sectionTitle}>Why HiveSafe?</h2>
        </div>

        <div className={styles.trustGrid}>
          <div className={styles.featureCard}>
            <h3>Moderated</h3>
            <p>
              Zero tolerance for toxicity. Active moderation ensures a secure and respectful community.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Verified Community</h3>
            <p>
              All members are whitelisted and carefully reviewed before being granted access to ensure a secure and respectful environment.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Persistent World</h3>
            <p>
              Structured survival world designed for stability and continuity. Reset only when required.
            </p>
          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>The Hive Experience</h2>
        </div>

        <div className={styles.experienceBox}>
          HiveSafe is built with longevity in mind.
          It is a protected survival environment where players build, collaborate, and grow within a structured and respectful community.

          Every member is reviewed.
          Every action has accountability.
          Every build contributes to a lasting world.
        </div>
      </section>


      {/* LIVE STATS */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.right}`}>
          <h2 className={styles.sectionTitle}>Live Server Stats</h2>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {players !== null ? players : "—"} Online
            </div>
            <span className={styles.statLabel}>
              Players currently online, active and competing within the HiveSafe network.
            </span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {monthsOnline} {monthsOnline === 1 ? "Month" : "Months"}
            </div>
            <span className={styles.statLabel}>
              HiveSafe has been continuously online since 1 May 2026.
            </span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {whitelisted} Verified
            </div>
            <span className={styles.statLabel}>
              Officially whitelisted, verified and trusted within the HiveSafe network.
            </span>
          </div>
        </div>

        {/* WHITELIST PROGRESS BAR */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressHeader}>
            <span>Whitelist Progress</span>
            <span>{whitelisted} Members</span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={styles.progressSteps}>
            <span>0</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
            <span>400</span>
            <span>800+</span>
          </div>
        </div>
      </section>


      {/* APPLY */}
      <section id="apply" className={styles.applyWrapper}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>
            Apply to become a member
          </h2>
        </div>

        <div className={styles.applySection}>
          <BeeCard
            title="Alone Bee"
            image="/lone-bee.png"
            description="Apply alone and start your journey. Perfect for solo players."
            href="/apply/alone"
          />

          <BeeCard
            title="Bee Squad"
            image="/bee-squad.png"
            description="Apply together with your friends. Built for small groups."
            href="/apply/squad"
          />

          <BeeCard
            title="Bee Family"
            image="/bee-family.png"
            description="Apply as a family unit. Safe and welcoming for everyone."
            href="/apply/family"
          />
        </div>
      </section>

    </main>
  )
}


/* ========================= */
/* BEE CARD COMPONENT */
/* ========================= */

function BeeCard({
  title,
  image,
  description,
  href,
}: {
  title: string
  image: string
  description: string
  href: string
}) {
  return (
    <div className={styles.beeCard}>
      <div className={styles.cardHeader}>
        <img src={image} alt={title} className={styles.beeImage} />
      </div>

      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link href={href} className={styles.applyButton}>
          Apply Now
        </Link>

        <span className={styles.cardFooter}>
          HiveSafe • 2026
        </span>
      </div>
    </div>
  )
}
