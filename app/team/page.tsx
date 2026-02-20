"use client"

import styles from "./team.module.css"

export default function TeamPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Meet The Team
        </h1>
        <p className={styles.heroSubtitle}>
          Our dedicated staff team works tirelessly to maintain structure,
          ensure security, and foster a positive, high-quality community experience.
        </p>
      </section>

      {/* OWNER */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>Owner</h2>
        </div>

        <div className={styles.staffGrid}>
          <StaffCard
            name="TotnoAS"
            role="Owner"
            description="Founder of HiveSafe Community"
            discord="Holger - 21 Year"
            department="Executive Management"
            online={true}
          />
        </div>
      </section>

      {/* ADMIN */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.right}`}>
          <h2 className={styles.sectionTitle}>Admin</h2>
        </div>

        <div className={styles.staffGrid}>
          <StaffCard
            name="Notch"
            role="Admin"
            description="HiveSafe Foundation."
            discord="Name + Year"
            department="Server Administration"
            online={true}
          />
          <StaffCard
            name="Notch"
            role="Admin"
            description="HiveSafe Foundation."
            discord="Name + Year"
            department="Server Administration"
            online={false}
          />
        </div>
      </section>

      {/* MODERATOR */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>Moderator</h2>
        </div>

        <div className={styles.staffGrid}>
          <StaffCard
            name="Notch"
            role="Moderator"
            description="Keeping HiveSafe Secure."
            discord="Name + Year"
            department="Moderation Department"
            online={true}
          />
          <StaffCard
            name="Notch"
            role="Moderator"
            description="Keeping HiveSafe Secure."
            discord="Name + Year"
            department="Moderation Department"
            online={true}
          />
        </div>
      </section>

      {/* HELPER */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.right}`}>
          <h2 className={styles.sectionTitle}>Helper</h2>
        </div>

        <div className={styles.staffGrid}>
          <StaffCard
            name="Notch"
            role="Helper"
            description="Community Helper."
            discord="Name + Year"
            department="Community Division"
            online={true}
          />
        </div>
      </section>

      {/* SUPPORT */}
      <section className={styles.section}>
        <div className={`${styles.titleWrapper} ${styles.left}`}>
          <h2 className={styles.sectionTitle}>Support</h2>
        </div>

        <div className={styles.staffGrid}>
          <StaffCard
            name="Notch"
            role="Support"
            description="Discord Support."
            discord="Name + Year"
            department="Community Division"
            online={false}
          />
        </div>
      </section>

    </main>
  )
}

/* ================= STAFF CARD ================= */

function StaffCard({
  name,
  role,
  description,
  discord,
  department,
  online,
}: {
  name: string
  role: string
  description: string
  discord: string
  department: string
  online: boolean
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
    <div className={`${styles.teamCard} ${role === "Owner" ? styles.ownerCard : ""}`}>

      {role === "Owner" && (
        <div className={styles.crown}>👑</div>
      )}

      <img
        className={styles.avatar}
        src={`https://mc-heads.net/avatar/${name}`}
        alt={name}
      />

      <h3>{name}</h3>

      <span className={`${styles.badge} ${badgeClass}`}>
        {role}
      </span>

      <span className={`${styles.status} ${online ? styles.online : styles.offline}`}>
        ● {online ? "Online" : "Offline"}
      </span>

      <span className={styles.department}>
        {department}
      </span>

      <div className={styles.divider}></div>

      <p className={styles.description}>{description}</p>

      <span className={styles.discord}>{discord}</span>

    </div>
  )
}