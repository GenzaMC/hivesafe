"use client"

import { useState } from "react"
import styles from "../page.module.css"

export default function AloneApply() {
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [toxAccepted, setToxAccepted] = useState(false)

  const canSubmit = rulesAccepted && toxAccepted

  return (
    <section className={styles.applySection}>

      {/* ================= HERO ================= */}
      <div className={styles.hero}>

        <div className={styles.heroTop}>
          <h1 className={styles.heroMainTitle}>
            HiveSafe Applications
          </h1>

          <p className={styles.heroSubtitle}>
            Apply as a Lone Bee and become part of our safe, friendly and
            welcoming Minecraft whitelist community.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>
              Lone Bee Application
            </h2>
          </div>
        </div>

      </div>

      {/* ================= FORM ================= */}
      <form className={styles.formWrapper}>

        {/* BASIC INFORMATION */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Basic Information</h3>

          <div className={styles.formGrid}>

            <div>
              <label className={styles.label} htmlFor="username">
                Minecraft Username
              </label>
              <input id="username" type="text" required />
            </div>

            <div>
              <label className={styles.label} htmlFor="age">
                Age
              </label>
              <input id="age" type="number" min="13" required />
            </div>

            <div>
              <label className={styles.label} htmlFor="country">
                Country
              </label>
              <input id="country" type="text" required />
            </div>

            <div>
              <label className={styles.label} htmlFor="discord">
                Discord (13+ required)

                <span className={styles.infoIcon}>
                  i
                  <span className={styles.tooltip}>
                    If you are under 13 years old, a parent or a trusted 18+ guardian must join our Discord server on your behalf.
                  </span>
                </span>

              </label>
              <input id="discord" type="text" required />
            </div>

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Experience</h3>

          <div className={styles.formGrid}>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                How long have you played Minecraft?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                What type of player are you?
                <br />
                (Builder, Redstone, Explorer, PvP-light, etc.)
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Have you previously played on whitelist servers?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Have you ever been banned? If yes, explain why.
              </label>
              <textarea required />
            </div>

          </div>
        </div>

        {/* PERSONALITY */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Personality & Community</h3>

          <div className={styles.formGrid}>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Why do you want to play on HiveSafe?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                What does “safe community” mean to you?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Give a specific example of how you previously handled a conflict.
              </label>
              <textarea required />
            </div>

          </div>
        </div>

        {/* RULES */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Rules & Confirmation</h3>

          <div className={styles.formFooter}>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                required
                onChange={(e) => setRulesAccepted(e.target.checked)}
              />
              <label>
                I confirm that I have read, understood, and accepted the rules.
              </label>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                required
                onChange={(e) => setToxAccepted(e.target.checked)}
              />
              <label>
                I confirm that I accept zero-tolerance for toxic behavior.
              </label>
            </div>

            <button type="submit" disabled={!canSubmit}>
              Submit Application
            </button>

          </div>
        </div>

      </form>
    </section>
  )
}