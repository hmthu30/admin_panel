import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import SidebarLayout from "@/hoc/layout/SidebarLayout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auxiliary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SidebarLayout>
            <Component {...pageProps} />
          </SidebarLayout>
        </AuthProvider>
      </QueryClientProvider>
    </Auxiliary>
  );
}
