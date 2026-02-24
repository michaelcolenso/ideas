import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const productId = session.metadata?.productId;
      const customerEmail = session.customer_details?.email;

      console.log(
        `[SALE] Product: ${productId}, Customer: ${customerEmail}, Amount: $${(session.amount_total || 0) / 100}`
      );

      // TODO: Trigger delivery — send email with download link, grant access, etc.
      // This is where you integrate your delivery mechanism:
      //   - Send email via Resend/SendGrid/SES
      //   - Add to database
      //   - Grant access to private GitHub repo
      //   - Generate license key
      break;
    }

    case "charge.refunded": {
      const charge = event.data.object as Stripe.Charge;
      console.log(`[REFUND] Charge: ${charge.id}`);
      // TODO: Revoke access if needed
      break;
    }
  }

  return NextResponse.json({ received: true });
}
