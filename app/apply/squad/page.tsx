import styles from "../page.module.css"

export default function SquadApply() {
  return (
    <div className={styles.formCard}>
      <h1>Bee Squad Application</h1>

      {/* GROUP INFORMATION */}
      <div className={styles.sectionTitle}>Group Information</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>How many applicants?</label>
        <input type="number" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          List all members (Username, Age, Discord if 13+)
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Country</label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Who is group leader?</label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Who contacts staff if problems occur?
        </label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How long have you known each other?
        </label>
        <input type="text" required />
      </div>

      {/* EXPERIENCE */}
      <div className={styles.sectionTitle}>Experience</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How long has each member played Minecraft?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Has anyone been banned before? If yes, explain.
        </label>
        <textarea />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Have you played on whitelist servers before?
        </label>
        <textarea />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          What type of players are you? (Builder, Redstone, Explorer etc.)
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How often do you play together?
        </label>
        <input type="text" required />
      </div>

      {/* GROUP CULTURE */}
      <div className={styles.sectionTitle}>Group Culture</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How do you handle internal disagreements?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          What happens if a member breaks the rules?
        </label>
        <textarea required />
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          We understand that members may be removed individually for rule
          violations.
        </span>
      </div>

      {/* MOTIVATION */}
      <div className={styles.sectionTitle}>Motivation & Community</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Why do you want to join HiveSafe?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          What does “safe community” mean to you?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How do you handle conflicts with other players?
        </label>
        <textarea required />
      </div>

      {/* CONFIRMATION */}
      <div className={styles.sectionTitle}>Rules & Confirmation</div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          All members confirm that the rules are read, understood and accepted.
        </span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          We accept the zero-tolerance policy for toxic behaviour.
        </span>
      </div>

      <button type="submit">Submit Squad Application</button>
    </div>
  )
}
