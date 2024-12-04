import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import AppStoreProviderWithProps from "@/context/App/AppStoreProvider";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <AppStoreProviderWithProps data={""} error={""}>
          <Component {...pageProps} />
        </AppStoreProviderWithProps>
      </SessionProvider>
    </QueryClientProvider>
  );
}
