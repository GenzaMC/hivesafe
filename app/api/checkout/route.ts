import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in .env.local")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "HiveSafe Donation",
              description:
                "Support HiveSafe and help improve the server & community 🐝",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate?canceled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Stripe error" },
      { status: 500 }
    )
  }
}
