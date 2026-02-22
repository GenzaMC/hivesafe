import express from "express"
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js"

const app = express()
app.use(express.json())

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
})

client.login("DIN_DISCORD_BOT_TOKEN_HER")

app.post("/apply", async (req, res) => {
  const data = req.body

  const channel = await client.channels.fetch("DIN_CHANNEL_ID_HER")

  if (!channel || !channel.isTextBased()) {
    return res.status(500).json({ error: "Invalid channel" })
  }

  const embed = new EmbedBuilder()
    .setTitle(`🐝 ${data.type} Application`)
    .setDescription("```json\n" + JSON.stringify(data, null, 2) + "\n```")
    .setColor(0xffb700)

  await channel.send({ embeds: [embed] })

  res.json({ success: true })
})

app.listen(3001, () => {
  console.log("Bot running on port 3001")
})