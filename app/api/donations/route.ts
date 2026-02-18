import { NextResponse } from "next/server"
import { getDonations } from "@/lib/donationsStore"

export async function GET() {
  return NextResponse.json(getDonations())
}
