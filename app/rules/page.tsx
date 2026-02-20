"use client"

import styles from "./rules.module.css"

export default function RulesPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>HiveSafe Rules</h1>
        <p className={styles.subtitle}>
          These rules ensure a safe, structured and fair experience
          across our Minecraft server and Discord community.
          By joining HiveSafe, you agree to follow them.
        </p>
      </section>

      <RuleSection
        title="🌍 General Rules"
        rules={generalRules}
        align="left"
      />

      <RuleSection
        title="⛏️ Minecraft Server Rules"
        rules={serverRules}
        align="right"
      />

      <RuleSection
        title="⚙️ Allowed Mods"
        rules={allowedMods}
        align="left"
      />

      <RuleSection
        title="💬 Discord Rules"
        rules={discordRules}
        align="right"
      />

    </main>
  )
}

/* ========================= */
/* SECTION COMPONENT */
/* ========================= */

function RuleSection({
  title,
  rules,
  align,
}: {
  title: string
  rules: { title: string; content: string }[]
  align: "left" | "right"
}) {
  return (
    <section className={styles.section}>
      <div className={`${styles.titleWrapper} ${styles[align]}`}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>

      <div className={styles.rulesGrid}>
        {rules.map((rule, index) => (
          <div key={index} className={styles.ruleCard}>
            <h3>{rule.title}</h3>
            <p>{rule.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ========================= */
/* RULE DATA */
/* ========================= */

const generalRules = [
  {
    title: "Respect Everyone",
    content:
      "Treat all players and members with respect. Harassment, hate speech, discrimination or personal attacks are strictly prohibited."
  },
  {
    title: "No Toxic Behavior",
    content:
      "Excessive negativity, baiting, bullying or provoking drama will not be tolerated."
  },
  {
    title: "Follow Staff Instructions",
    content:
      "Staff decisions are final. Public arguments or disrespect toward staff may result in punishment."
  },
  {
    title: "No Threats or Doxxing",
    content:
      "Threatening others or sharing private information will result in an immediate ban."
  },
  {
    title: "Use Common Sense",
    content:
      "If something seems harmful or unfair, don’t do it."
  }
]

const serverRules = [
  {
    title: "No Cheating",
    content:
      "Hacked clients, x-ray, macros or unfair mods are strictly forbidden."
  },
  {
    title: "No Griefing",
    content:
      "Do not destroy, modify or steal from other players."
  },
  {
    title: "Respect Claims",
    content:
      "Do not bypass protections or exploit weaknesses."
  },
  {
    title: "No Lag Machines",
    content:
      "Redstone builds or machines that cause lag are prohibited."
  },
  {
    title: "No Exploiting Bugs",
    content:
      "Report bugs immediately. Exploiting them will result in punishment."
  },
  {
    title: "Fair PvP",
    content:
      "No combat logging or mechanic abuse."
  },
  {
    title: "No Real Money Trading",
    content:
      "Trading items or accounts for real money is not allowed."
  }
]

const allowedMods = [
  {
    title: "OptiFine",
    content:
      "Allowed for performance and visual improvements only. No gameplay advantages."
  },
  {
    title: "Sodium / Iris",
    content:
      "Performance optimization mods are fully allowed."
  },
  {
    title: "MiniMap (No Radar)",
    content:
      "Minimaps are allowed, but entity radar, cave maps or player tracking features are forbidden."
  },
  {
    title: "Replay Mod",
    content:
      "Allowed for recording and cinematic purposes only."
  },
  {
    title: "Litematica (No Printer)",
    content:
      "Schematics are allowed, but automated printer features are strictly prohibited."
  },
  {
    title: "Client-Side UI Mods",
    content:
      "Inventory tweaks, HUD customization and accessibility mods are allowed."
  }
]

const discordRules = [
  {
    title: "No Spam",
    content:
      "Do not flood channels with repeated messages or meaningless content."
  },
  {
    title: "No NSFW",
    content:
      "Explicit or inappropriate content is strictly prohibited."
  },
  {
    title: "No Advertising",
    content:
      "Do not advertise other servers or services without permission."
  },
  {
    title: "Use Channels Correctly",
    content:
      "Keep conversations in the appropriate channels."
  },
  {
    title: "No Mass Pinging",
    content:
      "Do not ping multiple users without valid reason."
  },
  {
    title: "No Impersonation",
    content:
      "Do not pretend to be staff or another member."
  }
]
