"use client"

import { useState } from "react"
import { useSession, signIn } from "next-auth/react"
import styles from "../page.module.css"

export default function BeeSquadApply() {
  const { data: session, status } = useSession()

  const [playerCount, setPlayerCount] = useState(2)
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [toxAccepted, setToxAccepted] = useState(false)

  const canSubmit = rulesAccepted && toxAccepted
  const members = Array.from({ length: playerCount })

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

    const memberData = members.map((_, index) => ({
      username: formData.get(`member_username_${index}`),
      age: formData.get(`member_age_${index}`),
      discord: formData.get(`member_discord_${index}`),
      country: formData.get(`member_country_${index}`),
      playerType: formData.get(`member_type_${index}`)
    }))

    const payload = {
      type: "squad",
      applicationId: "HS-" + Date.now().toString(36).toUpperCase(),
      submittedBy: session.user.id,

      playerCount,
      country: formData.get("country"),
      leader: formData.get("leader"),
      contact: formData.get("contact"),
      knownLong: formData.get("knownLong"),

      banned: formData.get("banned"),
      whitelist: formData.get("whitelist"),
      playTogether: formData.get("playTogether"),

      disagreements: formData.get("disagreements"),
      ruleBreak: formData.get("ruleBreak"),
      removalUnderstanding: formData.get("removalUnderstanding"),

      motivation: formData.get("motivation"),
      safeMeaning: formData.get("safeMeaning"),
      conflictHandling: formData.get("conflictHandling"),

      members: memberData
    }

    await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    alert("Squad application sent successfully!")

    e.currentTarget.reset()
    setPlayerCount(2)
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
            Apply as a Bee Squad (2–8 players) and join HiveSafe together in a safe and actively moderated whitelist environment.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>Bee Squad Application</h2>
          </div>
        </div>
      </div>

      <form className={styles.formWrapper} onSubmit={handleSubmit}>

        {/* GROUP INFO */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Group Information</h3>

          <div className={styles.formGrid}>
            <div>
              <label className={styles.label}>How many members? (2–8)</label>
              <input
                type="number"
                min="2"
                max="8"
                value={playerCount}
                onChange={(e) =>
                  setPlayerCount(Math.min(8, Math.max(2, Number(e.target.value))))
                }
                required
              />
            </div>

            <div>
              <label className={styles.label}>Main Country</label>
              <input type="text" name="country" required />
            </div>

            <div>
              <label className={styles.label}>Who is the group leader?</label>
              <input type="text" name="leader" required />
            </div>

            <div>
              <label className={styles.label}>
                Who contacts staff in case of problems?
              </label>
              <input type="text" name="contact" required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                How long have you known each other?
              </label>
              <textarea name="knownLong" required />
            </div>
          </div>
        </div>

        {/* MEMBERS */}
        {members.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>Member {index + 1}</h3>

            <div className={styles.formGrid}>
              <div>
                <label className={styles.label}>Minecraft Username</label>
                <input type="text" name={`member_username_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>Age (13+)</label>
                <input type="number" min="13" name={`member_age_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>
                  Discord ID
                  <span className={styles.infoIcon}>
                    i
                    <span className={styles.tooltip}>
                      Members must be 13+ to use Discord.
                      If under 13, a parent (18+) Discord must be used instead.
                    </span>
                  </span>
                </label>
                <input type="text" name={`member_discord_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>Country</label>
                <input type="text" name={`member_country_${index}`} required />
              </div>

              <div className={styles.formGridFull}>
                <label className={styles.label}>
                  What type of player is this member?
                </label>
                <input type="text" name={`member_type_${index}`} required />
              </div>
            </div>
          </div>
        ))}

        {/* EXPERIENCE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Experience</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Has anyone previously been banned? If yes, explain.
            </label>
            <textarea name="banned" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Have you previously played on whitelist servers?
            </label>
            <textarea name="whitelist" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How often do you play together?
            </label>
            <textarea name="playTogether" required />
          </div>
        </div>

        {/* GROUP CULTURE */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Group Culture</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How do you handle disagreements?
            </label>
            <textarea name="disagreements" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              What happens if someone breaks the rules?
            </label>
            <textarea name="ruleBreak" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Do you understand members can be removed individually?
            </label>
            <textarea name="removalUnderstanding" required />
          </div>
        </div>

        {/* MOTIVATION */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Motivation & Community</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Why does your squad want to join HiveSafe?
            </label>
            <textarea name="motivation" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              What does a safe community mean to you?
            </label>
            <textarea name="safeMeaning" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How do you handle conflicts with other players?
            </label>
            <textarea name="conflictHandling" required />
          </div>
        </div>

        {/* RULES */}
        <div className={styles.formCard}>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setRulesAccepted(e.target.checked)} />
            <label>All members confirm rules are accepted.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setToxAccepted(e.target.checked)} />
            <label>Zero tolerance for toxic behavior.</label>
          </div>

          <button type="submit" disabled={!canSubmit}>
            Submit Squad Application
          </button>
        </div>

      </form>
    </section>
  )
}