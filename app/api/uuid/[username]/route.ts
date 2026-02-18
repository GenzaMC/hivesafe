import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const res = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${params.username}`
    )

    if (!res.ok) {
      return NextResponse.json({ uuid: null })
    }

    const data = await res.json()

    return NextResponse.json({ uuid: data.id })
  } catch (error) {
    return NextResponse.json({ uuid: null })
  }
}
