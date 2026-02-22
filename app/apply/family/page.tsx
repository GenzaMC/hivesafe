"use client"

import { useState } from "react"
import { useSession, signIn } from "next-auth/react"
import styles from "../page.module.css"

export default function BeeFamilyApply() {
  const { data: session, status } = useSession()

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

    const adultData = adults.map((_, index) => ({
      username: formData.get(`adult_username_${index}`),
      age: formData.get(`adult_age_${index}`),
      discord: formData.get(`adult_discord_${index}`),
      country: formData.get(`adult_country_${index}`)
    }))

    const childData = children.map((_, index) => ({
      username: formData.get(`child_username_${index}`),
      age: formData.get(`child_age_${index}`),
      discord: formData.get(`child_discord_${index}`),
      playedBefore: formData.get(`child_played_${index}`),
      rulesInformed: formData.get(`child_rules_${index}`)
    }))

    const payload = {
      type: "family",
      applicationId: "HS-" + Date.now().toString(36).toUpperCase(),
      submittedBy: session.user.id,

      adultCount,
      childCount,

      responsible: formData.get("responsible"),
      activeAdult: formData.get("activeAdult"),
      banned: formData.get("banned"),
      whitelist: formData.get("whitelist"),
      playerTypes: formData.get("playerTypes"),
      removalUnderstanding: formData.get("removalUnderstanding"),

      familyPlayTogether: formData.get("familyPlayTogether"),
      motivation: formData.get("motivation"),
      safeMeaning: formData.get("safeMeaning"),
      conflictHandling: formData.get("conflictHandling"),

      adults: adultData,
      children: childData
    }

    await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    alert("Family application sent successfully!")

    e.currentTarget.reset()
    setAdultCount(1)
    setChildCount(1)

    setRulesAccepted(false)
    setToxAccepted(false)
    setModerationAccepted(false)
    setLogsAccepted(false)
    setDiscordAccepted(false)
    setResponsibleAccepted(false)
    setContactAccepted(false)
  }

  return (
    <section className={styles.applySection}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <h1 className={styles.heroMainTitle}>HiveSafe Applications</h1>
          <p className={styles.heroSubtitle}>
            Apply as a Bee Family and join HiveSafe together in a safe and actively moderated whitelist environment.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>Bee Family Application</h2>
          </div>
        </div>
      </div>

      <form className={styles.formWrapper} onSubmit={handleSubmit}>

        {/* FAMILY INFO */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Family Information</h3>

          <div className={styles.formGrid}>
            <div>
              <label className={styles.label}>How many adults are applying? (1–8)</label>
              <input type="number" min="1" max="8" value={adultCount}
                onChange={(e) => setAdultCount(Math.min(8, Math.max(1, Number(e.target.value))))}
                required />
            </div>

            <div>
              <label className={styles.label}>How many children are applying? (1–8)</label>
              <input type="number" min="1" max="8" value={childCount}
                onChange={(e) => setChildCount(Math.min(8, Math.max(1, Number(e.target.value))))}
                required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>Who is the legally responsible adult?</label>
              <input name="responsible" required />
            </div>

            <div>
              <label className={styles.label}>Is there an adult who actively plays on the server?</label>
              <input name="activeAdult" required />
            </div>

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
                What type of players are each of you?
              </label>
              <textarea name="playerTypes" required />
            </div>

            <div className={styles.formGridFull}>
              <label className={styles.label}>
                Do you understand that members can be removed individually?
              </label>
              <textarea name="removalUnderstanding" required />
            </div>
          </div>
        </div>

        {/* ADULTS */}
        {adults.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>Adult {index + 1}</h3>

            <div className={styles.formGrid}>
              <div>
                <label className={styles.label}>Minecraft Username</label>
                <input name={`adult_username_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>Age (18+)</label>
                <input type="number" min="18" name={`adult_age_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>
                  Discord ID
                  <span className={styles.infoIcon}>
                    i
                    <span className={styles.tooltip}>
                      Discord requires age 13+.
                    </span>
                  </span>
                </label>
                <input name={`adult_discord_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>Country</label>
                <input name={`adult_country_${index}`} required />
              </div>
            </div>
          </div>
        ))}

        {/* CHILDREN */}
        {children.map((_, index) => (
          <div className={styles.formCard} key={index}>
            <h3 className={styles.cardTitle}>Child {index + 1}</h3>

            <div className={styles.formGrid}>
              <div>
                <label className={styles.label}>Minecraft Username</label>
                <input name={`child_username_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>Age</label>
                <input type="number" min="6" name={`child_age_${index}`} required />
              </div>

              <div>
                <label className={styles.label}>
                  Discord (if 13+)
                  <span className={styles.infoIcon}>
                    i
                    <span className={styles.tooltip}>
                      Children under 13 must NOT use Discord.
                      A parent (18+) must provide their Discord instead.
                    </span>
                  </span>
                </label>
                <input name={`child_discord_${index}`} />
              </div>

              <div className={styles.formGridFull}>
                <label className={styles.label}>
                  Has the child played Minecraft before?
                </label>
                <input name={`child_played_${index}`} required />
              </div>

              <div className={styles.formGridFull}>
                <label className={styles.label}>
                  Has the child been informed about HiveSafe rules?
                </label>
                <input name={`child_rules_${index}`} required />
              </div>
            </div>
          </div>
        ))}

        {/* EXPECTATIONS */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Expectations & Conflict Handling</h3>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How does your family typically play together?
            </label>
            <textarea name="familyPlayTogether" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              Why does your family want to join HiveSafe?
            </label>
            <textarea name="motivation" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              What does a safe community mean to your family?
            </label>
            <textarea name="safeMeaning" required />
          </div>

          <div className={styles.formGridFull}>
            <label className={styles.label}>
              How do you handle conflicts or issues?
            </label>
            <textarea name="conflictHandling" required />
          </div>
        </div>

        {/* RULES */}
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Rules & Consent (Adults Only)</h3>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setRulesAccepted(e.target.checked)} />
            <label>All adults confirm rules are read and accepted.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setToxAccepted(e.target.checked)} />
            <label>We accept zero tolerance for toxic behavior.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setModerationAccepted(e.target.checked)} />
            <label>We understand HiveSafe is actively moderated.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setLogsAccepted(e.target.checked)} />
            <label>We understand chat logs may be stored for moderation.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setDiscordAccepted(e.target.checked)} />
            <label>We confirm Discord age rules are followed.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setResponsibleAccepted(e.target.checked)} />
            <label>We confirm we are legally responsible for the child/children.</label>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" required onChange={(e)=>setContactAccepted(e.target.checked)} />
            <label>We agree to be contacted in case of issues.</label>
          </div>

          <button type="submit" disabled={!canSubmit}>
            Submit Family Application
          </button>
        </div>

      </form>
    </section>
  )
}