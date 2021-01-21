import "./globals.css";
import { Provider, createClient } from "urql";
import { UIProvider } from "@components/ui/context";
import type { AppProps } from "next/app";

const client = createClient({
  url: process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT as any,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div className="w-full antialiased">
    <UIProvider>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </UIProvider>
    // </div>
  );
}
