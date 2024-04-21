import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClientAtom } from "jotai-tanstack-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
const HydrateAtoms = ({ children }: { children: ReactNode }) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <HydrateAtoms>
              <Router />
            </HydrateAtoms>
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
