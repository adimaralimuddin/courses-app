import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import LayoutMain from "../components/layout/LayoutMain";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        {/* <LayoutMain> */}
        <Component {...pageProps} />
        {/* </LayoutMain> */}
      </QueryClientProvider>
    </UserProvider>
  );
}
