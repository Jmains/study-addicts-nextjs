import "./globals.css";
import { UIProvider } from "@components/ui/context";
import type { AppProps } from "next/app";
import Layout from "@components/common/Layout";
import { AuthProvider } from "@utils/hooks/useAuth";
// import { useAnalytics } from "@lib/analytics";

export default function App({ Component, pageProps }: AppProps) {
  // useAnalytics();

  return (
    <AuthProvider>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </AuthProvider>
  );
}
