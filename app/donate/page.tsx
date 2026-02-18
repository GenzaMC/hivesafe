"use client"

import { useEffect, useState } from "react"
import styles from "./donate.module.css"

export default function DonatePage() {
  const [current, setCurrent] = useState(0)
  const [goal, setGoal] = useState(150)
  const [customAmount, setCustomAmount] = useState("")
  const [loadingGoal, setLoadingGoal] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  /* ================= FETCH GOAL + LIVE UPDATE ================= */

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

  /* ================= STRIPE CHECKOUT ================= */

  async function handleDonate(amount: number) {
    if (!amount || amount <= 0) return

    try {
      setCheckoutLoading(true)

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      })

      if (!res.ok) throw new Error("Checkout failed")

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Checkout error. Please try again.")
      setCheckoutLoading(false)
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>

          <h1 className={styles.title}>Support HiveSafe</h1>

          {/* GOAL */}

          <div className={styles.goalBox}>
            <div className={styles.goalHeader}>
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

          {/* PRESET AMOUNTS */}

          <div className={styles.amountGrid}>
            {[2.5, 5, 7.5, 10].map((amount) => (
              <button
                key={amount}
                className={styles.amountBtn}
                disabled={checkoutLoading}
                onClick={() => handleDonate(amount)}
              >
                {checkoutLoading
                  ? "Redirecting..."
                  : `€${amount.toFixed(2)}`}
              </button>
            ))}
          </div>

          {/* CUSTOM */}

          <div className={styles.customBox}>
            <input
              type="number"
              min="1"
              step="0.50"
              placeholder="Custom amount (€)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              disabled={checkoutLoading}
            />

            <button
              className={styles.customBtn}
              disabled={checkoutLoading}
              onClick={() => {
                const value = Number(customAmount)
                if (!value || value <= 0) return
                handleDonate(value)
              }}
            >
              {checkoutLoading ? "Redirecting..." : "Donate"}
            </button>
          </div>

          {/* DESCRIPTION */}

          <p className={styles.description}>
            Each donation contributes to the continued development of HiveSafe — including stable and secure hosting, improved performance, enhanced events, and new community features.

            <br /><br />
            If you are under 18 years old, your donation must be approved by a parent or legal guardian.
            All donations are final and non-refundable.
          </p>

        </div>
      </div>
    </main>
  )
}
