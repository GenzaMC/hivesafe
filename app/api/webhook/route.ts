import { NextResponse } from "next/server"
import Stripe from "stripe"
import { headers } from "next/headers"
import { addDonation } from "@/lib/donationsStore"

export const runtime = "nodejs"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()

  const headerList = await headers()
  const signature = headerList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    if (session.amount_total) {
      const amount = session.amount_total / 100
      addDonation(amount)
      console.log("Donation added:", amount)
    }
  }

  return NextResponse.json({ received: true })
}
