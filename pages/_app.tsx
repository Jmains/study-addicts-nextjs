import "./globals.css";
import { UIProvider } from "@components/ui/context";
import type { AppProps } from "next/app";
import Layout from "@components/common/Layout";
import { AuthProvider } from "@utils/hooks/useAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import { useAnalytics } from "@lib/analytics";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // useAnalytics();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UIProvider>
          <Layout>
            <Component {...pageProps} />
            {/* <ReactQueryDevtools initialIsOpen /> */}
          </Layout>
        </UIProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
