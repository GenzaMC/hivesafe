import styles from "../page.module.css"

export default function FamilyApply() {
  return (
    <div className={styles.formCard}>
      <h1>Bee Family Application</h1>

      {/* FAMILY INFO */}
      <div className={styles.sectionTitle}>Family Information</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>How many applicants?</label>
        <input type="number" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Who is the legally responsible adult?
        </label>
        <input type="text" required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Is there an adult actively playing?
        </label>
        <input type="text" required />
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

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          We understand that members may be removed individually for rule
          violations.
        </span>
      </div>

      {/* ADULT APPLICANTS */}
      <div className={styles.sectionTitle}>Adult Applicants</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Adult Details (Username, Age, Discord, Country)
        </label>
        <textarea required />
      </div>

      {/* CHILD INFORMATION */}
      <div className={styles.sectionTitle}>Child Information</div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Child Details (Username, Age, Discord if 13+)
        </label>
        <textarea required />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Have the children played Minecraft before?
        </label>
        <textarea />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Do you play together as a family?
        </label>
        <textarea />
      </div>

      {/* EXPECTATIONS */}
      <div className={styles.sectionTitle}>
        Expectations & Conflict Handling
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          What do you hope to gain from HiveSafe?
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
          How would you handle conflicts involving your child?
        </label>
        <textarea required />
      </div>

      {/* CONFIRMATION */}
      <div className={styles.sectionTitle}>Rules & Consent</div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>All adults confirm rules are read and accepted.</span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>We accept the zero-tolerance policy for toxic behaviour.</span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          We understand that HiveSafe is actively moderated and chat logs may
          be stored for moderation.
        </span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          We confirm Discord age rules are respected.
        </span>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" required />
        <span>
          The adult confirms legal responsibility for the child/children.
        </span>
      </div>

      <button type="submit">Submit Family Application</button>
    </div>
  )
}
