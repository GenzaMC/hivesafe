import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  await fetch("http://188.40.107.9:30050/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return NextResponse.json({ success: true })
}