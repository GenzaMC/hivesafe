import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await context.params;

    const res = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${username}`
    );

    if (!res.ok) {
      return NextResponse.json({ uuid: null });
    }

    const data = await res.json();

    return NextResponse.json({ uuid: data.id });
  } catch (error) {
    return NextResponse.json({ uuid: null });
  }
}
