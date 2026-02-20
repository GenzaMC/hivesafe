"use client"

import { useState } from "react"
import styles from "../page.module.css"

export default function BeeFamilyApply() {
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(1)

  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [toxAccepted, setToxAccepted] = useState(false)
  const [moderationAccepted, setModerationAccepted] = useState(false)
  const [logsAccepted, setLogsAccepted] = useState(false)
  const [discordAccepted, setDiscordAccepted] = useState(false)
  const [responsibleAccepted, setResponsibleAccepted] = useState(false)
  const [contactAccepted, setContactAccepted] = useState(false)

  const canSubmit =
    rulesAccepted &&
    toxAccepted &&
    moderationAccepted &&
    logsAccepted &&
    discordAccepted &&
    responsibleAccepted &&
    contactAccepted

  const adults = Array.from({ length: adultCount })
  const children = Array.from({ length: childCount })

  return (
    <section className={styles.applySection}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <h1 className={styles.heroMainTitle}>
            HiveSafe Applications
          </h1>
          <p className={styles.heroSubtitle}>
            Apply as a Bee Family and join HiveSafe together in a safe and moderated whitelist environment.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>
              Bee Family Application
            </h2>
          </div>
        </div>
      </div>

      <form className={styles.formWrapper}>

        {/* FAMILY INFORMATION */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Family Information</h3>

          <div className={styles.formGrid}>

            <div>
              <label className={styles.label}>
                How many adults are applying? (1–8)
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={adultCount}
                onChange={(e) =>
                  setAdultCount(
                    Math.min(8, Math.max(1, Number(e.target.value)))
                  )
                }
                required
              />
            </div>

            <div>
              <label className={styles.label}>
                How many children are applying? (1–8)
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={childCount}
                onChange={(e) =>
                  setChildCount(
                    Math.min(8, Math.max(1, Number(e.target.value)))
                  )
                }
                required
              />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Who is the legally responsible adult?
              </label>
              <input type="text" required />
            </div>

            <div>
              <label className={styles.label}>
                Is there an adult who actively plays on the server?
              </label>
              <input type="text" required />
            </div>

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

        {/* ADULTS */}
        {adults.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>
              Adult {index + 1}
            </h3>

            <div className={styles.formGrid}>
              <div>
                <label className={styles.label}>Minecraft Username</label>
                <input type="text" required />
              </div>

              <div>
                <label className={styles.label}>Age</label>
                <input type="number" min="18" required />
              </div>

              <div>
                <label className={styles.label}>Discord</label>
                <input type="text" required />
              </div>

              <div>
                <label className={styles.label}>Country</label>
                <input type="text" required />
              </div>
            </div>
          </div>
        ))}

        {/* CHILDREN */}
        {children.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>
              Child {index + 1}
            </h3>

            <div className={styles.formGrid}>

              <div>
                <label className={styles.label}>Minecraft Username</label>
                <input type="text" required />
              </div>

              <div>
                <label className={styles.label}>Age</label>
                <input type="number" min="6" required />
              </div>

              <div>
                <label className={styles.label}>
                  Discord (13+ only – otherwise use adult Discord)
                </label>
                <input type="text" />
              </div>

              <div>
                <label className={styles.label}>
                  Has the child played Minecraft before?
                </label>
                <input type="text" required />
              </div>

              <div className={styles.formGridFull}>
                <label className={styles.label}>
                  Do you play together as a family?
                </label>
                <textarea required />
              </div>

              <div className={styles.formGridFull}>
                <label className={styles.label}>
                  Is the child informed about the server rules? (Yes/No)
                </label>
                <input type="text" required />
              </div>

            </div>
          </div>
        ))}

        {/* EXPECTATIONS */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Expectations & Conflict Handling</h3>

          <div className={styles.formGrid}>
            <div className={styles.formGridFull}>
              <label className={styles.label}>
                What do you hope to gain from HiveSafe?
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
                How do you handle it if your child disagrees with another player?
              </label>
              <textarea required />
            </div>
          </div>
        </div>

        {/* RULES */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Rules & Consent (Adults Only)</h3>

          <div className={styles.formFooter}>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setRulesAccepted(e.target.checked)} />
              <label>All adults confirm rules are read and accepted.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setToxAccepted(e.target.checked)} />
              <label>We accept 0-tolerance for toxic behavior.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setModerationAccepted(e.target.checked)} />
              <label>We understand HiveSafe is actively moderated.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setLogsAccepted(e.target.checked)} />
              <label>We understand chat logs may be stored for moderation.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setDiscordAccepted(e.target.checked)} />
              <label>We confirm Discord age rules are followed.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setResponsibleAccepted(e.target.checked)} />
              <label>We confirm we are legally responsible for the child/children.</label>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" required onChange={(e) => setContactAccepted(e.target.checked)} />
              <label>We agree to be contacted in case of issues.</label>
            </div>

            <button type="submit" disabled={!canSubmit}>
              Submit Family Application
            </button>

          </div>
        </div>

      </form>
    </section>
  )
}