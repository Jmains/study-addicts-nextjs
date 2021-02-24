import { NextPage } from "next";
import { useRouter } from "next/router";

const CheckoutResultPage: NextPage = () => {
  const router = useRouter();

  // const { data, error } = useSWR(
  //   router.query.session_id
  //     ? `/api/checkout_sessions/${router.query.session_id}`
  //     : null,
  //   fetchGetJSON
  // );

  return <h1>Checkout payment result</h1>;
};

export default CheckoutResultPage;
