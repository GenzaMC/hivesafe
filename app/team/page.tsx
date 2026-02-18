import styles from "./team.module.css"

export default function TeamPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.teamWrapper}>

          <h1 className={styles.title}>
            Meet Our HiveSafe Team
          </h1>

          {/* OWNER */}
          <div className={styles.staffSection}>
            <h2 className={styles.sectionTitle}>Owner</h2>
            <div className={styles.staffGrid}>
              <StaffCard
                name="TotnoAS"
                role="Owner"
                description="Founder of HiveSafe Community"
                discord="Holger - 21 Year"
              />
            </div>
          </div>

          {/* ADMIN */}
          <div className={styles.staffSection}>
            <h2 className={styles.sectionTitle}>Admin</h2>
            <div className={styles.staffGrid}>
              <StaffCard
                name="Notch"
                role="Admin"
                description="HiveSafe Foundation."
                discord="Name + Year"
              />
              <StaffCard
                name="Notch"
                role="Admin"
                description="HiveSafe Foundation."
                discord="Name + Year"
              />
            </div>
          </div>

          {/* MODERATOR */}
          <div className={styles.staffSection}>
            <h2 className={styles.sectionTitle}>Moderator</h2>
            <div className={styles.staffGrid}>
              <StaffCard
                name="Notch"
                role="Moderator"
                description="Keeping HiveSafe Secure."
                discord="Name + Year"
              />
              <StaffCard
                name="Notch"
                role="Moderator"
                description="Keeping HiveSafe Secure."
                discord="Name + Year"
              />
            </div>
          </div>

          {/* HELPER */}
          <div className={styles.staffSection}>
            <h2 className={styles.sectionTitle}>Helper</h2>
            <div className={styles.staffGrid}>
              <StaffCard
                name="Notch"
                role="Helper"
                description="Community Helper."
                discord="Name + Year"
              />
              <StaffCard
                name="Notch"
                role="Helper"
                description="Community Helper."
                discord="Name + Year"
              />
            </div>
          </div>

          {/* SUPPORT */}
          <div className={styles.staffSection}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <div className={styles.staffGrid}>
              <StaffCard
                name="Notch"
                role="Support"
                description="Discord Support."
                discord="Name + Year"
              />
              <StaffCard
                name="Notch"
                role="Support"
                description="Discord Support."
                discord="Name + Year"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

/* ================= STAFF CARD ================= */

function StaffCard({
  name,
  role,
  description,
  discord,
}: {
  name: string
  role: string
  description: string
  discord: string
}) {

  const badgeClass =
    role === "Owner"
      ? styles.ownerBadge
      : role === "Admin"
      ? styles.adminBadge
      : role === "Moderator"
      ? styles.moderatorBadge
      : role === "Helper"
      ? styles.helperBadge
      : styles.supportBadge

  return (
    <div className={styles.teamCard}>
      <img
        className={styles.avatar}
        src={`https://mc-heads.net/avatar/${name}`}
        alt={name}
      />

      <h3>{name}</h3>

      <span className={`${styles.badge} ${badgeClass}`}>
        {role}
      </span>

      <p className={styles.description}>{description}</p>
      <span className={styles.discord}>{discord}</span>
    </div>
  )
}
