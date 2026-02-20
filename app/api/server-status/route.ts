import { NextResponse } from "next/server"

export async function GET() {
  try {
    const serverIP = process.env.MC_SERVER_IP

    if (!serverIP) {
      throw new Error("MC_SERVER_IP not defined")
    }

    const response = await fetch(
      `https://api.mcsrvstat.us/2/${serverIP}`,
      { cache: "no-store" }
    )

    const data = await response.json()

    return NextResponse.json({
      online: data.online,
      players: data.players?.online ?? 0,
      maxPlayers: data.players?.max ?? 0,
    })

  } catch (error) {
    return NextResponse.json({
      online: false,
      players: 0,
      maxPlayers: 0,
    })
  }
}