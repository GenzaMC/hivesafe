"use client"

import { useState } from "react"
import styles from "../page.module.css"

export default function BeeSquadApply() {
  const [playerCount, setPlayerCount] = useState(2)
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [toxAccepted, setToxAccepted] = useState(false)

  const canSubmit = rulesAccepted && toxAccepted
  const players = Array.from({ length: playerCount })

  return (
    <section className={styles.applySection}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <h1 className={styles.heroMainTitle}>
            HiveSafe Applications
          </h1>
          <p className={styles.heroSubtitle}>
            Apply as a Bee Squad (2–8 players) and join HiveSafe together.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>
              Bee Squad Application
            </h2>
          </div>
        </div>
      </div>

      <form className={styles.formWrapper}>

        {/* GROUP SIZE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Group Information</h3>

          <div className={styles.formGrid}>

            <div>
              <label className={styles.label}>
                How many are applying? (2–8)
              </label>
              <input
                type="number"
                min="2"
                max="8"
                value={playerCount}
                onChange={(e) =>
                  setPlayerCount(
                    Math.min(8, Math.max(2, Number(e.target.value)))
                  )
                }
                required
              />
            </div>

            <div>
              <label className={styles.label}>
                Country
              </label>
              <input type="text" required />
            </div>

            <div>
              <label className={styles.label}>
                Who is the group leader?
              </label>
              <input type="text" required />
            </div>

            <div>
              <label className={styles.label}>
                Who contacts staff in case of problems?
              </label>
              <input type="text" required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                How long have you known each other?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                List of all members
                <br />
                (Minecraft username, age, Discord if 13+)
              </label>
              <textarea required />
            </div>

          </div>
        </div>

        {/* INDIVIDUAL PLAYER INFO */}
        {players.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>
              Player {index + 1}
            </h3>

            <div className={styles.formGrid}>

              <div>
                <label className={styles.label}>
                  Minecraft Username
                </label>
                <input type="text" required />
              </div>

              <div>
                <label className={styles.label}>
                  Age
                </label>
                <input type="number" min="13" required />
              </div>

              <div>
                <label className={styles.label}>
                  Discord (13+ required)
                  <span className={styles.infoIcon}>
                    i
                    <span className={styles.tooltip}>
                      If under 13, a parent or trusted 18+ guardian must join Discord.
                    </span>
                  </span>
                </label>
                <input type="text" required />
              </div>

              <div>
                <label className={styles.label}>
                  How long have you played Minecraft?
                </label>
                <input type="text" required />
              </div>

            </div>
          </div>
        ))}

        {/* EXPERIENCE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Experience</h3>

          <div className={styles.formGrid}>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Has anyone previously been banned? If yes, explain.
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
                What type of players are each of you?
                (Builder, Redstone, Explorer, PvP-light, etc.)
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                How often do you play together?
              </label>
              <textarea required />
            </div>

          </div>
        </div>

        {/* GROUP CULTURE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Group Culture</h3>

          <div className={styles.formGrid}>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                How do you handle internal disagreements?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                What do you do if a member breaks the rules?
              </label>
              <textarea required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Do you understand that members can be removed individually in case of rule violations?
              </label>
              <textarea required />
            </div>

          </div>
        </div>

        {/* MOTIVATION */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Motivation & Community</h3>

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
                How do you handle conflicts with other players?
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
                Do ALL members confirm that the rules have been read, understood, and accepted?
              </label>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                required
                onChange={(e) => setToxAccepted(e.target.checked)}
              />
              <label>
                Does the group confirm that you accept 0-tolerance for toxic behavior?
              </label>
            </div>

            <button type="submit" disabled={!canSubmit}>
              Submit Squad Application
            </button>

          </div>
        </div>

      </form>
    </section>
  )
}