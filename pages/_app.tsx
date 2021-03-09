import "./globals.css";
import { Provider as UrqlProvider, createClient } from "urql";
import { UIProvider } from "@components/ui/context";
import type { AppProps } from "next/app";
import Layout from "@components/common/Layout";
import { AuthProvider } from "@utils/hooks/useAuth";

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
    <AuthProvider>
      <UIProvider>
        <UrqlProvider value={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UrqlProvider>
      </UIProvider>
    </AuthProvider>
  );
}
