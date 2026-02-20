"use client"

import { useEffect, useState } from "react"
import styles from "./donate.module.css"

export default function DonatePage() {
  const [current, setCurrent] = useState(0)
  const [goal, setGoal] = useState(150)
  const [customAmount, setCustomAmount] = useState("")
  const [loadingGoal, setLoadingGoal] = useState(true)

  useEffect(() => {
    async function fetchGoal() {
      try {
        const res = await fetch("/api/donations")
        const data = await res.json()
        setCurrent(data.current ?? 0)
        setGoal(data.goal ?? 150)
      } catch (err) {
        console.error("Goal fetch error:", err)
      } finally {
        setLoadingGoal(false)
      }
    }

    fetchGoal()
    const interval = setInterval(fetchGoal, 5000)
    return () => clearInterval(interval)
  }, [])

  const progress =
    goal > 0 ? Math.min((current / goal) * 100, 100) : 0

  async function handleDonate(amount: number) {
    if (!amount || amount <= 0) return

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })

    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Support HiveSafe</h1>
        <p className={styles.heroSubtitle}>
          Support the HiveSafe with secure, high-performance hosting
          and help ensure long-term stability, continuous development, and a thriving future for our community.
        </p>
      </section>

      <section className={styles.section}>

        {/* MONTHLY GOAL */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressHeader}>
            <span>Monthly Goal</span>
            <span>
              {loadingGoal
                ? "Loading..."
                : `€${current} / €${goal}`}
            </span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* DONATION CARDS */}
        <div className={styles.cardGrid}>

          <DonationCard
            image="/euro5.png"
            amount={5}
            description="Support essential hosting and maintenance."
            onDonate={handleDonate}
          />

          <DonationCard
            image="/euro10.png"
            amount={10}
            description="Help improve performance and server stability."
            onDonate={handleDonate}
          />

          <DonationCard
            image="/euro25.png"
            amount={25}
            description="Directly fund future features and community growth."
            onDonate={handleDonate}
          />

          {/* CUSTOM CARD */}
          <div className={styles.beeCard}>
            <div className={styles.cardHeader}>
              <img
                src="/euro.png"
                alt="Custom Donation"
                className={styles.beeImage}
              />
            </div>

            <div className={styles.cardBody}>
              <h3>Choose your amount</h3>

              <input
                type="number"
                min="1"
                step="0.50"
                placeholder="€ Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className={styles.customInput}
              />

              <button
                className={styles.applyButton}
                onClick={() => {
                  const value = Number(customAmount)
                  if (!value || value <= 0) return
                  handleDonate(value)
                }}
              >
                Donate
              </button>

              <span className={styles.cardFooter}>
                HiveSafe • 2026
              </span>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

/* ================= COMPONENT ================= */

function DonationCard({
  image,
  amount,
  description,
  onDonate,
}: {
  image: string
  amount: number
  description: string
  onDonate: (amount: number) => void
}) {
  return (
    <div className={styles.beeCard}>
      <div className={styles.cardHeader}>
        <img
          src={image}
          alt={`€${amount}`}
          className={styles.beeImage}
        />
      </div>

      <div className={styles.cardBody}>
        <h3>Support HiveSafe</h3>
        <p>{description}</p>

        <button
          className={styles.applyButton}
          onClick={() => onDonate(amount)}
        >
          €{amount}
        </button>

        <span className={styles.cardFooter}>
          HiveSafe • 2026
        </span>
      </div>
    </div>
  )
}