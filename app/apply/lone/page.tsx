import styles from "../page.module.css"

export default function LoneApply() {
  return (
    <div className={styles.formCard}>
      <h1>Lone Bee Application</h1>

      {/* BASIC INFO */}
      <div className={styles.sectionTitle}>Basic Information</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Minecraft Username</label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Age</label>
        <input type="number" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Country</label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Discord (13+ required)</label>
        <input type="text" required />
      </div>

      {/* EXPERIENCE */}
      <div className={styles.sectionTitle}>Experience</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          How long have you played Minecraft?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          What type of player are you?
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Have you played on whitelist servers before?
        </label>
        <textarea />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Have you ever been banned? If yes, explain why.
        </label>
        <textarea />
      </div>

      {/* PERSONALITY */}
      <div className={styles.sectionTitle}>Personality & Community</div>

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
          Give an example of how you handled a conflict.
        </label>
        <textarea required />
      </div>

      {/* CONFIRMATION */}
      <div className={styles.sectionTitle}>Rules & Confirmation</div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>I confirm that I have read and accept the rules.</span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>I accept the zero-tolerance policy for toxic behaviour.</span>
      </div>

      <button type="submit">Submit Application</button>
    </div>
  )
}
