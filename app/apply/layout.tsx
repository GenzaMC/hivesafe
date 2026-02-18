import styles from "./page.module.css"

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  )
}
