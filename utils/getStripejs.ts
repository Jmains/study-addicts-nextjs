import { Stripe, loadStripe } from "@stripe/stripe-js";

// To make sure that you don't reinstate Stripe on every render, we recommend that
// you use the singleton pattern to create/retrieve the Stripe instance:

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
