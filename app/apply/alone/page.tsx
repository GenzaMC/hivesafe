"use client"

import { useState } from "react"
import { useSession, signIn } from "next-auth/react"
import styles from "../page.module.css"

export default function AloneApply() {
  const { data: session, status } = useSession()

  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [toxAccepted, setToxAccepted] = useState(false)

  const canSubmit = rulesAccepted && toxAccepted

  // 🔐 Require login
  if (status === "loading") return null

  if (!session) {
  return (
    <section className={styles.applySection}>

      {/* SHORT HERO */}
      <div
        style={{
          paddingTop: "160px",
          paddingBottom: "40px",
          textAlign: "center"
        }}
      >
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>
            Login Required
          </h2>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>

          <h3 className={styles.cardTitle}>
            Discord Login (Required)
          </h3>

          <p style={{ marginBottom: "25px", color: "#ffe39a" }}>
            You must be logged in with Discord to submit this application.
          </p>

          <button onClick={() => signIn("discord")}>
            Login with Discord
          </button>

        </div>
      </div>

    </section>
  )
}

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const payload = {
      type: "alone",
      applicationId: "HS-" + Date.now().toString(36).toUpperCase(),
      submittedBy: session.user.id,

      username: formData.get("username"),
      age: formData.get("age"),
      country: formData.get("country"),
      discord: formData.get("discord"),

      playedLong: formData.get("playedLong"),
      playerType: formData.get("playerType"),
      whitelistPlayed: formData.get("whitelistPlayed"),
      banned: formData.get("banned"),

      motivation: formData.get("motivation"),
      safeCommunity: formData.get("safeCommunity"),
      conflict: formData.get("conflict")
    }

    await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    alert("Application sent successfully!")

    e.currentTarget.reset()
    setRulesAccepted(false)
    setToxAccepted(false)
  }

  return (
    <section className={styles.applySection}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <h1 className={styles.heroMainTitle}>HiveSafe Applications</h1>
          <p className={styles.heroSubtitle}>
            Apply as an Alone Bee and become part of a safe, welcoming and actively moderated Minecraft whitelist community.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>Alone Bee Application</h2>
          </div>
        </div>
      </div>

      <form className={styles.formWrapper} onSubmit={handleSubmit}>

        {/* BASIC INFO */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Basic Information</h3>

          <div className={styles.formGrid}>
            <div>
              <label className={styles.label}>Minecraft Username</label>
              <input name="username" type="text" required />
            </div>

            <div>
              <label className={styles.label}>Age (13+)</label>
              <input name="age" type="number" min="13" required />
            </div>

            <div>
              <label className={styles.label}>Country</label>
              <input name="country" type="text" required />
            </div>

            <div>
              <label className={styles.label}>
                Discord ID
                <span className={styles.infoIcon}>
                  i
                  <span className={styles.tooltip}>
                    You must be 13+ to use Discord.<br /><br />
                    If you are under 13, a parent or adult (18+) must provide their Discord ID instead.
                  </span>
                </span>
              </label>
              <input name="discord" type="text" required />
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Experience</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How long have you played Minecraft?
            </label>
            <textarea name="playedLong" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              What type of player are you? (Builder, Redstone, PvE, Explorer, etc.)
            </label>
            <textarea name="playerType" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Have you played on whitelist servers before?
            </label>
            <textarea name="whitelistPlayed" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Have you ever been banned? If yes, explain honestly.
            </label>
            <textarea name="banned" required />
          </div>
        </div>

        {/* PERSONALITY */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Personality & Community</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Why do you want to join HiveSafe?
            </label>
            <textarea name="motivation" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              What does a safe and friendly community mean to you?
            </label>
            <textarea name="safeCommunity" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How do you handle conflicts or disagreements with other players?
            </label>
            <textarea name="conflict" required />
          </div>
        </div>

        {/* RULES */}
        <div className={styles.formCard}>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              required
              checked={rulesAccepted}
              onChange={(e) => setRulesAccepted(e.target.checked)}
            />
            <label>
              I confirm that I have read, understood, and accepted the HiveSafe rules.
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              required
              checked={toxAccepted}
              onChange={(e) => setToxAccepted(e.target.checked)}
            />
            <label>
              I accept HiveSafe’s zero-tolerance policy for toxic behavior.
            </label>
          </div>

          <button type="submit" disabled={!canSubmit}>
            Submit Application
          </button>
        </div>

      </form>
    </section>
  )
}