import { formatAmountForStripe } from "@utils/stripeHelpers";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const amount: number = req.body.amount;
    try {
      // Validate amount from client
      if (!(amount >= 1 && amount <= 200)) {
        throw new Error("Invalid amount");
      }
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "donate",
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Custom amount donation",
            amount: formatAmountForStripe(amount, "usd"),
            currency: "usd",
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      };

      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params
      );
      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
