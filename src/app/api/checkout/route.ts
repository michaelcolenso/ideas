import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProduct, store } from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    const product = getProduct(productId);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // If a Stripe Price ID is configured, use it; otherwise create an ad-hoc price
    const lineItem: Record<string, unknown> = product.stripePriceId
      ? { price: product.stripePriceId, quantity: 1 }
      : {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [lineItem as any],
      success_url: `${store.url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${store.url}/products/${product.id}`,
      metadata: {
        productId: product.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
