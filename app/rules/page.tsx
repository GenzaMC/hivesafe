"use client"

import { useState } from "react"
import styles from "./rules.module.css"

export default function RulesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.rulesCard}>

          <h1 className={styles.title}>HiveSafe – Official Rules</h1>

          <p className={styles.subtitle}>
            These rules exist to ensure a safe, fair, and enjoyable experience
            for everyone. By playing on HiveSafe or joining our Discord,
            you agree to follow them.
          </p>

          {/* GENERAL RULES */}
          <SectionTitle text="🌍 General Rules" />
          {generalRules.map((rule, index) => (
            <Accordion key={`general-${index}`} {...rule} />
          ))}

          {/* SERVER RULES */}
          <SectionTitle text="⛏️ Minecraft Server Rules" />
          {serverRules.map((rule, index) => (
            <Accordion key={`server-${index}`} {...rule} />
          ))}

          {/* DISCORD RULES */}
          <SectionTitle text="💬 Discord Rules" />
          {discordRules.map((rule, index) => (
            <Accordion key={`discord-${index}`} {...rule} />
          ))}

        </div>
      </div>
    </main>
  )
}

/* ================= SECTION TITLE ================= */

function SectionTitle({ text }: { text: string }) {
  return <h2 className={styles.sectionTitle}>{text}</h2>
}

/* ================= ACCORDION ================= */

function Accordion({
  title,
  content,
}: {
  title: string
  content: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.ruleItem} ${open ? styles.open : ""}`}>
      <button
        className={styles.ruleHeader}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>

      <div
        className={styles.ruleContent}
        style={{
          maxHeight: open ? "500px" : "0px",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  )
}

/* ================= RULE DATA ================= */

const generalRules = [
  {
    title: "1. Respect Everyone",
    content:
      "Treat all players and members with respect. Harassment, hate speech, discrimination, racism, sexism, or personal attacks are strictly prohibited."
  },
  {
    title: "2. No Toxic Behavior",
    content:
      "Excessive negativity, baiting, bullying, or provoking drama will not be tolerated."
  },
  {
    title: "3. Follow Staff Instructions",
    content:
      "Staff decisions are final. Arguing publicly or disrespecting staff may result in punishment."
  },
  {
    title: "4. No Threats or Doxxing",
    content:
      "Threatening others or sharing private information (real names, addresses, IPs, etc.) will result in an immediate ban."
  },
  {
    title: "5. Use Common Sense",
    content:
      "Not every rule can be written. If something seems unfair or harmful, don’t do it."
  }
]

const serverRules = [
  {
    title: "1. No Cheating or Unfair Advantages",
    content:
      "The use of hacked clients, x-ray, auto-clickers, macros, duplication glitches, or unfair mods is strictly forbidden."
  },
  {
    title: "2. No Griefing or Stealing",
    content:
      "Do not destroy, modify, or steal from other players' builds or claims without permission."
  },
  {
    title: "3. Respect Claims & Property",
    content:
      "Do not attempt to bypass protections or exploit weaknesses in claim systems."
  },
  {
    title: "4. No Lag Machines",
    content:
      "Redstone builds, farms, or machines that intentionally cause lag or crash the server are prohibited."
  },
  {
    title: "5. No Exploiting Bugs",
    content:
      "If you find a bug or glitch, report it. Exploiting it for personal gain will result in punishment."
  },
  {
    title: "6. Fair PvP",
    content:
      "Only engage in PvP where it is allowed. No combat logging or exploiting mechanics."
  },
  {
    title: "7. No Real Money Trading (RMT)",
    content:
      "Trading in-game items, currency, or accounts for real-world money is not allowed unless officially approved."
  }
]

const discordRules = [
  {
    title: "1. No Spam",
    content:
      "Do not flood channels with repeated messages, excessive emojis, caps abuse, or meaningless content."
  },
  {
    title: "2. No NSFW Content",
    content:
      "NSFW, explicit, or inappropriate content is strictly prohibited."
  },
  {
    title: "3. No Advertising",
    content:
      "Do not advertise other servers, Discords, products, or services without permission."
  },
  {
    title: "4. Use Channels Correctly",
    content:
      "Keep conversations in the appropriate channels to maintain organization."
  },
  {
    title: "5. No Mass Pinging",
    content:
      "Do not ping @everyone, @here, or multiple users without valid reason."
  },
  {
    title: "6. No Impersonation",
    content:
      "Do not pretend to be staff or another member."
  }
]
