import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <section className={styles.hero}>
          <h1>Welcome to HiveSafe</h1>
          <p>The Family-Friendly Minecraft Whitelist Server</p>
        </section>

        <section className={styles.beeRow}>
          <BeeCard
            title="Lone Bee"
            image="/lone-bee.png"
            description="Apply alone and start your journey. Perfect for solo players."
            href="/apply/lone"
          />
          <BeeCard
            title="Bee Squad"
            image="/bee-squad.png"
            description="Apply together with your friends. Built for small groups."
            href="/apply/squad"
          />
          <BeeCard
            title="Bee Family"
            image="/bee-family.png"
            description="Apply as a family unit. Safe and welcoming for everyone."
            href="/apply/family"
          />
        </section>

      </div>
    </main>
  )
}

function BeeCard({
  title,
  image,
  description,
  href,
}: {
  title: string
  image: string
  description: string
  href: string
}) {
  return (
    <div className={styles.beeCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className={styles.cardText}>{description}</p>

      <Link href={href} className={styles.applyButton}>
        Apply Now
      </Link>
    </div>
  )
}

