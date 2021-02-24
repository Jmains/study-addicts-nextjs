import { buffer } from "micro";
import Cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// https://github.com/stripe/stripe-node#configuration
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// To make sure that a webhook event was sent by Stripe, not by a malicious
// third party, you need to verify the webhook event signature:
const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const webhookStripeSignatureHeader = req.headers["stripe-signature"]!;

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        webhookStripeSignatureHeader,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message
      console.log(`Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    console.log(`Success:`, event.id);
  }
};

export default cors(webhookHandler as any);
